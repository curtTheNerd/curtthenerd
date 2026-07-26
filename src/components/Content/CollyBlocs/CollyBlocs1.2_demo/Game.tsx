import { useState, useRef, useCallback, useEffect } from "react";
import { useGameLoop } from "./hooks/useGameLoop";
import { Player } from "./game/Player";
import { EnemyBlock } from "./game/EnemyBlock";
import { BarrierBlock } from "./game/BarrierBlock";
import { spawnEnemy, spawnBarrier, getEnemyComposition } from "./game/spawnHelpers";
import { rectIntersects } from "./game/collision";
import { createGridCanvas } from "./game/gridRenderer";
import type { EnemyColor } from "./game/types";
import {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  TILE_SIZE,
  PLAYER_SIZE,
  PLAYER_SPEED,
  ENEMY_SIZE,
  ENEMY_MIN_SPAWN_DIST,
  BARRIER_ACTIVATE_SCORE,
  BARRIER_COUNT_STEP_SCORE,
  MAX_BARRIERS,
  FPS_OPTIONS,
} from "./game/constants";
import HUD from "./HUD";

type TickFn = ((dt: number) => void) & {
  maybeSpawnBarriers: (newScore: number) => void;
  maybeRebalanceEnemies: (newScore: number) => void;
};

export default function Game() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  const enemiesRef = useRef<EnemyBlock[]>([]);
  const barriersRef = useRef<BarrierBlock[]>([]);
  const gridCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const tickRef = useRef<TickFn | null>(null);

  const [score, setScore] = useState(0);
  const [targetFps, setTargetFps] = useState<number>(60);

  // Spawn enemies to match target composition
  const spawnEnemyComposition = useCallback(
    (composition: ReturnType<typeof getEnemyComposition>) => {
      const { composition: colorCounts } = composition;
      const colors: EnemyColor[] = [];

      for (const [color, count] of Object.entries(colorCounts) as [EnemyColor, number][]) {
        for (let i = 0; i < count; i++) {
          colors.push(color);
        }
      }

      // Shuffle colors array
      for (let i = colors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
      }

      // Spawn enemies with specific colors
      for (const color of colors) {
        const enemy = spawnEnemy(
          playerRef.current!,
          barriersRef.current,
          enemiesRef.current,
          CANVAS_WIDTH,
          CANVAS_HEIGHT,
          ENEMY_SIZE,
          ENEMY_MIN_SPAWN_DIST,
          color,
        );
        if (enemy) enemiesRef.current.push(enemy);
      }
    },
    [],
  );

  // Mount: initialize game state
  const initGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create grid canvas
    gridCanvasRef.current = createGridCanvas(
      CANVAS_WIDTH / TILE_SIZE,
      CANVAS_HEIGHT / TILE_SIZE,
      TILE_SIZE,
    );

    // Create player
    playerRef.current = new Player(
      CANVAS_WIDTH / 2 - PLAYER_SIZE / 2,
      CANVAS_HEIGHT / 2 - PLAYER_SIZE / 2,
      PLAYER_SIZE,
      PLAYER_SPEED,
      CANVAS_WIDTH,
      CANVAS_HEIGHT,
    );
    playerRef.current.attachListeners();

    // Spawn initial enemies with base composition (15 total: 12 green, 3 yellow)
    enemiesRef.current = [];
    const initialComposition = getEnemyComposition(0);
    spawnEnemyComposition(initialComposition);

    // Initial barriers (none at start)
    barriersRef.current = [];
  }, [spawnEnemyComposition]);

  // Setup game loop
  const maybeSpawnBarriers = useCallback((newScore: number) => {
    if (newScore < BARRIER_ACTIVATE_SCORE) return;

    const desiredCount = Math.min(
      Math.floor((newScore - BARRIER_ACTIVATE_SCORE) / BARRIER_COUNT_STEP_SCORE) + 1,
      MAX_BARRIERS,
    );

    while (barriersRef.current.length < desiredCount) {
      const barrier = spawnBarrier(
        barriersRef.current,
        playerRef.current!,
        CANVAS_WIDTH / TILE_SIZE,
        CANVAS_HEIGHT / TILE_SIZE,
        TILE_SIZE,
      );
      if (barrier) {
        barriersRef.current.push(barrier);
      } else {
        break;
      }
    }
  }, []);

  // Rebalance enemies when score increases (add new enemies to match composition)
  const maybeRebalanceEnemies = useCallback((newScore: number) => {
    const composition = getEnemyComposition(newScore);
    const targetTotal = composition.total;
    const currentCount = enemiesRef.current.length;

    if (currentCount < targetTotal) {
      const newEnemiesNeeded = targetTotal - currentCount;
      const { composition: colorCounts } = composition;

      // Count existing enemies by color
      const existingCounts: Record<EnemyColor, number> = { green: 0, yellow: 0, purple: 0 };
      for (const enemy of enemiesRef.current) {
        existingCounts[enemy.color]++;
      }

      // Determine what colors to spawn (by deficit)
      const colorsToSpawn: EnemyColor[] = [];
      for (const [color, targetCount] of Object.entries(colorCounts) as [EnemyColor, number][]) {
        const needed = Math.max(0, targetCount - existingCounts[color]);
        for (let i = 0; i < needed; i++) {
          colorsToSpawn.push(color);
        }
      }

      // Spawn new enemies with needed colors, retrying until we reach target
      let spawned = 0;
      let colorIdx = 0;
      while (spawned < newEnemiesNeeded && colorIdx < colorsToSpawn.length) {
        const color = colorsToSpawn[colorIdx];
        const enemy = spawnEnemy(
          playerRef.current!,
          barriersRef.current,
          enemiesRef.current,
          CANVAS_WIDTH,
          CANVAS_HEIGHT,
          ENEMY_SIZE,
          ENEMY_MIN_SPAWN_DIST,
          color,
        );
        if (enemy) {
          enemiesRef.current.push(enemy);
          spawned++;
        }
        colorIdx++;
      }
    }
  }, []);

  const handleTick = useCallback((dt: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const player = playerRef.current!;

    // Update player
    player.update(dt, barriersRef.current);

    // Enemy collision check (remove in-place to avoid array allocation)
    const killedColors: EnemyColor[] = [];
    for (let i = enemiesRef.current.length - 1; i >= 0; i--) {
      if (rectIntersects(player, enemiesRef.current[i])) {
        const enemy = enemiesRef.current[i];
        killedColors.push(enemy.color);

        // Call color-specific collision handler
        const handlerName = `onCollide${enemy.color.charAt(0).toUpperCase() + enemy.color.slice(1)}` as
          | "onCollideGreen"
          | "onCollideYellow"
          | "onCollidePurple";
        player[handlerName]();

        enemiesRef.current.splice(i, 1);
      }
    }

    // Respawn killed enemies matching their original colors
    for (const color of killedColors) {
      const enemy = spawnEnemy(
        player,
        barriersRef.current,
        enemiesRef.current,
        CANVAS_WIDTH,
        CANVAS_HEIGHT,
        ENEMY_SIZE,
        ENEMY_MIN_SPAWN_DIST,
        color,
      );
      if (enemy) enemiesRef.current.push(enemy);
    }

    // Update score and rebalance enemies based on new score
    if (killedColors.length > 0) {
      setScore((s) => {
        const newScore = s + killedColors.length;
        tickRef.current!.maybeSpawnBarriers(newScore);
        tickRef.current!.maybeRebalanceEnemies(newScore);
        return newScore;
      });
    }

    // Draw
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(gridCanvasRef.current!, 0, 0);

    barriersRef.current.forEach((b) => b.draw(ctx));
    enemiesRef.current.forEach((e) => e.draw(ctx));
    player.draw(ctx);
  }, []);

  // Setup ref assignments (must be in effect, not render phase)
  useEffect(() => {
    const tick = handleTick as TickFn;
    tick.maybeSpawnBarriers = maybeSpawnBarriers;
    tick.maybeRebalanceEnemies = maybeRebalanceEnemies;
    tickRef.current = tick;
  }, [handleTick, maybeSpawnBarriers, maybeRebalanceEnemies]);

  useGameLoop({
    targetFps,
    onTick: handleTick,
    enabled: true,
  });

  // Initialize on mount
  useEffect(() => {
    initGame();
    return () => {
      playerRef.current?.detachListeners();
    };
  }, [initGame]);

  const handleToggleFps = () => {
    setTargetFps((current) => {
      const idx = FPS_OPTIONS.indexOf(current as (typeof FPS_OPTIONS)[number]);
      return FPS_OPTIONS[(idx + 1) % FPS_OPTIONS.length];
    });
  };

  return (
    <div style={{ position: "relative", width: CANVAS_WIDTH }}>
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        style={{ display: "block", border: "1px solid #666" }}
      />
      <HUD score={score} targetFps={targetFps} onToggleFps={handleToggleFps} />
    </div>
  );
}

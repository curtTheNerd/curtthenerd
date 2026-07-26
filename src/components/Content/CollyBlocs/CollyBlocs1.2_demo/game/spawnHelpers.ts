import { EnemyBlock } from "./EnemyBlock";
import { BarrierBlock } from "./BarrierBlock";
import {
  BARRIER_ADJACENCY_CHANCE,
  MAX_BARRIERS,
  ENEMY_COLORS_BY_SCORE,
} from "./constants";
import { rectIntersects } from "./collision";
import type { EnemyColor, EnemyThreshold, Rect } from "./types";
import type { Player } from "./Player";

export function getEnemyComposition(score: number): EnemyThreshold {
  // Find the appropriate threshold for current score
  let composition = ENEMY_COLORS_BY_SCORE[0];
  for (const threshold of ENEMY_COLORS_BY_SCORE) {
    if (score >= threshold.score) {
      composition = threshold;
    } else {
      break;
    }
  }
  return composition;
}

export function isFarEnoughFromPlayer(
  x: number,
  y: number,
  size: number,
  player: Rect,
  minDist: number,
): boolean {
  const entityCenterX = x + size / 2;
  const entityCenterY = y + size / 2;
  const playerCenterX = player.x + player.size / 2;
  const playerCenterY = player.y + player.size / 2;

  const dx = entityCenterX - playerCenterX;
  const dy = entityCenterY - playerCenterY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  return distance >= minDist;
}

export function spawnEnemy(
  player: Player,
  barriers: BarrierBlock[],
  existingEnemies: EnemyBlock[],
  canvasWidth: number,
  canvasHeight: number,
  size: number,
  minDist: number,
  color: EnemyColor = "green",
): EnemyBlock | null {
  const maxRetries = 25;
  for (let i = 0; i < maxRetries; i++) {
    const x = Math.random() * (canvasWidth - size);
    const y = Math.random() * (canvasHeight - size);

    const enemy: Rect = { x, y, size };

    // Check distance from player first (early exit)
    if (!isFarEnoughFromPlayer(x, y, size, player, minDist)) continue;

    // Check overlap with barriers
    let overlapsBarrier = false;
    for (const barrier of barriers) {
      if (rectIntersects(enemy, barrier)) {
        overlapsBarrier = true;
        break;
      }
    }
    if (overlapsBarrier) continue;

    // Check overlap with other enemies
    let overlapsEnemy = false;
    for (const other of existingEnemies) {
      if (rectIntersects(enemy, other)) {
        overlapsEnemy = true;
        break;
      }
    }
    if (overlapsEnemy) continue;

    return new EnemyBlock(x, y, size, color);
  }

  return null;
}

export function spawnBarrier(
  barriers: BarrierBlock[],
  player: Player,
  cols: number,
  rows: number,
  tileSize: number,
): BarrierBlock | null {
  if (barriers.length >= MAX_BARRIERS) return null;

  // Build occupancy set
  const occupied = new Set<string>();
  for (const barrier of barriers) {
    occupied.add(`${barrier.col},${barrier.row}`);
  }

  // Get player tile footprint (could occupy multiple tiles)
  const playerTiles = new Set<string>();
  const playerColStart = Math.floor(player.x / tileSize);
  const playerColEnd = Math.floor((player.x + player.size - 1) / tileSize);
  const playerRowStart = Math.floor(player.y / tileSize);
  const playerRowEnd = Math.floor((player.y + player.size - 1) / tileSize);

  for (let col = playerColStart; col <= playerColEnd; col++) {
    for (let row = playerRowStart; row <= playerRowEnd; row++) {
      if (col >= 0 && col < cols && row >= 0 && row < rows) {
        playerTiles.add(`${col},${row}`);
      }
    }
  }

  // Try adjacency spawn
  if (Math.random() < BARRIER_ADJACENCY_CHANCE && barriers.length > 0) {
    const randomBarrier = barriers[Math.floor(Math.random() * barriers.length)];
    const neighbors = [
      [randomBarrier.col - 1, randomBarrier.row],
      [randomBarrier.col + 1, randomBarrier.row],
      [randomBarrier.col, randomBarrier.row - 1],
      [randomBarrier.col, randomBarrier.row + 1],
    ];

    for (const [col, row] of neighbors) {
      if (col < 0 || col >= cols || row < 0 || row >= rows) continue;
      if (occupied.has(`${col},${row}`)) continue;
      if (playerTiles.has(`${col},${row}`)) continue;

      return new BarrierBlock(col, row, tileSize);
    }
  }

  // Random spawn
  const maxRetries = 25;
  for (let i = 0; i < maxRetries; i++) {
    const col = Math.floor(Math.random() * cols);
    const row = Math.floor(Math.random() * rows);

    if (occupied.has(`${col},${row}`)) continue;
    if (playerTiles.has(`${col},${row}`)) continue;

    return new BarrierBlock(col, row, tileSize);
  }

  return null;
}

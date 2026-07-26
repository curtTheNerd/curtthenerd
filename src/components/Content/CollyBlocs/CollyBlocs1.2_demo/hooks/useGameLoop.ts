import { useEffect, useRef } from "react";

interface UseGameLoopOptions {
  targetFps: number;
  onTick: (dt: number) => void;
  enabled?: boolean;
}

export function useGameLoop({
  targetFps,
  onTick,
  enabled = true,
}: UseGameLoopOptions): void {
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      return;
    }

    const interval = 1000 / targetFps;
    let accumulator = 0;
    let lastTime = performance.now();

    function loop(now: number) {
      rafIdRef.current = requestAnimationFrame(loop);

      const raw = now - lastTime;
      lastTime = now;

      // Clamp spikes (tab-switch protection)
      accumulator += Math.min(raw, 100);

      while (accumulator >= interval) {
        onTick(interval / 1000); // dt in seconds
        accumulator -= interval;
      }
    }

    rafIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [targetFps, onTick, enabled]);
}

import type { Rect } from "./types";
import type { BarrierBlock } from "./BarrierBlock";

export function rectIntersects(a: Rect, b: Rect): boolean {
  return (
    a.x < b.x + b.size &&
    a.x + a.size > b.x &&
    a.y < b.y + b.size &&
    a.y + a.size > b.y
  );
}

export function resolveBarrierCollisions(
  entity: Rect,
  barriers: BarrierBlock[],
  dx: number,
  dy: number,
): void {
  // Apply dx to entity.x
  entity.x += dx;

  // Resolve X-axis collisions
  for (const barrier of barriers) {
    // Early exit: skip if far away (diagonal distance > 100px)
    if (Math.abs(entity.x - barrier.x) > 100) continue;
    if (rectIntersects(entity, barrier)) {
      if (dx > 0) {
        // Moving right: push left
        entity.x = barrier.x - entity.size;
      } else if (dx < 0) {
        // Moving left: push right
        entity.x = barrier.x + barrier.size;
      }
    }
  }

  // Apply dy to entity.y
  entity.y += dy;

  // Resolve Y-axis collisions
  for (const barrier of barriers) {
    // Early exit: skip if far away
    if (Math.abs(entity.y - barrier.y) > 100) continue;
    if (rectIntersects(entity, barrier)) {
      if (dy > 0) {
        // Moving down: push up
        entity.y = barrier.y - entity.size;
      } else if (dy < 0) {
        // Moving up: push down
        entity.y = barrier.y + barrier.size;
      }
    }
  }
}

import type { EnemyThreshold } from "./types";

export const CANVAS_WIDTH = 960; // 32 tiles × 30px
export const CANVAS_HEIGHT = 540; // 18 tiles × 30px
export const TILE_SIZE = 30;

export const PLAYER_SIZE = 28; // slightly smaller than tile
export const PLAYER_SPEED = 200; // px/sec (consistent across 30/60 FPS via dt)

export const ENEMY_SIZE = 28;
export const ENEMY_MIN_SPAWN_DIST = 150; // px from player center
export const INITIAL_ENEMY_COUNT = 15; // starting number of enemies (base count)

// Enemy color composition thresholds by score
export const ENEMY_COLORS_BY_SCORE: EnemyThreshold[] = [
  { score: 0, total: 15, composition: { green: 10, yellow: 3, purple: 2 } },
  { score: 10, total: 18, composition: { green: 10, yellow: 5, purple: 3 } },
  { score: 25, total: 22, composition: { green: 8, yellow: 10, purple: 4 } },
];

export const BARRIER_SIZE = 30; // one full tile
export const BARRIER_COLOR = "#FF8C00";
export const BARRIER_ADJACENCY_CHANCE = 0.9;
export const MAX_BARRIERS = 40;

// Thresholds — fill in during finetuning
export const BARRIER_ACTIVATE_SCORE = 5; // score at which barriers start
export const BARRIER_COUNT_STEP_SCORE = 10; // each +10 score adds one barrier

export const FPS_OPTIONS = [30, 60] as const;

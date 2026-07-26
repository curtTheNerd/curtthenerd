export type EnemyColor = "green" | "yellow" | "purple";

export interface Rect {
  x: number;
  y: number;
  size: number;
}

export interface EnemyThreshold {
  score: number;
  total: number;
  composition: Record<EnemyColor, number>;
}

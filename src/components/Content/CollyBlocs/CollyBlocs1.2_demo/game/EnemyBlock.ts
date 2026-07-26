import type { EnemyColor, Rect } from "./types";

const COLOR_MAP: Record<EnemyColor, string> = {
  green: "#00FF00",
  yellow: "#FFFF00",
  purple: "#9933FF",
};

export class EnemyBlock implements Rect {
  x: number;
  y: number;
  size: number;
  color: EnemyColor;

  constructor(x: number, y: number, size: number, color: EnemyColor = "green") {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = COLOR_MAP[this.color] ?? "#FF0000";
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

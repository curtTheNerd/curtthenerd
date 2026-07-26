import { BARRIER_COLOR } from "./constants";
import type { Rect } from "./types";

export class BarrierBlock implements Rect {
  col: number;
  row: number;
  tileSize: number;
  x: number;
  y: number;
  size: number;

  constructor(col: number, row: number, tileSize: number) {
    this.col = col;
    this.row = row;
    this.tileSize = tileSize;
    this.x = col * tileSize;
    this.y = row * tileSize;
    this.size = tileSize;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = BARRIER_COLOR;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

import { resolveBarrierCollisions } from "./collision";
import type { BarrierBlock } from "./BarrierBlock";
import type { Rect } from "./types";

interface Keys {
  ArrowUp: boolean;
  ArrowDown: boolean;
  ArrowLeft: boolean;
  ArrowRight: boolean;
}

export class Player implements Rect {
  x: number;
  y: number;
  size: number;
  speed: number;
  canvasWidth: number;
  canvasHeight: number;
  keys: Keys;
  private _onKeyDown: (e: KeyboardEvent) => void;
  private _onKeyUp: (e: KeyboardEvent) => void;

  constructor(
    x: number,
    y: number,
    size: number,
    speed: number,
    canvasWidth: number,
    canvasHeight: number,
  ) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    this.keys = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false,
    };

    this._onKeyDown = this._handleKeyDown.bind(this);
    this._onKeyUp = this._handleKeyUp.bind(this);
  }

  private _handleKeyDown(e: KeyboardEvent): void {
    if (e.key in this.keys) {
      this.keys[e.key as keyof Keys] = true;
    }
  }

  private _handleKeyUp(e: KeyboardEvent): void {
    if (e.key in this.keys) {
      this.keys[e.key as keyof Keys] = false;
    }
  }

  attachListeners(): void {
    window.addEventListener("keydown", this._onKeyDown);
    window.addEventListener("keyup", this._onKeyUp);
  }

  detachListeners(): void {
    window.removeEventListener("keydown", this._onKeyDown);
    window.removeEventListener("keyup", this._onKeyUp);
  }

  update(dt: number, barriers: BarrierBlock[] = []): void {
    let dx = 0;
    let dy = 0;

    if (this.keys.ArrowLeft) dx -= this.speed * dt;
    if (this.keys.ArrowRight) dx += this.speed * dt;
    if (this.keys.ArrowUp) dy -= this.speed * dt;
    if (this.keys.ArrowDown) dy += this.speed * dt;

    // Clamp to canvas
    const newX = Math.max(
      0,
      Math.min(this.canvasWidth - this.size, this.x + dx),
    );
    const newY = Math.max(
      0,
      Math.min(this.canvasHeight - this.size, this.y + dy),
    );

    // Calculate actual movement
    const actualDx = newX - this.x;
    const actualDy = newY - this.y;

    // Resolve barrier collisions per-axis
    resolveBarrierCollisions(this, barriers, actualDx, actualDy);

    // Final clamp after collision resolution
    this.x = Math.max(0, Math.min(this.canvasWidth - this.size, this.x));
    this.y = Math.max(0, Math.min(this.canvasHeight - this.size, this.y));
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "rgb(0, 255, 4)";
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  onCollideGreen(): void {
    // Green enemy collision handler
  }

  onCollideYellow(): void {
    // Yellow enemy collision handler
  }

  onCollidePurple(): void {
    // Purple enemy collision handler
  }
}

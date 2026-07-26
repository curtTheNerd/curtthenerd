export function createGridCanvas(
  cols: number,
  rows: number,
  tileSize: number,
): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = cols * tileSize;
  canvas.height = rows * tileSize;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#111827";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(100,100,100,0.3)";
  ctx.lineWidth = 0.5;

  // Draw vertical lines
  for (let i = 0; i <= cols; i++) {
    const x = i * tileSize;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  // Draw horizontal lines
  for (let i = 0; i <= rows; i++) {
    const y = i * tileSize;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  return canvas;
}

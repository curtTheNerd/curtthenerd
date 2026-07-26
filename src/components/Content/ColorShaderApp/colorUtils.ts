export type RGB = [number, number, number];

export const rgbToHex = ([r, g, b]: RGB): string =>
  `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`.toUpperCase();

export const rgbToHsl = ([r, g, b]: RGB): [number, number, number] => {
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const lightness = (max + min) / 2;

  let hue = 0;
  let saturation = 0;

  if (max !== min) {
    const delta = max - min;
    saturation =
      lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    switch (max) {
      case rNorm:
        hue = (gNorm - bNorm) / delta + (gNorm < bNorm ? 6 : 0);
        break;
      case gNorm:
        hue = (bNorm - rNorm) / delta + 2;
        break;
      default:
        hue = (rNorm - gNorm) / delta + 4;
        break;
    }
    hue /= 6;
  }

  return [Math.round(hue * 360), Math.round(saturation * 100), Math.round(lightness * 100)];
};

export const formatRgb = ([r, g, b]: RGB): string => `rgb(${r}, ${g}, ${b})`;

export const formatHsl = ([h, s, l]: [number, number, number]): string =>
  `hsl(${h}, ${s}%, ${l}%)`;

const clamp255 = (v: number) => Math.max(0, Math.min(255, Math.round(v)));

export const hslToRgb = (h: number, s: number, l: number): RGB => {
  const sNorm = s / 100;
  const lNorm = l / 100;

  const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = lNorm - c / 2;

  let rgb: RGB = [0, 0, 0];
  if (h < 60) rgb = [c, x, 0];
  else if (h < 120) rgb = [x, c, 0];
  else if (h < 180) rgb = [0, c, x];
  else if (h < 240) rgb = [0, x, c];
  else if (h < 300) rgb = [x, 0, c];
  else rgb = [c, 0, x];

  return rgb.map((v) => clamp255((v + m) * 255)) as RGB;
};

//  accepts hex ("#f00", "#ff0000"), rgb("255, 0, 0" or "rgb(255,0,0)")
//  and hsl("0, 100%, 50%" or "hsl(0,100%,50%)") strings -> RGB, or null if unparseable
export const parseColorString = (input: string): RGB | null => {
  const value = input.trim();
  if (!value) return null;

  const hexMatch = value.match(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (hexMatch) {
    let hex = hexMatch[1];
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((c) => c + c)
        .join("");
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return [r, g, b];
  }

  const hslMatch = value.match(
    /^hsla?\(?\s*(-?\d+(?:\.\d+)?)[\s,]+(\d+(?:\.\d+)?)%[\s,]+(\d+(?:\.\d+)?)%\s*\)?$/i
  );
  if (hslMatch) {
    const h = ((parseFloat(hslMatch[1]) % 360) + 360) % 360;
    const s = parseFloat(hslMatch[2]);
    const l = parseFloat(hslMatch[3]);
    return hslToRgb(h, s, l);
  }

  const rgbMatch = value.match(
    /^rgba?\(?\s*(\d+(?:\.\d+)?)[\s,]+(\d+(?:\.\d+)?)[\s,]+(\d+(?:\.\d+)?)\s*\)?$/i
  );
  if (rgbMatch) {
    return [
      clamp255(parseFloat(rgbMatch[1])),
      clamp255(parseFloat(rgbMatch[2])),
      clamp255(parseFloat(rgbMatch[3])),
    ];
  }

  return null;
};

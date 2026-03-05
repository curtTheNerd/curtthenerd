type RGB = [number, number, number];

export const colorProgression = (
  [red, green, blue]: RGB,
  progressionParameter: number
) => {
  const oldColor: RGB = [red, green, blue];
  const newColor: RGB = oldColor.map((item) => {
    const changeMultiplier = Math.round(Math.random() * progressionParameter);
    let newValue = item + (Math.random() > 0.5 ? 1 : -1) * changeMultiplier;
    newValue = Math.max(0, Math.min(255, newValue));
    return newValue;
  }) as RGB;

  return newColor;
};

export const randomRGB = (): RGB => {
  const randomColor: RGB = [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
  ];
  return randomColor;
};

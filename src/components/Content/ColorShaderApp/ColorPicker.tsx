import { useState } from "react";
import { parseColorString, RGB } from "./colorUtils";

interface Props {
  red: number;
  green: number;
  blue: number;
  setRed: (val: number) => void;
  setGreen: (val: number) => void;
  setBlue: (val: number) => void;
  setColor: (rgb: RGB) => void;
  colorCardsAmount: number;
  setColorCardsAmount: (val: number) => void;
  progressionParameter: number;
  setProgressionParameter: (val: number) => void;
  generateOnClick: () => void;
}

const ColorPicker: React.FC<Props> = ({
  red,
  green,
  blue,
  setRed,
  setGreen,
  setBlue,
  setColor,
  colorCardsAmount,
  setColorCardsAmount,
  progressionParameter,
  setProgressionParameter,
  generateOnClick,
}) => {
  const [colorInput, setColorInput] = useState("");
  const [colorInputError, setColorInputError] = useState(false);

  const handleRGBgenerate =
    (setter: (val: number) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = parseInt(e.target.value);
      if (isNaN(value) || value < 0) value = 0;
      if (value > 255) value = 255;
      setter(value);
    };

  const handleColorInputSubmit = () => {
    const parsed = parseColorString(colorInput);
    if (!parsed) {
      setColorInputError(true);
      return;
    }
    setColorInputError(false);
    setColor(parsed);
  };

  const handleColorInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleColorInputSubmit();
    }
  };

  const styles = {
    input:
      "w-[70px] xl:w-[75px] text-xl xl:text-2xl pl-3 py-1 bg-gray-100 focus:bg-gray-50 border border-transparent focus:border-gray-300 outline-none px-1 rounded-lg transition-colors duration-200",
  };

  return (
    <div className="flex-center w-full h-full mx-auto">
      <div id="colorPicker" className="flex flex-col sm:flex-row gap-10">
        <div
          id="displayInput"
          className="flex flex-col gap-8"
        >
          <div id="inputColors" className="flex-center flex-col gap-2.5">
            <label className="flex-center">
              <div className="w-[80px] xl:w-[120px] xl:text-2xl text-xl">
                <span className="pr-0.25 text-2xl xl:text-3xl text-red-900">
                  R
                </span>
                ed
              </div>
              <input
                type="number"
                value={red}
                onChange={handleRGBgenerate(setRed)}
                min={0}
                max={255}
                className={styles.input}
              />
            </label>
            <label className="flex-center">
              <div className="w-[80px] xl:w-[120px] xl:text-2xl text-xl">
                <span className="pr-0.25 text-2xl xl:text-3xl text-green-900">
                  G
                </span>
                reen
              </div>
              <input
                type="number"
                value={green}
                onChange={handleRGBgenerate(setGreen)}
                min={0}
                max={255}
                className={styles.input}
              />
            </label>
            <label className="flex-center">
              <div className="w-[80px] xl:w-[120px] xl:text-2xl text-xl">
                <span className="pr-0.25 text-2xl xl:text-3xl text-blue-900">
                  B
                </span>
                lue
              </div>
              <input
                type="number"
                value={blue}
                onChange={handleRGBgenerate(setBlue)}
                min={0}
                max={255}
                className={styles.input}
              />
            </label>

            <label className="flex-center flex-col items-start gap-1 pt-2">
              <span className="text-lg xl:text-xl pt-2 pl-2">or just paste a rgb/hsl/hex string</span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={colorInput}
                  onChange={(e) => {
                    setColorInput(e.target.value);
                    if (colorInputError) setColorInputError(false);
                  }}
                  onKeyDown={handleColorInputKeyDown}
                  placeholder="#ff8800, rgb(255,136,0), hsl(30,100%,50%)"
                  className={`${styles.input} w-[220px] xl:w-[240px] ${
                    colorInputError ? "ring-2 ring-red-400 focus:border-transparent" : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={handleColorInputSubmit}
                  className="text-lg xl:text-xl px-4 py-1 rounded-lg bg-gray-800 text-white hover:bg-black transition-colors duration-200"
                >
                  set
                </button>
              </div>
              {colorInputError && (
                <span className="text-sm text-red-600">
                  couldn't read that color, try hex/rgb/hsl
                </span>
              )}
            </label>
          </div>
          <div className="flex flex-col gap-3" id="shaderControl">
            <label htmlFor="intensity" className="flex-center flex-col">
              gradient
              <input
                type="range"
                id="intensity"
                name="intensity"
                value={progressionParameter}
                onChange={(e) =>
                  setProgressionParameter(Number(e.target.value))
                }
                min={8}
                max={32}
                step={1}
                className="w-[95%] accent-gray-800"
              />
              <div className="flex justify-between w-full text-sm text-gray-500">
                <span className="flex">smooth</span>
                <span className="flex">hard</span>
              </div>
            </label>

            <label htmlFor="tileAmount" className="flex-center flex-col">
              amount
              <input
                type="range"
                id="tileAmount"
                name="tileAmount"
                value={colorCardsAmount}
                onChange={(e) => setColorCardsAmount(Number(e.target.value))}
                min={4}
                max={32}
                step={1}
                className="w-[95%] accent-gray-800"
              />
              <div className="flex justify-between w-full text-sm text-gray-500">
                <span className="flex">min</span>
                <span className="flex font-medium text-[var(--textColor)]">{colorCardsAmount}</span>
                <span className="flex">max</span>
              </div>
            </label>
          </div>
        </div>

        <div
          id="baseColorCard"
          className="flex flex-col items-center justify-between gap-6"
        >
          <div className="flex-center flex-col gap-3">
            <div
              id="baseColor"
              className="group relative flex-center flex-col w-[140px] aspect-square md:w-[160px] xl:w-[180px] rounded-2xl shadow-[0_4px_18px_rgba(0,0,0,0.15)] ring-1 ring-black/10"
              style={{ background: `rgb(${red}, ${green}, ${blue})` }}
            ></div>
            <div
              id="baseColorValue"
              className="text-xl tracking-tight text-gray-600"
            >{`rgb(${red}, ${green}, ${blue})`}</div>
          </div>
          <button
            id="generatePallete"
            onClick={generateOnClick}
            className="flex-center w-[130px] h-[48px] text-xl font-medium tracking-tight text-[#0d390d] hover:text-black border border-green-300 hover:border-[#6ae76a] rounded-full bg-green-400 hover:bg-green-200 shadow-[0_3px_10px_rgba(68,228,68,0.4)] hover:shadow-[0_5px_16px_rgba(68,228,68,0.55)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;

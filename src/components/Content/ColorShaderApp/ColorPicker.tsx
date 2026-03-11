interface Props {
  red: number;
  green: number;
  blue: number;
  setRed: (val: number) => void;
  setGreen: (val: number) => void;
  setBlue: (val: number) => void;
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
  colorCardsAmount,
  setColorCardsAmount,
  progressionParameter,
  setProgressionParameter,
  generateOnClick,
}) => {
  const handleRGBgenerate =
    (setter: (val: number) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = parseInt(e.target.value);
      if (isNaN(value) || value < 0) value = 0;
      if (value > 255) value = 255;
      setter(value);
    };

  const styles = {
    input:
      "w-[70px] xl:w-[75px] text-xl xl:text-2xl pl-3 py-0.5 bg-gray-200 px-1 rounded-sm",
  };

  return (
    <div className="flex-center w-full h-full mx-auto">
      <div id="colorPicker" className="flex flex-row space-x-8">
        <div
          id="displayInput"
          className="flex flex-col space-x-2 sm:space-x-8 space-y-8"
        >
          <div id="inputColors" className="flex-center flex-col space-y-2">
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
          </div>
          <div className="flex flex-col space-y-2" id="shaderControl">
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
                className="w-[95%]"
              />
              <div className="flex justify-between w-full">
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
                className="w-[95%]"
              />
              <div className="flex justify-between w-full">
                <span className="flex">min</span>
                <span className="flex">{colorCardsAmount}</span>
                <span className="flex">max</span>
              </div>
            </label>
          </div>
        </div>

        <div
          id="baseColorCard"
          className="flex flex-col items-center justify-between"
        >
          <div className="flex-center flex-col space-y-2">
            <div
              id="baseColor"
              className="group relative flex-center flex-col w-[140px] aspect-square md:w-[160px] xl:w-[180px] rounded-lg"
              style={{ background: `rgb(${red}, ${green}, ${blue})` }}
            ></div>
            <div
              id="baseColorValue"
              className="text-xl tracking-tight"
            >{`rgb(${red},${green},${blue})`}</div>
          </div>
          <button
            id="generatePallete"
            onClick={generateOnClick}
            className="flex-center w-[120px] h-[45px] text-xl tracking-tight ml-4 mb-6 text-[#0d390d] hover:text-black border border-[#71ef71] hover:border-[#6ae76a] rounded-xl bg-[#44e444] hover:bg-[#71ef71] shadow-[1px_1px_5px_rgba(128,128,128,0.6)] hover:shadow-none transition-colors duration-200"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;

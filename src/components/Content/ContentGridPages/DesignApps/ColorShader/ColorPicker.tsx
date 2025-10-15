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

  return (
    <div className="flex-center flex-col">
      <div
        id="colorPicker"
        className="flex-center flex-col sm:flex-row w-full h-full gap-8 sm:gap-16"
      >
        <div
          id="showSelectedColor+RBGvalue"
          className="flex items-center gap-2 sm:gap-8 md:gap-16 lg:gap-24"
        >
          <div
            id="baseColorRGB"
            className="group relative flex-center flex-col w-[150px] h-[150px] m-[0.25rem]"
          >
            <div
              className="absolute flex-center w-full h-full top-0 left-0"
              style={{
                backgroundColor: `rgb(${red}, ${green}, ${blue})`,
              }}
            >
              <p
                className="relative flex-center flex-col w-full h-ful px-1 text-[1.2rem] text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ textShadow: "0px 0px 5px white" }}
              >
                <span>rgb</span>
                {`(${red},${green},${blue})`}
              </p>
            </div>
          </div>
          <div id="setSeparateColors" className="flex-center flex-col gap-2">
            <label className="flex-center">
              <span className="w-[75px]">Red</span>
              <input
                type="number"
                value={red}
                onChange={handleRGBgenerate(setRed)}
                min={0}
                max={255}
                className="text-right border w-[50px] bg-[rgba(255,255,255,0.75)]"
              />
            </label>
            <label className="flex-center">
              <span className="w-[75px]">Green</span>
              <input
                type="number"
                value={green}
                onChange={handleRGBgenerate(setGreen)}
                min={0}
                max={255}
                className="text-right border w-[50px] bg-[rgba(255,255,255,0.75)]"
              />
            </label>
            <label className="flex-center">
              <span className="w-[75px]">Blau</span>
              <input
                type="number"
                value={blue}
                onChange={handleRGBgenerate(setBlue)}
                min={0}
                max={255}
                className="text-right border w-[50px] bg-[rgba(255,255,255,0.75)]"
              />
            </label>
          </div>
        </div>

        <div
          className="flex-center sm:flex-col gap-8 sm:gap-2"
          id="shaderControl"
        >
          <label htmlFor="intensity" className="flex-center flex-col">
            Gradients
            <input
              type="range"
              id="intensity"
              name="intensity"
              value={progressionParameter}
              onChange={(e) => setProgressionParameter(Number(e.target.value))}
              min={8}
              max={32}
              step={1}
            />
            <div className="flex justify-between w-full">
              <span className="flex">smooth</span>
              <span className="flex">hard</span>
            </div>
          </label>

          <label htmlFor="tileAmount" className="flex-center flex-col">
            Amount
            <input
              type="range"
              id="tileAmount"
              name="tileAmount"
              value={colorCardsAmount}
              onChange={(e) => setColorCardsAmount(Number(e.target.value))}
              min={4}
              max={20}
              step={1}
            />
            <div className="flex justify-between w-full">
              <span className="flex">4</span>
              <span className="flex">20</span>
            </div>
          </label>
        </div>
      </div>
      <button
        id="generatePallete"
        onClick={generateOnClick}
        className="flex-center m-12 w-[100px] h-[65px] border border-[var(--textColor)] rounded-[0.6rem] bg-amber-300"
      >
        Generate
      </button>
    </div>
  );
};

export default ColorPicker;

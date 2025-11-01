import { useState } from "react";
import { colorProgression } from "../BackgroundApp/helperFunctions/helpers";
import ColorCard from "./ColorCard";
import ColorPicker from "./ColorPicker";

type RGB = [number, number, number];

const ColorShaderApp: React.FC = () => {
  const [colorCardsAmount, setColorCardsAmount] = useState<number>(8);
  const [progressionParameter, setProgressionParameter] = useState<number>(20);
  const [inputColor, setInputColor] = useState<RGB>([100, 100, 100]);
  const [colorCardsArray, setColorCardsArray] = useState<JSX.Element[]>([]);

  const generatePalette = () => {
    const newTiles = [];
    let currentColor: RGB = [...inputColor];

    for (let i = 0; i < colorCardsAmount; i++) {
      currentColor = colorProgression(currentColor, progressionParameter);
      newTiles.push(
        <ColorCard
          key={i}
          red={currentColor[0]}
          green={currentColor[1]}
          blue={currentColor[2]}
        />
      );
    }

    setColorCardsArray(newTiles);
  };

  return (
    <div className="w-full h-full grid grid-col-1 xl:grid-cols-2 xl:gap-4 md:m-4 pt-8">
      <div className="pt-32">
        <ColorPicker
          red={inputColor[0]}
          green={inputColor[1]}
          blue={inputColor[2]}
          setRed={(r) => setInputColor([r, inputColor[1], inputColor[2]])}
          setGreen={(g) => setInputColor([inputColor[0], g, inputColor[2]])}
          setBlue={(b) => setInputColor([inputColor[0], inputColor[1], b])}
          colorCardsAmount={colorCardsAmount}
          setColorCardsAmount={setColorCardsAmount}
          progressionParameter={progressionParameter}
          setProgressionParameter={setProgressionParameter}
          generateOnClick={generatePalette}
        />
      </div>
      <div
        id="generatedColors"
        className="flex-center flex-wrap max-w-[775px] xl:max-w-[900px] min-w-[330px] m-auto"
      >
        <div className="flex-center flex-wrap gap-2 m-auto">
          {colorCardsArray}
        </div>
        <p className="">
          {/*Click on the separate tiles, if you want to remove some.*/}
        </p>
      </div>
    </div>
  );
};

export default ColorShaderApp;

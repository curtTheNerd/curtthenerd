import { useState, useEffect } from "react";
import type React from "react";
import { colorProgression, randomRGB } from "./helperFunctions/helpers";
import ButtonPanel from "./ButtonPanel";
import BackgroundEntity from "./BackgroundEntity";

type RGB = [number, number, number];

const Background = () => {
  //  states & constants
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [color, setColor] = useState<RGB>(randomRGB);
  const [backgroundColor, setBackgroundColor] = useState<RGB>([144, 244, 165]);
  const [blockIndex, setBlockIndex] = useState<number>(0);
  const [medianWidth, setMedianWidth] = useState<number>(
    window.innerWidth / 32
  );
  const [entityMode, setEntityMode] = useState<string>("circle");
  const [entityAnimationSpeed, setEntityAnimationSpeed] = useState<number>(15);
  const [entityAnimationDelay, setEntityAnimationDelay] =
    useState<number>(2000);
  const [colorProgressionParameter, setColorProgressionParameter] =
    useState<number>(20);
  const [entityArray, setEntityArray] = useState<React.ReactElement[]>([]);

  const allSizes: number[] = [
    medianWidth * 2.5,
    medianWidth * 1.5,
    medianWidth * 1.5,
    medianWidth,
    medianWidth,
    medianWidth,
    medianWidth,
    medianWidth * 0.75,
    medianWidth * 0.75,
    medianWidth * 0.5,
  ];

  //  functions & handlers

  const arrayRegulator = (array: any[]) => {
    if (array.length > entityAnimationSpeed / (entityAnimationDelay / 1000)) {
      setEntityArray((prev) => prev.slice(1));
    }
  };

  const handleColor = () => {
    if (entityArray.length === 0) {
      setColor(randomRGB());
    } else {
      const newcolor = colorProgression(color, colorProgressionParameter);
      setColor(newcolor);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setBackgroundColor([144, 244, 165]);
    setEntityMode("circle");
    setMedianWidth(window.innerWidth / 32);
    setEntityAnimationSpeed(15);
    setEntityAnimationDelay(2000);
    setColorProgressionParameter(20);
  };
  const handleStart = () => {
    setColor(randomRGB);
    setIsRunning(true);
  };
  const handleStop = () => setIsRunning(false);
  const handleOption = () => setBackgroundColor(randomRGB());
  const handleCircle = () => setEntityMode("circle");
  const handleSquare = () => setEntityMode("square");
  const handleKermit = () => setEntityMode("kermit");

  const handleSizeUp = () =>
    setMedianWidth(
      medianWidth >= window.innerWidth / 8 ? medianWidth : medianWidth * 2
    );
  const handleSizeDown = () =>
    setMedianWidth(
      medianWidth <= window.innerWidth / 128 ? medianWidth : medianWidth / 2
    );

  const handleAnimationSpeedFaster = () =>
    setEntityAnimationSpeed(
      entityAnimationSpeed <= 5
        ? entityAnimationSpeed
        : entityAnimationSpeed - 1
    );

  const handleAnimationSpeedSlower = () =>
    setEntityAnimationSpeed(
      entityAnimationSpeed >= 25
        ? entityAnimationSpeed
        : entityAnimationSpeed + 1
    );

  const handleAnimationDelayFaster = () =>
    setEntityAnimationDelay(
      entityAnimationDelay <= 500
        ? entityAnimationDelay
        : entityAnimationDelay - 250
    );

  const handleAnimationDelaySlower = () =>
    setEntityAnimationDelay(
      entityAnimationDelay >= 5000
        ? entityAnimationDelay
        : entityAnimationDelay + 250
    );
  const handleColorProgressionHarder = () =>
    setColorProgressionParameter(
      colorProgressionParameter >= 64
        ? colorProgressionParameter
        : colorProgressionParameter + 4
    );
  const handleColorProgressionSofter = () =>
    setColorProgressionParameter(
      colorProgressionParameter <= 8
        ? colorProgressionParameter
        : colorProgressionParameter - 4
    );

  // code execution

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const width = allSizes[Math.floor(Math.random() * allSizes.length)];
      setBlockIndex((prev) => prev + 1);
      handleColor();
      arrayRegulator(entityArray);

      setEntityArray((prev) => [
        ...prev,
        <BackgroundEntity
          key={blockIndex}
          index={blockIndex.toString()}
          inputColor={color}
          width={width}
          mode={entityMode}
          speed={entityAnimationSpeed}
        />,
      ]);
    }, entityAnimationDelay);
    return () => clearInterval(interval);
  }, [isRunning, color, entityArray]);

  useEffect(() => {
    const handleResize = () => setMedianWidth(window.innerWidth / 16);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className="absolute top-0 left-0 w-[100%] h-[100vh] m-0 -z-10"
        style={{
          backgroundColor: `rgb(${backgroundColor[0]}, ${backgroundColor[1]}, ${backgroundColor[2]})`,
        }}
      >
        {entityArray}
      </div>
      <ButtonPanel
        width={medianWidth}
        speed={entityAnimationSpeed}
        delay={entityAnimationDelay}
        colorProgressionFactor={colorProgressionParameter}
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
        onOption={handleOption}
        onCircle={handleCircle}
        onSquare={handleSquare}
        onKermit={handleKermit}
        onSizeUp={handleSizeUp}
        onSizeDown={handleSizeDown}
        onSpeedUp={handleAnimationSpeedFaster}
        onSpeedDown={handleAnimationSpeedSlower}
        onDelayUp={handleAnimationDelayFaster}
        onDelayDown={handleAnimationDelaySlower}
        onColorProgressionUp={handleColorProgressionHarder}
        onColorProgressionDown={handleColorProgressionSofter}
      />
    </>
  );
};

export default Background;

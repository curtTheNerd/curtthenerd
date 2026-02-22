import KermitSVG from "./KermitSVG";

type RGB = [number, number, number];

interface EntityProps {
  inputColor: RGB;
  width: number;
  index: string;
  mode: string;
  speed: number;
}

const BackgroundEntity: React.FC<EntityProps> = ({
  inputColor,
  width,
  index,
  mode,
  speed,
}) => {
  const color: string = `rgb(${inputColor[0]}, ${inputColor[1]}, ${inputColor[2]})`;

  const blockPositionX: number = Math.random() * window.innerWidth;
  const blockPositionY: number = Math.random() * window.innerHeight;

  return (
    <div>
      {mode !== "kermit" ? (
        <div
          id={index}
          className="absolute ease-out"
          style={{
            width: width,
            height: width,
            top: blockPositionY,
            left: blockPositionX,
            backgroundColor: color,
            boxShadow: "0 0 20px 10px white",
            borderRadius: mode === "circle" ? "50%" : "0%",
            opacity: Math.random() + 0.35,
            animation: `transformBgEntity ${speed}s forwards`,
          }}
        ></div>
      ) : (
        <KermitSVG
          color={color}
          className="absolute ease-out"
          style={{
            width: width * 0.75,
            height: width * 0.75,
            top: blockPositionY,
            left: blockPositionX,
            opacity: Math.random() + 0.35,
            animation: "transformBgEntity 12s forwards",
          }}
        />
      )}
    </div>
  );
};

export default BackgroundEntity;

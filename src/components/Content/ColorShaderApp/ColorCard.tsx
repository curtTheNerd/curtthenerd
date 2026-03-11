interface CardProps {
  red: number;
  green: number;
  blue: number;
  showRGB: boolean;
}

const ColorCard: React.FC<CardProps> = ({ red, green, blue, showRGB }) => {
  return (
    <div className="group relative flex-center flex-col w-[125px] h-[125px] md:w-[150px] md:h-[150px] cursor-pointer">
      <div
        className="absolute w-full h-full inset-0 rounded-md"
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></div>
      <p
        className={`${showRGB ? "flex-center flex-col" : "hidden"} relative w-full h-ful text-lg xl:text-xl tracking-tight text-black transition-opacity duration-500`}
        style={{ textShadow: "0px 0px 4px white" }}
      >
        <span>rgb</span>
        {`(${red},${green},${blue})`}
      </p>
    </div>
  );
};

export default ColorCard;

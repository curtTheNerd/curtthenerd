interface CardProps {
  red: number;
  green: number;
  blue: number;
}

const ColorCard: React.FC<CardProps> = ({ red, green, blue }) => {
  return (
    <div className="group relative flex-center flex-col w-[125px] h-[125px] md:w-[150px] md:h-[150px]">
      <div
        className="absolute w-full h-full top-0 left-0 rounded-[3px]"
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></div>
      <p
        className="relative flex-center flex-col w-full h-ful px-1 text-[1.2rem] text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ textShadow: "0px 0px 5px white" }}
      >
        <span>rgb</span>
        {`(${red},${green},${blue})`}
      </p>
    </div>
  );
};

export default ColorCard;

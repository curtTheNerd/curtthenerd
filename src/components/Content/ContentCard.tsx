import { Link } from "react-router-dom";

type ContentCardProps = {
  src: string;
};

const ContentCard: React.FC<ContentCardProps> = ({ src }) => {
  const fontStyle = { fontFamily: "Courier New" };

  return (
    <Link
      to="/designapps"
      id=""
      className="contentCard flex w-full h-[450px] border-1 border-red-800 bg-white opacity-60"
    >
      <div className="cardWrapper flex flex-col items-start justify-start ">
        <div className="cardHeaderWrapper flex-center space-x-6 px-8 h-[40%]">
          <img className="opacity-75 w-[40px]" src={src} alt="#" />
          <div style={fontStyle} className="text-black">
            Card Header
          </div>
        </div>
        <div style={fontStyle} className="p-8">
          Card Description-bulletpoints
        </div>
      </div>
    </Link>
  );
};

export default ContentCard;

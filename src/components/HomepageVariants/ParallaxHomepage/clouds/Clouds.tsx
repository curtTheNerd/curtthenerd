import cloud1 from "./simplecloud.svg";
import cloud2 from "./stylized_basic_cloud.svg";

export const BigCloud = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <div style={style}>
      <img src={cloud2} alt="bigCloud" className="block w-full h-full" />
    </div>
  );
};

export const SmallCloud = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <div style={style}>
      <img src={cloud1} alt="smallCloud" className="block w-full h-full" />
    </div>
  );
};

import { useState } from "react";
import { MdContentCopy, MdCheck } from "react-icons/md";
import { RGB, rgbToHex, rgbToHsl, formatRgb, formatHsl } from "./colorUtils";

interface CardProps {
  red: number;
  green: number;
  blue: number;
  showValues: boolean;
  seamless?: boolean;
}

interface CopyRowProps {
  value: string;
}

const CopyRow: React.FC<CopyRowProps> = ({ value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <span className="flex items-center justify-center gap-1 whitespace-nowrap">
      {value}
      <button
        type="button"
        onClick={handleCopy}
        onDoubleClick={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        aria-label={`copy ${value}`}
        className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-200 shrink-0"
      >
        {copied ? <MdCheck /> : <MdContentCopy />}
      </button>
    </span>
  );
};

const ColorCard: React.FC<CardProps> = ({
  red,
  green,
  blue,
  showValues,
  seamless = false,
}) => {
  const color: RGB = [red, green, blue];
  const hex = rgbToHex(color);
  const hsl = rgbToHsl(color);

  return (
    <div
      className={`group relative flex-center flex-col w-[148px] h-[148px] sm:w-[160px] sm:h-[160px] md:w-[172px] md:h-[172px] cursor-pointer transition-all duration-300 ${
        seamless
          ? ""
          : "rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.12)] ring-1 ring-black/5 hover:ring-black/15 hover:shadow-[0_6px_20px_rgba(0,0,0,0.18)] hover:-translate-y-0.5"
      }`}
    >
      <div
        className={`absolute w-full h-full inset-0 ${seamless ? "" : "rounded-xl"}`}
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></div>
      <div
        className={`${showValues ? "flex-center flex-col" : "hidden"} relative w-full h-full text-[clamp(0.68rem,0.55rem+0.6vw,0.85rem)] tracking-tight text-black transition-opacity duration-500 px-2`}
        style={{ textShadow: "0px 0px 4px white" }}
      >
        <CopyRow value={formatRgb(color)} />
        <CopyRow value={hex} />
        <CopyRow value={formatHsl(hsl)} />
      </div>
    </div>
  );
};

export default ColorCard;

import { useState } from "react";
import { IoClose } from "react-icons/io5";

interface ButtonPanelProps {
  width: number;
  speed: number;
  delay: number;
  colorProgressionFactor: number;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onOption: () => void;
  onCircle: () => void;
  onSquare: () => void;
  onKermit: () => void;
  onSizeUp: () => void;
  onSizeDown: () => void;
  onSpeedUp: () => void;
  onSpeedDown: () => void;
  onDelayUp: () => void;
  onDelayDown: () => void;
  onColorProgressionUp: () => void;
  onColorProgressionDown: () => void;
}

const ButtonPanel: React.FC<ButtonPanelProps> = ({
  width,
  speed,
  delay,
  colorProgressionFactor,
  onStart,
  onStop,
  onReset,
  onOption,
  onCircle,
  onSquare,
  onKermit,
  onSizeUp,
  onSizeDown,
  onSpeedUp,
  onSpeedDown,
  onDelayUp,
  onDelayDown,
  onColorProgressionUp,
  onColorProgressionDown,
}) => {
  const [panelActive, setPanelActive] = useState<boolean>(false);
  const handleOpenPanelMenu = () => (panelActive ? "" : setPanelActive(true));
  const handleClosePanelMenu = () => setPanelActive(false);

  //  btn-style for index.css
  //  { cursor-pointer w-[75px] h-[35px] sm:w-[110px] sm:h-[45px] bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,1)] text-[var(--textColor)] text-[0.8rem] sm:text-[1rem] rounded-[0.25rem] shadow-md }

  const evalColorProgression = () => {
    if (colorProgressionFactor === 64) return "max";
    if (colorProgressionFactor === 8) return "min";
    else {
      return colorProgressionFactor;
    }
  };

  const evalSpeed = () => {
    if (speed === 5) return "max";
    if (speed === 35) return "min";
    else {
      return speed;
    }
  };

  const evalDelay = () => {
    if (delay === 8000) return "max";
    if (delay === 500) return "min";
    else {
      return `${delay}ms`;
    }
  };

  return (
    <div
      className={`absolute flex-center bottom-4 right-4 z-1000 ${panelActive ? "max-w-[400px]" : "cursor-pointer w-[80px] h-[80px] rounded-2xl bg-[rgba(255,255,255,0.5)]"}`}
      onClick={handleOpenPanelMenu}
    >
      <div className="group backdrop-blur-md">
        <p className="relative flex items-center h-[4rem]">
          <img
            className={`opacity-50 w-[42px] 2xl:w-[52px] ${panelActive ? "hidden" : "block"}`}
            src="/ContentGrid/settings-2-svgrepo-com.svg"
            alt="#"
          />
          <div className={`${panelActive ? "block" : "hidden"} pl-4`}>
            Manipulate Background
          </div>
        </p>

        <button
          className={`absolute top-4 right-6 text-[1.25rem] ${panelActive ? "" : "hidden"}`}
          onClick={handleClosePanelMenu}
        >
          <IoClose className="cursor-pointer text-[2rem] hover:text-[2.15rem] text-green-950 hover:text-black transition-all duration-200" />
        </button>

        <div
          id="buttonDiv-controlPanel"
          className={panelActive ? "" : "hidden"}
        >
          <div className="group grid grid-cols-1 gap-0.5">
            <div className="flex-center gap-0.5 pb-0.5">
              <button className="btn mr-0.5" onClick={onStart}>
                Start
              </button>
              <button className="btn" onClick={onStop}>
                Stop
              </button>
              <button className="btn" onClick={onReset}>
                Reset
              </button>
              <button className="btn" onClick={onOption}>
                BG-Color
              </button>
            </div>

            <div className="flex-center gap-0.5">
              <button className="btn mr-0.5">Shapes:</button>
              <button className="btn" onClick={onColorProgressionUp}>
                Color +
              </button>
              <button className="btn" onClick={onColorProgressionDown}>
                Color -
              </button>
              <button className="btn">{evalColorProgression()}</button>
            </div>

            <div className="flex-center gap-0.5">
              <button className="btn mr-0.5" onClick={onCircle}>
                Circle
              </button>
              <button className="btn" onClick={onSizeUp}>
                Size +
              </button>
              <button className="btn" onClick={onSizeDown}>
                Size -
              </button>
              <button className="btn">{Math.round(width)}px</button>
            </div>

            <div className="flex-center gap-0.5">
              <button className="btn mr-0.5" onClick={onSquare}>
                Square
              </button>
              <button className="btn" onClick={onSpeedUp}>
                Speed +
              </button>
              <button className="btn" onClick={onSpeedDown}>
                Speed -
              </button>
              <button className="btn">{evalSpeed()}</button>
            </div>

            <div className="flex-center gap-0.5">
              <button className="btn mr-0.5" onClick={onKermit}>
                Kermit
              </button>
              <button className="btn" onClick={onDelayDown}>
                Delay +
              </button>
              <button className="btn" onClick={onDelayUp}>
                Delay -
              </button>
              <button className="btn">{evalDelay()}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonPanel;

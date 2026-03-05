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

  return (
    <div
      className={`group absolute flex-center bottom-2 right-2 sm:bottom-4 sm:right-4 lg:bottom-8 lg:right-8 2xl:bottom-12 2xl:right-12 z-1000 ${panelActive ? "w-full max-w-[400px]" : "cursor-pointer w-[80px] hover:w-[175px] hover:h-[90px] lg:w-[100px] lg:h-[100px] 2xl:w-[110px] 2xl:h-[110px] h-[80px] rounded-2xl bg-[rgba(255,255,255,0.5)]"}`}
      onClick={handleOpenPanelMenu}
    >
      <div className="group backdrop-blur-md ">
        <p
          className={`relative flex-center text-center h-[4rem] text-[0rem] ${panelActive ? "hover:flex-center text-[1rem] sm:text-[1.2rem]" : "group-hover:text-[1.1rem] flex-col"}`}
        >
          <img
            className={`group-hover:absolute group-hover:hidden opacity-50 w-[50px] md:w-[55px] lg:w-[60px] ${panelActive ? "hidden" : "block"}`}
            src="/ContentGrid/settings-2-svgrepo-com.svg"
            alt="#"
          />
          <div className="pr-1.5">Manipulate Background</div>
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
            <div className="flex-center gap-0.5">
              <button className="btn" onClick={onStart}>
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
              <button className="btn" onClick={onCircle}>
                Circle
              </button>
              <button className="btn" onClick={onColorProgressionUp}>
                Color +
              </button>
              <button className="btn" onClick={onColorProgressionDown}>
                Color -
              </button>
              <button className="btn">{colorProgressionFactor}</button>
            </div>

            <div className="flex-center gap-0.5">
              <button className="btn" onClick={onSquare}>
                Square
              </button>
              <button className="btn" onClick={onSizeUp}>
                Size +
              </button>
              <button className="btn" onClick={onSizeDown}>
                Size -
              </button>
              <button className="btn">{Math.round(width)}</button>
            </div>

            <div className="flex-center gap-0.5">
              <button className="btn" onClick={onKermit}>
                Kermit
              </button>
              <button className="btn" onClick={onSpeedUp}>
                Speed +
              </button>
              <button className="btn" onClick={onSpeedDown}>
                Speed -
              </button>
              <button className="btn">{speed}</button>
            </div>

            <div className="flex-center gap-0.5">
              <button className="btn"></button>
              <button className="btn" onClick={onDelayDown}>
                Delay +
              </button>
              <button className="btn" onClick={onDelayUp}>
                Delay -
              </button>
              <button className="btn">{delay}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonPanel;

import { useState } from "react";

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
      className={`absolute group bottom-8 right-8 z-10 ${panelActive ? "w-full max-w-[500px]" : "w-[150px] h-[100px] rounded-2xl bg-[rgba(255,255,255,0.5)]"}`}
      onClick={handleOpenPanelMenu}
    >
      <div>
        <p
          className={`relative flex-center text-center h-[4rem] text-[0rem] duration-1000 ${panelActive ? "hover:flex-center text-[1.25rem]" : "group-hover:text-[1.1rem] flex-col pt-9"}`}
        >
          <div className="pr-1.5">Manipulate</div>
          <div>Background</div>
        </p>

        <button
          className={`absolute top-4 right-12 text-[1.25rem] ${panelActive ? "" : "hidden"}`}
          onClick={handleClosePanelMenu}
        >
          X
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

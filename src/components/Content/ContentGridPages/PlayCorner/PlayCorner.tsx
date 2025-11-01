import { useEffect } from "react";

import BackButton from "../BackButton.jsx";
import Collyblocs from "./CollyBlocs/Collyblocs.jsx";
import TicTacToe from "./TicTacToe/TicTacToe.tsx";

const PlayCorner: React.FC = () => {
  useEffect(() => {
    const disableArrowScroll = (e) => {
      const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
      if (keys.includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", disableArrowScroll);

    return () => {
      window.removeEventListener("keydown", disableArrowScroll);
    };
  }, []);

  return (
    <div className="content-page">
      <BackButton />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 my-12 ">
        <div className="flex flex-col justify-center">
          <p
            className="text-[1.75rem] pb-2"
            style={{
              fontFamily: "Courier New",
              fontStyle: "italic",
            }}
          >
            Simple Games
          </p>
          <p className="text-[1.1rem]">
            - TicTacToe example: TypeScript, TailwindCSS
            <br />- provides 2 Players to have a match with match score
            <br />- just one turn take back
          </p>
        </div>
        <div>
          <TicTacToe />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 gap-20">
        <div className="flex flex-col">
          <p
            className="text-[1.75rem] pb-2"
            style={{
              fontFamily: "Courier New",
              fontStyle: "italic",
            }}
          >
            Collyblocs
          </p>

          <p className="text-[1.1rem]">
            JavaScript Canvas Game - Demo
            <br />- use Arrow Keys to navigate the Player (also not implemented
            for touch display)
            <br />- catch the colored squares and gain points and change size
            <br />- you lose if you get too big or if you lose all lives
            <br />- restart with ESC
            <br />- coded with fixed width/height in pixels (so not working on
            mobile screen)
            <br />
            My first ever practice project when I just started to learn
            JavaScript in 2023.
            <br />
            CollyBlocs serves as a base for a more refined React.tsx Game;
            currently in development for deployment as Telegram-Bot.
          </p>
        </div>
        <div className="flex-center">
          <Collyblocs />
        </div>
      </div>
    </div>
  );
};

export default PlayCorner;

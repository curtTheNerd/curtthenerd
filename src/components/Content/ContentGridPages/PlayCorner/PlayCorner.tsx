import Collyblocs from "./CollyBlocs/Collyblocs.jsx";
import TicTacToe from "./TicTacToe/TicTacToe.tsx";

const PlayCorner: React.FC = () => {
  return (
    <div className="modal-page flex-col">
      <div className="flex-center">
        <TicTacToe />
      </div>

      <div className="modal-container">
        <Collyblocs />
      </div>
    </div>
  );
};

export default PlayCorner;

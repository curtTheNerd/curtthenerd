import { useState } from "react";
import Tile from "./Tile";

type Player = "X" | "O";

const Game: React.FC = () => {
  const [board, setBoard] = useState<(Player | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [lastMove, setLastMove] = useState<number | null>(null);

  const winner = calculateWinner(board);
  const currentPlayer = xIsNext ? "X" : "O";

  function handleClick(index: number) {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setLastMove(index);
    setXIsNext(!xIsNext);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setScore((prev) => ({ ...prev, [newWinner]: prev[newWinner] + 1 }));
    }
  }

  function resetBoard() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setLastMove(null);
  }

  function undoLastMove() {
    if (lastMove === null || winner) return;
    const newBoard = [...board];
    newBoard[lastMove] = null;
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    setLastMove(null);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Tic Tac Toe
      </h1>

      <div className="grid grid-cols-3 gap-2">
        {board.map((value, i) => (
          <Tile key={i} value={value} onClick={() => handleClick(i)} />
        ))}
      </div>

      <div className="text-center">
        {winner ? (
          <p className="text-2xl font-medium text-green-600">
            🏆 Gewinner: {winner}
          </p>
        ) : board.every(Boolean) ? (
          <p className="text-2xl font-medium text-yellow-600">
            🤝 Unentschieden
          </p>
        ) : (
          <p className="text-xl text-gray-700">
            Next Player: {currentPlayer === "X" ? "❌" : "⭕"}
          </p>
        )}
      </div>

      <div className="flex gap-4 text-lg text-gray-800">
        <span>❌ X: {score.X}</span>
        <span>⭕ O: {score.O}</span>
      </div>

      <div className="flex gap-3 mt-4">
        <button
          onClick={resetBoard}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
        >
          Reset
        </button>

        <button
          onClick={undoLastMove}
          disabled={lastMove === null || winner !== null}
          className={`px-4 py-2 rounded transition ${
            lastMove === null || winner
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-500"
          }`}
        >
          Take back your last turn
        </button>
      </div>
    </div>
  );
};

function calculateWinner(squares: (Player | null)[]): Player | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default Game;

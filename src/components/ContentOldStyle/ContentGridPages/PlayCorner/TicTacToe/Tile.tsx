type SquareProps = {
  value: string | null;
  onClick: () => void;
};

const Tile: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border border-gray-300 text-3xl sm:text-4xl md:text-5xl font-semibold flex items-center justify-center transition hover:bg-gray-100"
    >
      {value === "X" ? "❌" : value === "O" ? "⭕" : ""}
    </button>
  );
};

export default Tile;

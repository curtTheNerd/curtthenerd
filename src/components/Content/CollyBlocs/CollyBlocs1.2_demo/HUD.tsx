interface HUDProps {
  score: number;
  targetFps: number;
  onToggleFps: () => void;
}

export default function HUD({ score, targetFps, onToggleFps }: HUDProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        background: "rgba(0, 0, 0, 0.7)",
        color: "#fff",
        padding: "10px 15px",
        borderRadius: "5px",
        fontFamily: "monospace",
        fontSize: "14px",
        zIndex: 10,
      }}
    >
      <div>Score: {score}</div>
      <button
        onClick={onToggleFps}
        style={{
          marginTop: "8px",
          padding: "5px 10px",
          background: "#FF8C00",
          border: "none",
          color: "#fff",
          borderRadius: "3px",
          cursor: "pointer",
          fontFamily: "monospace",
        }}
      >
        FPS: {targetFps}
      </button>
    </div>
  );
}

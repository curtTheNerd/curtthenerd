import { useState } from "react";
import WaffenRechner from "./SingleBuildingCalc.jsx";
import StrongholdGrid from "./StrongholdGrid.jsx";

const TABS = [
  { id: "waffen", label: "Waffenschmiede-Ökonomie", Component: WaffenRechner },
  { id: "grid", label: "Grid-Planer", Component: StrongholdGrid },
];

function App() {
  const [tab, setTab] = useState("waffen");
  const Active = TABS.find((t) => t.id === tab).Component;

  return (
    <>
      <nav className="bg-stone-950 border-b border-stone-800 px-4 sm:px-8 pt-4 flex gap-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-3 py-2 text-xs tracking-[0.2em] uppercase rounded-t-md transition ${
              tab === t.id
                ? "bg-stone-900 text-amber-400 border border-b-0 border-stone-800"
                : "text-stone-500 hover:text-stone-300"
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>
      <Active />
    </>
  )
}

export default App

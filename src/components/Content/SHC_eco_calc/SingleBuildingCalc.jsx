import { useState, useMemo } from "react";
import StateButtons from "./StateButtons.jsx";

// Spielzeit-Anker: bei Speed 40 dauert 1 Monat 20s (1 Jahr dauert 4 Minuten).
// Tempo skaliert linear: Speed 10 = ein Viertel von Speed 40.
const MONTHS_PER_MIN_AT_40 = 3; //  = 20s/Monat = BaseTime

// Harnische (Plattenruestung) und Lederrüstung sind ignoriert (zu viele Variablen).

const WEAPONS = [
  { id: "speer", name: "Speer", maker: "Pikenmacher", mat: "wood", quantity: 1, monthToProdRaw: 0.75, sell: 10 },
  { id: "pike", name: "Pike", maker: "Pikenmacher", mat: "wood", quantity: 2, monthToProdRaw: 2, sell: 18 },
  
  { id: "bogen", name: "Bogen", maker: "Bogner", mat: "wood", quantity: 2, monthToProdRaw: 1.8, sell: 15 },
  { id: "armbrust", name: "Armbrust", maker: "Bogner", mat: "wood", quantity: 3, monthToProdRaw: 2.2, sell: 30 },
  
  { id: "schwert", name: "Schwert", maker: "Schmied", mat: "iron", quantity: 1, monthToProdRaw: 2.2, sell: 30 },
  { id: "streitkolben", name: "Streitkolben", maker: "Schmied", mat: "iron", quantity: 1, monthToProdRaw: 2.1, sell: 30 },
  
  { id: "rüstung", name: "Rüstung", maker: "Rüstungsschmied", mat: "iron", quantity: 1, monthToProdRaw: 2.5, sell: 30 },
];

// Angstfaktor: Chance auf Doppelabgabe. 0 -> 50%, je -1 zusaetzlich +10%, -5 -> 100%.
const FEAR = [0, -1, -2, -3, -4, -5].map((lvl) => ({ lvl, chance: 50 + (-lvl) * 10 }));

const DEFAULT_SELL = Object.fromEntries(WEAPONS.map((w) => [w.id, w.sell]));


export default function WaffenRechner() {
  const [woodPrice, setWoodPrice] = useState(4);
  const [ironPrice, setIronPrice] = useState(45);
  const [distStockpileProduction, setDistStockpileProduction] = useState(5);
  const [distProductionArmory, setDistProductionArmory] = useState(5);
  const [distArmoryStockpile, setDistArmoryStockpile] = useState(5);
  const [speed, setSpeed] = useState(40);
  const [fearLvl, setFearLvl] = useState(0);
  const [sell] = useState(DEFAULT_SELL);
  const [sellOpen, setSellOpen] = useState(false);

  const fear = FEAR.find((f) => f.lvl === fearLvl) || FEAR[0];
  const expected = 1 + fear.chance / 100; // erwartete Stück pro Produktion
  const monthsPerMinute = MONTHS_PER_MIN_AT_40 * (speed / 40);

  const rows = useMemo(() => {
    return WEAPONS.map((w) => {
      const matPrice = w.mat === "wood" ? woodPrice : ironPrice;
      const walkingDistanceInTiles = (w.quantity * 2 - 1) * distStockpileProduction + distProductionArmory + distArmoryStockpile;
      const walkingDistanceInSeconds =  walkingDistanceInTiles / 1.25 ; 
      const walkingDistanceInmonth = walkingDistanceInTiles / 25;  // weil 25 Tiles einem Monat entsprechen
      const cycle = walkingDistanceInmonth + w.monthToProdRaw;
      const sellP = Number(sell[w.id]) || 0;
      const matCost = matPrice * w.quantity;
      const profitPerWeapon = sellP - matCost;
      const perMonth = expected / cycle;
      const goldPerMonth = (expected * sellP - matCost) / cycle;
      const goldPerMin = goldPerMonth * monthsPerMinute;
      const perMin = perMonth * monthsPerMinute;
      return { ...w, cycle, profitPerWeapon, perMin, goldPerMin };
    }).sort((a, b) => b.goldPerMin - a.goldPerMin);
  }, [woodPrice, ironPrice, distStockpileProduction, distProductionArmory, distArmoryStockpile, expected, monthsPerMinute, sell]);

  const maxGold = Math.max(...rows.map((r) => Math.abs(r.goldPerMin)), 0.0001);
  const fmt = (n, d = 1) =>
    Number.isFinite(n) ? n.toLocaleString("de-DE", { minimumFractionDigits: d, maximumFractionDigits: d }) : "–";

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 px-4 py-8 sm:px-8"
         style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
      <div className="mx-auto max-w-3xl">
        <header className="mb-8 border-b border-stone-800 pb-5">
          <div className="text-amber-500/70 text-xs tracking-[0.35em] uppercase mb-2">Stronghold Crusader · Definitive Edition</div>
          <h1 className="text-3xl sm:text-4xl text-stone-100"
              style={{ fontFamily: "ui-serif, Georgia, serif", letterSpacing: "0.01em" }}>
            Waffenschmiede-Ökonomie
          </h1>
          <p className="text-stone-400 mt-2 text-sm leading-relaxed">
            Gewinn pro Minute je Werkstatt, bei Eigenproduktion oder gekauftem Material.
          </p>
        </header>

        {/* Einkauf */}
        <section className="mb-6">
          <div className="text-stone-400 text-xs tracking-[0.25em] uppercase mb-3">Einkaufspreise (Gold / Einheit)</div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Holz" unit="Bogner · Pikenmacher">
              <StateButtons cLow={0} cHigh={4} setPrice={setWoodPrice} />
            </Field>
            <Field label="Eisen" unit="Schmied">
              <StateButtons cLow={0} cHigh={45} setPrice={setIronPrice} />
            </Field>
            
          </div>
        </section>

        {/* Aufbau & Tempo */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          <Field label="Weg Vorratslager -> Produktion" unit="Grid-Felder">
            <NumInput value={distStockpileProduction} onChange={setDistStockpileProduction} />
          </Field>
          <Field label="Weg Produktion -> Waffenlager" unit="Grid-Felder">
            <NumInput value={distProductionArmory} onChange={setDistProductionArmory} />
          </Field>
          <Field label="Weg Waffenlager -> Vorratslager" unit="Grid-Felder">
            <NumInput value={distArmoryStockpile} onChange={setDistArmoryStockpile} />
          </Field>

          <Field label={`Spielgeschwindigkeit`} unit={`${fmt(monthsPerMinute, 2)} Monate/Min`}>
            <div className="flex items-center gap-3 pt-1.5">
              <input type="range" min={10} max={90} step={5} value={speed}
                     onChange={(e) => setSpeed(Number(e.target.value))}
                     className="w-full accent-amber-600" />
              <span className="w-8 text-right text-stone-200" style={{ fontFamily: "ui-monospace, monospace" }}>{speed}</span>
            </div>
          </Field>
        </section>

        {/* Angstfaktor */}
        <section className="mb-16">
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-stone-400 text-xs tracking-[0.25em] uppercase">Angstfaktor</span>
            <span className="text-stone-400 text-xs">
              {fear.chance}% Doppelabgabe · <span className="text-amber-400">⌀ {fmt(expected, 2)} Stück/Produktion</span>
            </span>
          </div>
          <div className="flex rounded-md overflow-hidden border border-stone-700">
            {FEAR.map((f) => (
              <button key={f.lvl} onClick={() => setFearLvl(f.lvl)}
                      title={`${f.chance}% Chance auf 2 Stück`}
                      className={`flex-1 py-2 text-sm transition ${
                        f.lvl === fearLvl ? "bg-amber-600 text-stone-950 font-semibold" : "bg-transparent text-stone-400 hover:bg-stone-900"
                      }`}>
                {f.lvl}
              </button>
            ))}
          </div>
        </section>


        {/* Ergebnis */}
        <section>
          <div className="mt-8 text-stone-400 text-xs tracking-[0.25em] uppercase mb-3">Ergebnis · Gold pro Minute</div>
          <div className="space-y-2.5">
            {rows.map((r, i) => {
              const pct = Math.max((r.goldPerMin / maxGold) * 100, 0);
              const top = i === 0 && r.goldPerMin > 0;
              const neg = r.goldPerMin < 0;
              return (
                <div key={r.id}
                     className={`rounded-md border px-4 py-3 ${top ? "border-amber-600/60 bg-amber-950/20" : "border-stone-800 bg-stone-900/40"}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {top && <span className="text-amber-400 text-xs">✦</span>}
                      <span className="text-stone-100 font-medium">{r.name}</span>
                      <span className="text-stone-500 text-xs">{r.maker}</span>
                    </div>
                    <div className="text-right" style={{ fontFamily: "ui-monospace, monospace" }}>
                      <span className={`text-lg ${neg ? "text-red-400" : top ? "text-amber-400" : "text-stone-200"}`}>{fmt(r.goldPerMin)}</span>
                      <span className="text-stone-500 text-xs ml-1">G/min</span>
                    </div>
                  </div>
                  <div className="h-1.5 rounded-full bg-stone-800 overflow-hidden mb-2">
                    <div className="h-full rounded-full transition-all duration-500"
                         style={{ width: `${pct}%`, background: top ? "#d97706" : "#78716c" }} />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-stone-400" style={{ fontFamily: "ui-monospace, monospace" }}>
                    <Stat label="Gewinn/Stück" value={`${fmt(r.profitPerWeapon)} G`} />
                    <Stat label="Stück/min" value={fmt(r.perMin, 2)} />
                    <Stat label="Zyklus" value={`${fmt(r.cycle, 1)} Monate`} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        
        
        {/* Verkaufspreise */}
        <section className="mb-8 mt-12">
          <button
            onClick={() => setSellOpen((o) => !o)}
            className="w-full text-left text-stone-400 text-xs tracking-[0.25em] uppercase mb-3 flex items-center gap-2"
          >
            <span className={`inline-block transition-transform ${sellOpen ? "rotate-90" : ""}`}>▶</span>
            Verkaufspreise (Gold / Stück)
          </button>
          {sellOpen && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {WEAPONS.map((w) => (
                <Field key={w.id} label={w.name} unit={`${w.quantity} ${w.mat === "wood" ? "Holz" : "Eisen"}`}>
                  <div className="w-full rounded-md border border-stone-700 bg-stone-900 px-3 py-2 text-stone-100"
                       style={{ fontFamily: "ui-monospace, monospace" }}>
                    {sell[w.id]} G
                  </div>
                </Field>
              ))}
            </div>
          )}
        </section>

        <footer className="mt-8 pt-5 border-t border-stone-800 text-stone-500 text-xs leading-relaxed">
          Rezepturen &amp; Laufmodell aus der Original-Engine: Speer 1 Holz, Bogen 2, Pike 2, Armbrust 3;
          Schwert &amp; Streitkolben je 1 Eisen; Produktion ~2 Monate (Speer &lt;1); 25 Felder/Monat. Bogner
          holen das erste Holz nicht auf dem Rückweg – kleiner Aufschlag. Erwartete Stück/Produktion =
          1 + Doppelabgabe-Chance, multipliziert auf die Werkstatt-Abgabe (eigene Minen/Holzfäller würden bei
          −5 zusätzlich profitieren, hier aber gekauft). Tempo skaliert linear: Speed 10 = ¼ von Speed 40.
        </footer>
      </div>
    </div>
  );
}

function Field({ label, unit, children }) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-stone-300 text-sm">{label}</span>
        <span className="text-stone-600 text-[10px]">{unit}</span>
      </div>
      {children}
    </label>
  );
}

function NumInput({ value, onChange, step = 1 }) {
  return (
    <input type="number" value={value} step={step} min={1}
      onChange={(e) => onChange(e.target.value === "" ? "" : Number(e.target.value))}
      className="w-full rounded-md border border-stone-700 bg-stone-900 px-3 py-2 text-stone-100 outline-none focus:border-amber-600 transition"
      style={{ fontFamily: "ui-monospace, monospace" }} />
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <div className="text-stone-600 text-[10px] uppercase tracking-wide">{label}</div>
      <div className="text-stone-300">{value}</div>
    </div>
  );
}

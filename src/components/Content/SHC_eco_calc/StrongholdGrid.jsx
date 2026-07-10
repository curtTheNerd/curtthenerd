import { useEffect, useRef, useState } from "react";

// Palette-Definitionen. `typeId` platzierter Elemente referenziert `id` hier.
// `size` entspricht der Kachel-Grundfläche im Stronghold-Grid (Spalten x Zeilen).
const PALETTE = [
  { id: "bergfried", name: "Bergfried", short: "Bergfried", category: "production", size: { w: 7, h: 15 } },
  { id: "vorratslager", name: "Vorratslager", short: "Vorratslager", category: "production", size: { w: 5, h: 5 } },
  { id: "waffenlager", name: "Waffenlager", short: "Waffenlager", category: "production", size: { w: 4, h: 4 } },
  { id: "lanzenmacher", name: "Lanzenmacher", short: "Lanzen", category: "production", size: { w: 4, h: 4 } },
  { id: "pikenmacher", name: "Pikenmacher", short: "Piken", category: "production", size: { w: 4, h: 4 } },
  { id: "pfeilmacher", name: "Pfeilmacher", short: "Pfeile", category: "production", size: { w: 4, h: 4 } },
  { id: "armbrustmacher", name: "Armbrustmacher", short: "Armbrüste", category: "production", size: { w: 4, h: 4 } },
  { id: "schwertschmied", name: "Schwertschmiede", short: "Schwerter", category: "production", size: { w: 4, h: 4 } },
  { id: "kolbenschmiede", name: "Kolbenschmiede", short: "Streitkolben", category: "production", size: { w: 4, h: 4 } },
  { id: "ruestungsschmied", name: "Rüstungsschmiede", short: "Rüstungen", category: "production", size: { w: 4, h: 4 } },
  { id: "mauer", name: "Mauer", short: "MR", category: "generic", size: { w: 1, h: 1 } },
  { id: "turm", name: "Turm", short: "TM", category: "generic", size: { w: 1, h: 1 } },
  { id: "sonstiges", name: "Sonstiges", short: "??", category: "generic", size: { w: 1, h: 1 } },
];
const PALETTE_BY_ID = Object.fromEntries(PALETTE.map((p) => [p.id, p]));

// Maßstab für die Vorschau-Darstellung in der Palette & am Cursor (px pro Kachel-Einheit).
const PALETTE_SCALE = 6;
const MIN_PALETTE_SIZE = 18;

function elementFootprint(el) {
  const { w, h } = PALETTE_BY_ID[el.typeId].size;
  return { col: el.col, row: el.row, w, h };
}

function footprintsOverlap(a, b) {
  return a.col < b.col + b.w && b.col < a.col + a.w && a.row < b.row + b.h && b.row < a.row + a.h;
}

// Wandelt eine Client-Koordinate (Mausposition) in eine Grid-Zelle um. Der Punkt
// gilt als Mittelpunkt der Kachel-Grundfläche, damit das Element beim Klick
// genau dort landet, wo der Cursor gerade sichtbar überlappt.
function pointToCell(clientX, clientY, gridRect, cols, rows, w, h) {
  const cellW = gridRect.width / cols;
  const cellH = gridRect.height / rows;
  const col = Math.round((clientX - gridRect.left) / cellW - w / 2);
  const row = Math.round((clientY - gridRect.top) / cellH - h / 2);
  return {
    col: Math.max(0, Math.min(col, cols - w)),
    row: Math.max(0, Math.min(row, rows - h)),
  };
}

function isPointInRect(x, y, rect) {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

export default function StrongholdGrid() {
  const [gridConfig, setGridConfig] = useState({ cols: 40, rows: 40 });
  // { id, typeId, col, row }[] — bewusst flach & unabhängig vom DOM, damit eine
  // spätere Laufweg-Berechnung (Distanz zwischen zwei Elementen) direkt darauf
  // aufsetzen kann, ohne das Datenmodell zu verändern. col/row referenzieren die
  // linke obere Ecke der Kachel-Grundfläche (Größe kommt aus PALETTE_BY_ID[typeId].size).
  const [placedElements, setPlacedElements] = useState([]);
  // Palette-Item, das aktuell "am Cursor klebt" und per Klick aufs Grid platziert wird.
  const [selectedTypeId, setSelectedTypeId] = useState(null);
  const [cursorPos, setCursorPos] = useState(null);
  const [hoverCell, setHoverCell] = useState(null);
  const [deleteMode, setDeleteMode] = useState(false);
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);
  const gridRef = useRef(null);

  // Verfolgt die Cursorposition & die daraus abgeleitete Ziel-Zelle nur,
  // solange ein Palette-Item ausgewählt ist (Grundlage für die schwebende
  // Vorschau am Mauszeiger sowie die eingerastete Hover-Vorschau im Grid).
  useEffect(() => {
    if (!selectedTypeId) return;
    const type = PALETTE_BY_ID[selectedTypeId];

    function handleMouseMove(e) {
      setCursorPos({ x: e.clientX, y: e.clientY });

      const gridEl = gridRef.current;
      if (!gridEl) {
        setHoverCell(null);
        return;
      }
      const rect = gridEl.getBoundingClientRect();
      if (!isPointInRect(e.clientX, e.clientY, rect)) {
        setHoverCell(null);
        return;
      }
      setHoverCell(pointToCell(e.clientX, e.clientY, rect, gridConfig.cols, gridConfig.rows, type.size.w, type.size.h));
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [selectedTypeId, gridConfig.cols, gridConfig.rows]);

  // Rechtsklick & Escape brechen sowohl den Platzier- als auch den Löschmodus ab.
  useEffect(() => {
    function handleContextMenu(e) {
      if (!selectedTypeId && !deleteMode) return;
      e.preventDefault();
      setSelectedTypeId(null);
      setDeleteMode(false);
    }
    function handleKeyDown(e) {
      if (e.key !== "Escape") return;
      setSelectedTypeId(null);
      setDeleteMode(false);
    }
    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedTypeId, deleteMode]);

  function resizeGrid(cols, rows) {
    setGridConfig({ cols, rows });
    setPlacedElements((prev) =>
      prev.map((el) => {
        const { w, h } = PALETTE_BY_ID[el.typeId].size;
        return {
          ...el,
          col: Math.max(0, Math.min(el.col, cols - w)),
          row: Math.max(0, Math.min(el.row, rows - h)),
        };
      })
    );
  }

  function removeElement(id) {
    setPlacedElements((prev) => prev.filter((el) => el.id !== id));
  }

  function selectPaletteItem(typeId) {
    setDeleteMode(false);
    setSelectedTypeId(typeId);
  }

  function toggleDeleteMode() {
    setSelectedTypeId(null);
    setDeleteMode((prev) => !prev);
  }

  // Platzierung per Klick: das ausgewählte Item bleibt "am Cursor", sodass
  // mehrere Instanzen nacheinander gesetzt werden können. Liegt bereits ein
  // Element an der Zielposition, passiert nichts (weder Platzierung noch Abbruch).
  function handleGridClick(e) {
    if (deleteMode || !selectedTypeId) return;
    const gridEl = gridRef.current;
    if (!gridEl) return;

    const rect = gridEl.getBoundingClientRect();
    const { w, h } = PALETTE_BY_ID[selectedTypeId].size;
    const { col, row } = pointToCell(e.clientX, e.clientY, rect, gridConfig.cols, gridConfig.rows, w, h);
    const candidate = { col, row, w, h };

    const overlapsOther = placedElements.some((el) => footprintsOverlap(elementFootprint(el), candidate));
    if (overlapsOther) return;

    setPlacedElements((prev) => [...prev, { id: crypto.randomUUID(), typeId: selectedTypeId, col, row }]);
  }

  function handleResetConfirmed() {
    setPlacedElements([]);
    setResetConfirmOpen(false);
  }

  const selectedType = selectedTypeId ? PALETTE_BY_ID[selectedTypeId] : null;
  const hoverValid =
    selectedType &&
    hoverCell &&
    !placedElements.some((el) =>
      footprintsOverlap(elementFootprint(el), { ...hoverCell, w: selectedType.size.w, h: selectedType.size.h })
    );

  return (
    <div
      className="min-h-screen bg-stone-950 text-stone-200 px-4 py-8 sm:px-8"
      style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
    >
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 border-b border-stone-800 pb-5">
          <div className="text-amber-500/70 text-xs tracking-[0.35em] uppercase mb-2">
            Stronghold Crusader · Definitive Edition
          </div>
          <h1
            className="text-3xl sm:text-4xl text-stone-100"
            style={{ fontFamily: "ui-serif, Georgia, serif", letterSpacing: "0.01em" }}
          >
            Grid-Planer
          </h1>
          <p className="text-stone-400 mt-2 text-sm leading-relaxed">
            Gebäude &amp; Markierungen per Klick auswählen und per Klick aufs Grid platzieren. Rechtsklick oder Esc
            bricht ab.
          </p>
        </header>

        <section className="mb-6">
          <div className="text-stone-400 text-xs tracking-[0.25em] uppercase mb-3">Grid-Größe</div>
          <GridSizeControls cols={gridConfig.cols} rows={gridConfig.rows} onResize={resizeGrid} />
        </section>

        <section className="mb-6">
          <div className="text-stone-400 text-xs tracking-[0.25em] uppercase mb-3">Palette</div>
          <Palette selectedTypeId={selectedTypeId} onSelect={selectPaletteItem} />
        </section>

        <section>
          <div className="flex items-center justify-between mb-3">
            <div className="text-stone-400 text-xs tracking-[0.25em] uppercase">Grid</div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                title="Löschmodus: platzierte Elemente per Klick entfernen"
                onClick={toggleDeleteMode}
                className={`w-6 h-6 rounded-md border text-xs flex items-center justify-center transition ${
                  deleteMode
                    ? "border-red-500 bg-red-950/40 text-red-400"
                    : "border-stone-700 bg-stone-900 text-stone-400 hover:border-red-500/60 hover:text-red-400"
                }`}
              >
                ×
              </button>
              <button
                type="button"
                title="Grid zurücksetzen"
                onClick={() => setResetConfirmOpen(true)}
                className="rounded-md border border-stone-700 bg-stone-900 px-2 h-6 text-[10px] uppercase tracking-wide text-stone-400 hover:border-amber-600/60 hover:text-amber-400 transition"
              >
                Reset
              </button>
            </div>
          </div>
          <GridCanvas
            gridConfig={gridConfig}
            placedElements={placedElements}
            gridRef={gridRef}
            onDelete={removeElement}
            deleteMode={deleteMode}
            onGridClick={handleGridClick}
            selectedType={selectedType}
            hoverCell={hoverCell}
            hoverValid={hoverValid}
          />
        </section>
      </div>

      <CursorGhost typeId={selectedTypeId} pos={cursorPos} />

      {resetConfirmOpen && (
        <ConfirmResetModal onCancel={() => setResetConfirmOpen(false)} onConfirm={handleResetConfirmed} />
      )}
    </div>
  );
}

function GridSizeControls({ cols, rows, onResize }) {
  return (
    <div className="grid grid-cols-2 gap-3 max-w-sm">
      <label className="block">
        <div className="flex items-baseline justify-between mb-1.5">
          <span className="text-stone-300 text-sm">Spalten</span>
        </div>
        <input
          type="number"
          value={cols}
          min={1}
          onChange={(e) => onResize(Math.max(1, Number(e.target.value) || 1), rows)}
          className="w-full rounded-md border border-stone-700 bg-stone-900 px-3 py-2 text-stone-100 outline-none focus:border-amber-600 transition"
          style={{ fontFamily: "ui-monospace, monospace" }}
        />
      </label>
      <label className="block">
        <div className="flex items-baseline justify-between mb-1.5">
          <span className="text-stone-300 text-sm">Zeilen</span>
        </div>
        <input
          type="number"
          value={rows}
          min={1}
          onChange={(e) => onResize(cols, Math.max(1, Number(e.target.value) || 1))}
          className="w-full rounded-md border border-stone-700 bg-stone-900 px-3 py-2 text-stone-100 outline-none focus:border-amber-600 transition"
          style={{ fontFamily: "ui-monospace, monospace" }}
        />
      </label>
    </div>
  );
}

function Palette({ selectedTypeId, onSelect }) {
  const production = PALETTE.filter((p) => p.category === "production");
  const generic = PALETTE.filter((p) => p.category === "generic");
  return (
    <div className="space-y-3">
      <div>
        <div className="text-stone-600 text-[10px] uppercase tracking-wide mb-1.5">Produktion</div>
        <div className="flex flex-wrap items-end gap-2">
          {production.map((item) => (
            <PaletteItem key={item.id} item={item} selected={item.id === selectedTypeId} onSelect={onSelect} />
          ))}
        </div>
      </div>
      <div>
        <div className="text-stone-600 text-[10px] uppercase tracking-wide mb-1.5">Sonstiges</div>
        <div className="flex flex-wrap items-end gap-2">
          {generic.map((item) => (
            <PaletteItem key={item.id} item={item} selected={item.id === selectedTypeId} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Palette-Kacheln werden proportional zu ihrer echten Grid-Grundfläche
// dargestellt (PALETTE_SCALE px je Kachel-Einheit), damit die relative Größe
// der Gebäude schon in der Auswahl erkennbar ist.
function PaletteItem({ item, selected, onSelect }) {
  const width = Math.max(item.size.w * PALETTE_SCALE, MIN_PALETTE_SIZE);
  const height = Math.max(item.size.h * PALETTE_SCALE, MIN_PALETTE_SIZE);
  const dashed = item.category === "generic" ? "border-dashed border-stone-600" : "border-stone-700";
  const activeRing = selected ? "ring-2 ring-amber-500" : "";

  return (
    <button
      type="button"
      onClick={() => onSelect(item.id)}
      title={`${item.name} (${item.size.w}×${item.size.h})`}
      style={{ width, height, fontFamily: "ui-monospace, monospace" }}
      className={`border ${dashed} ${activeRing} bg-stone-900 rounded-sm flex items-center justify-center text-center text-[9px] leading-tight px-1 text-stone-300 hover:border-amber-600/60 select-none overflow-hidden`}
    >
      {item.short}
    </button>
  );
}

// Hintergrund liefert nur noch die optische Rasterung. Die Ablageposition wird
// aus dem Klick-Event per Zell-Geometrie berechnet (pointToCell). Das Overlay
// platziert jedes Element über seine tatsächliche Kachel-Grundfläche via
// grid-column/row span, ebenso die Hover-Vorschau des ausgewählten Items.
function GridCanvas({
  gridConfig,
  placedElements,
  gridRef,
  onDelete,
  deleteMode,
  onGridClick,
  selectedType,
  hoverCell,
  hoverValid,
}) {
  const { cols, rows } = gridConfig;
  const templateStyle = {
    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
  };
  const cursorClass = deleteMode ? "cursor-pointer" : selectedType ? "cursor-crosshair" : "cursor-default";

  return (
    <div
      ref={gridRef}
      onClick={onGridClick}
      className={`relative w-full ${cursorClass}`}
      style={{ aspectRatio: `${cols} / ${rows}` }}
    >
      <div className="absolute inset-0 grid gap-px" style={templateStyle}>
        {Array.from({ length: cols * rows }, (_, i) => (
          <div key={i} className="border border-stone-800/60 bg-stone-900/40" />
        ))}
      </div>
      <div className="absolute inset-0 grid gap-px pointer-events-none" style={templateStyle}>
        {placedElements.map((el) => (
          <PlacedElementChip key={el.id} element={el} onDelete={onDelete} deleteMode={deleteMode} />
        ))}
      </div>
      {hoverCell && selectedType && (
        <div className="absolute inset-0 grid gap-px pointer-events-none" style={templateStyle}>
          <div
            style={{
              gridColumn: `${hoverCell.col + 1} / span ${selectedType.size.w}`,
              gridRow: `${hoverCell.row + 1} / span ${selectedType.size.h}`,
            }}
            className={`rounded-sm border-2 ${
              hoverValid ? "border-emerald-400/70 bg-emerald-400/10" : "border-red-500/70 bg-red-500/10"
            }`}
          />
        </div>
      )}
    </div>
  );
}

function PlacedElementChip({ element, onDelete, deleteMode }) {
  const type = PALETTE_BY_ID[element.typeId];
  const style = {
    gridColumn: `${element.col + 1} / span ${type.size.w}`,
    gridRow: `${element.row + 1} / span ${type.size.h}`,
    fontFamily: "ui-monospace, monospace",
  };
  const tint =
    type.category === "generic"
      ? "border-dashed border-stone-600 text-stone-400"
      : "border-amber-600/40 text-amber-400 bg-amber-950/10";

  return (
    <div
      style={style}
      title={type.name}
      onClick={() => {
        if (deleteMode) onDelete(element.id);
      }}
      className={`relative pointer-events-auto border ${tint} bg-stone-900 rounded-sm flex items-center justify-center text-[10px] select-none ${
        deleteMode ? "cursor-pointer hover:border-red-500 hover:text-red-400" : "cursor-default"
      }`}
    >
      {type.short}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(element.id);
        }}
        title="Entfernen"
        className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-stone-950 border border-stone-600 text-[8px] leading-none flex items-center justify-center text-stone-400 hover:text-red-400 hover:border-red-400"
      >
        ×
      </button>
    </div>
  );
}

// Schwebt am Mauszeiger, solange ein Palette-Item ausgewählt ist — in derselben
// proportionalen Größe wie in der Palette, damit die Vorschau konsistent bleibt.
function CursorGhost({ typeId, pos }) {
  const type = typeId ? PALETTE_BY_ID[typeId] : null;
  if (!type || !pos) return null;
  const width = Math.max(type.size.w * PALETTE_SCALE, MIN_PALETTE_SIZE);
  const height = Math.max(type.size.h * PALETTE_SCALE, MIN_PALETTE_SIZE);
  const dashed = type.category === "generic" ? "border-dashed border-stone-500" : "border-amber-500";

  return (
    <div
      style={{
        left: pos.x,
        top: pos.y,
        width,
        height,
        transform: "translate(-50%, -50%)",
        fontFamily: "ui-monospace, monospace",
      }}
      className={`fixed z-50 border ${dashed} bg-stone-900/85 rounded-sm flex items-center justify-center text-center text-[9px] leading-tight px-1 text-stone-200 pointer-events-none select-none`}
    >
      {type.short}
    </div>
  );
}

function ConfirmResetModal({ onCancel, onConfirm }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="bg-stone-900 border border-stone-700 rounded-md p-5 max-w-sm w-full">
        <p className="text-stone-200 text-sm leading-relaxed">
          Bist du sicher, dass du den gesamten Grid-Fortschritt löschen möchtest? Diese Aktion kann nicht rückgängig
          gemacht werden.
        </p>
        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-stone-700 bg-stone-900 px-3 py-1.5 text-xs text-stone-300 hover:border-stone-500 transition"
          >
            Abbrechen
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-md border border-red-600 bg-red-950/40 px-3 py-1.5 text-xs text-red-400 hover:bg-red-950/70 transition"
          >
            Alles löschen
          </button>
        </div>
      </div>
    </div>
  );
}

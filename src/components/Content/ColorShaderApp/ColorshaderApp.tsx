import { useState } from "react";
import { Link } from "react-router";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { BsBorderAll, BsGrid } from "react-icons/bs";

import ContentSectionBlock from "../../HomepageVariants/MinimalHomepage/Content/ContentSectionBlock";
import { colorProgression } from "../BackgroundApp/helpers";
import ColorPicker from "./ColorPicker";
import DraggableColorCard from "./DraggableColorCard";
import Footer from "../../HomepageVariants/MinimalHomepage/Footer";

type RGB = [number, number, number];

type Card = {
  id: string;
  color: RGB;
};

const ColorShaderApp: React.FC = () => {
  const [colorCardsAmount, setColorCardsAmount] = useState<number>(16);
  const [progressionParameter, setProgressionParameter] = useState<number>(20);
  const [inputColor, setInputColor] = useState<RGB>([100, 100, 100]);

  const [generatedCards, setGeneratedCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [showValues, setShowValues] = useState(false);
  const [seamless, setSeamless] = useState(false);

  const generatePalette = () => {
    let currentColor: RGB = [...inputColor];

    const newCards: Card[] = [];

    for (let i = 0; i < colorCardsAmount; i++) {
      currentColor = colorProgression(currentColor, progressionParameter);

      newCards.push({
        id: crypto.randomUUID(),
        /*  If someone reading this:
            I don't fully understand why crypto.randomUUID() especially
            is apparently more stable then my first approach to just generate IDs from a
            loop starting with 0 and have it as "simple" numbers with few digits.
            Sure there is more uniqueness to prevent accidental repeating but is this necessary
            for that minor size of an application?
            My buddy and "sensai" told me that's just the way it is with justification via
            'the way it is' and all my (fairly little) research just set this method as preferrable
            default.

            I offer a home cooked meal and a cookie for the first person to tell me in simple terms
            like I'm 5 years old. I will find you and I will deliver, promise!
         */

        color: [...currentColor],
      });
    }

    setGeneratedCards(newCards);
  };

  /*  two fully separate drag-end handlers so a drag inside one palette can
    never read/reorder the other palette's array
  */
    const handleGeneratedDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setGeneratedCards((items) => {
      const oldIndex = items.findIndex((i) => i.id === active.id);
      const newIndex = items.findIndex((i) => i.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  const handleSelectedDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setSelectedCards((items) => {
      const oldIndex = items.findIndex((i) => i.id === active.id);
      const newIndex = items.findIndex((i) => i.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  const handleMoveToSelected = (card: Card) => {
    setGeneratedCards((prev) => prev.filter((c) => c.id !== card.id));
    setSelectedCards((prev) => {
      if (prev.some((c) => c.id === card.id)) return prev;
      return [card, ...prev];
    });
  };

  const handleMoveToGenerated = (card: Card) => {
    setSelectedCards((prev) => prev.filter((c) => c.id !== card.id));
    setGeneratedCards((prev) => {
      if (prev.some((c) => c.id === card.id)) return prev;
      return [...prev, card];
    });
  };

  const handleToggleShowValues = () => {
    setShowValues(!showValues);
  };

  const handleToggleSeamless = () => {
    setSeamless(!seamless);
  };

  const sectionContent = () => {
    return (
      <div className="text-lg space-y-1">
        <p>1. Pick a base color and hit "Start".</p>
        <p>2. Double-click a card to save it to "My Palette".</p>
        <p>3. Drag cards to reorder within a palette.</p>
        <p>4. Toggle the eye icon to reveal RGB / Hex / HSL + copy buttons.</p>
      </div>
    );
  };

  return (
    <div
      id="colorShaderApp"
      
    > <Link to="/">
      <img src="/public/CurtTheNerd_cursive_2.svg" alt="logo" className="flex w-75"/>
    </Link>
      <div className="flex-center flex-col w-[95%] md:w-[90%] max-w-360 mx-auto pt-12 sm:pt-24 overflow-hidden">  
        <h2 className="text-[clamp(1.8rem,1.2rem+2.5vw,3rem)] font-semibold tracking-tight text-center mb-2">
          RGB ColorShader
        </h2>
        <div className="h-[3px] w-[64px] rounded-full bg-[var(--textColor)]/20 mb-10" />

        <div className="w-full h-full grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-12 mt-4">
          <div className="flex-center min-h-[50vh] xl:col-start-1 xl:row-start-1 rounded-2xl border border-gray-200 bg-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.05)] backdrop-blur-sm p-6 sm:p-8">
            <ColorPicker
              red={inputColor[0]}
              green={inputColor[1]}
              blue={inputColor[2]}
              setRed={(r) => setInputColor([r, inputColor[1], inputColor[2]])}
              setGreen={(g) => setInputColor([inputColor[0], g, inputColor[2]])}
              setBlue={(b) => setInputColor([inputColor[0], inputColor[1], b])}
              setColor={setInputColor}
              colorCardsAmount={colorCardsAmount}
              setColorCardsAmount={setColorCardsAmount}
              progressionParameter={progressionParameter}
              setProgressionParameter={setProgressionParameter}
              generateOnClick={generatePalette}
            />
          </div>

          <div
            id="generatedCards"
            className="w-full h-full xl:col-start-2 xl:row-start-1 xl:row-span-2 m-auto rounded-2xl border border-gray-200 bg-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.05)] backdrop-blur-sm p-6 sm:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <p className="text-[clamp(1.1rem,0.9rem+0.7vw,1.5rem)] font-semibold tracking-tight">
                Generated Palette
              </p>
              <button
                aria-label={seamless ? "switch to card view" : "switch to seamless view"}
                className="flex-center gap-2 text-[clamp(0.9rem,0.8rem+0.3vw,1.1rem)] border border-gray-300 px-4 py-2 rounded-full hover:text-white hover:bg-gray-800 hover:border-gray-800 shadow-sm hover:shadow-md transition-all duration-200"
                onClick={handleToggleSeamless}
              >
                {seamless ? <BsGrid /> : <BsBorderAll />}
                {seamless ? "card view" : "seamless view"}
              </button>
            </div>
            <DndContext
              //  own drag container -> only ever reorders generatedCards
              collisionDetection={closestCenter}
              onDragEnd={handleGeneratedDragEnd}
            >
              <SortableContext
                //  auto-sort handling for array (apparently it's better usage for grid but flex works as well)
                items={generatedCards.map((c) => c.id)}
                strategy={rectSortingStrategy}
              >
                <div
                  className={`w-full flex flex-wrap items-start justify-center ${seamless ? "gap-0" : "gap-1.5"}`}
                >
                  {generatedCards.map((card) => (
                    <DraggableColorCard
                      key={card.id}
                      id={card.id}
                      color={card.color}
                      onDoubleClick={() => handleMoveToSelected(card)}
                      showValues={showValues}
                      seamless={seamless}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </div>

          <div
            id="selectedCards"
            className="xl:col-start-1 xl:row-start-2 flex-center flex-col rounded-2xl border border-gray-200 bg-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.05)] backdrop-blur-sm p-6 sm:p-8"
          >
            <div className="w-full flex items-center justify-between pb-6">
              <p className="text-[clamp(1.1rem,0.9rem+0.7vw,1.5rem)] font-semibold tracking-tight">
                My Palette
              </p>
              <button
                className="flex-center gap-2 text-[clamp(0.9rem,0.8rem+0.3vw,1.1rem)] border border-gray-300 px-4 py-2 rounded-full hover:text-white hover:bg-gray-800 hover:border-gray-800 shadow-sm hover:shadow-md transition-all duration-200"
                onClick={handleToggleShowValues}
              >
                {showValues ? <MdVisibilityOff /> : <MdVisibility />}
                {showValues ? "hide values" : "show values"}
              </button>
            </div>

            <DndContext
              //  own drag container -> only ever reorders selectedCards
              collisionDetection={closestCenter}
              onDragEnd={handleSelectedDragEnd}
            >
              <SortableContext
                items={selectedCards.map((c) => c.id)}
                strategy={rectSortingStrategy}
              >
                <div
                  className={`w-full h-full flex flex-wrap items-start justify-center min-h-[80px] ${seamless ? "gap-0" : "gap-1.5"}`}
                >
                  {selectedCards.length === 0 && (
                    <p className="text-gray-400 text-sm italic py-6">
                      double-click a card above to save it here
                    </p>
                  )}
                  {selectedCards.map((card) => (
                    <DraggableColorCard
                      key={card.id}
                      id={card.id}
                      color={card.color}
                      showValues={showValues}
                      onDoubleClick={() => handleMoveToGenerated(card)}
                      seamless={seamless}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </div>
        </div>

        <div className="w-[90%] mt-6">
          <ContentSectionBlock
            header="How to use:"
            sectionContent={sectionContent()}
            defaultOpen={false}
          />
        </div>
      <div className="w-full py-12"><Footer/></div>
      </div>

      
    </div>
  );
};

export default ColorShaderApp;

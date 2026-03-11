import { useState } from "react";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import ContentSectionBlock from "../../HomepageVariants/MinimalHomepage/Content/ContentSectionBlock";
import { colorProgression } from "../BackgroundApp/helpers";
import ColorPicker from "./ColorPicker";
import DraggableColorCard from "./DraggableColorCard";
import { p } from "react-router/dist/development/index-react-server-client-BbRcBjrA";

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
  const [showRGB, setShowRGB] = useState(false);

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

  const handleDragEnd = (event: DragEndEvent) => {
    //  actual executing of array re-ordering
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      // generatedCards
      if (generatedCards.some((c) => c.id === active.id)) {
        setGeneratedCards((items) => {
          const oldIndex = items.findIndex((i) => i.id === active.id);
          const newIndex = items.findIndex((i) => i.id === over.id);

          return arrayMove(items, oldIndex, newIndex);
        });
      }

      // selectedCards
      if (selectedCards.some((c) => c.id === active.id)) {
        setSelectedCards((items) => {
          const oldIndex = items.findIndex((i) => i.id === active.id);
          const newIndex = items.findIndex((i) => i.id === over.id);

          return arrayMove(items, oldIndex, newIndex);
        });
      }
    }
  };

  const handleDblclick = (card: Card) => {
    setSelectedCards((prev) => {
      const checkIfCardExists = prev.some((c) => c.id === card.id);

      if (checkIfCardExists) return prev;

      return [card, ...prev];
    });
  };

  const handleRemoveSelectedCard = (card: Card) => {
    setSelectedCards((prev) => prev.filter((c) => c.id !== card.id));
  };

  const handleShowRGB = () => {
    setShowRGB(!showRGB);
  };

  const sectionContent = () => {
    return (
      <div>
        <p>- select your base-color via seperate RGB-inputs</p>
        <p>
          - choose intensity of gradients and the amount of color cards you want
          to create
        </p>
        <p>- double-click on generated cards to save them in "My Palette"</p>
        <p>
          - double-click on cards inside "My Palette" will remove the clicked
          card
        </p>
        <p>- rearrange both palettes via drag-and-drop</p>
        <p>
          - show/hide the specific RGB-values inside "My Palette" with the same
          named button
        </p>
      </div>
    );
  };

  return (
    <div
      id="colorShaderApp"
      className="flex-center flex-col mx-auto xl:m-6 my-6 overflow-hidden"
    >
      <div className="w-[90%]">
        <ContentSectionBlock
          header="How to use:"
          sectionContent={sectionContent()}
        />
      </div>

      <div className="w-full h-full grid grid-col-1 xl:grid-cols-2 mt-4">
        <div className="flex-center min-h-[50vh]">
          <ColorPicker
            red={inputColor[0]}
            green={inputColor[1]}
            blue={inputColor[2]}
            setRed={(r) => setInputColor([r, inputColor[1], inputColor[2]])}
            setGreen={(g) => setInputColor([inputColor[0], g, inputColor[2]])}
            setBlue={(b) => setInputColor([inputColor[0], inputColor[1], b])}
            colorCardsAmount={colorCardsAmount}
            setColorCardsAmount={setColorCardsAmount}
            progressionParameter={progressionParameter}
            setProgressionParameter={setProgressionParameter}
            generateOnClick={generatePalette}
          />
        </div>

        <div id="generatedCards" className="w-full h-full row-span-4 m-auto">
          <DndContext
            //  global drag container -> defines start, end and move
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              //  auto-sort handling for array (apparently it's better usage for grid but flex works as well)
              items={generatedCards.map((c) => c.id)}
              strategy={rectSortingStrategy}
            >
              <div className="w-full flex flex-wrap items-start justify-center gap-2 mt-6">
                {generatedCards.map((card) => (
                  <DraggableColorCard
                    key={card.id}
                    id={card.id}
                    color={card.color}
                    onDoubleClick={() => handleDblclick(card)}
                    showRGB={false}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>

        <div id="selectedCards" className="my-12 flex-center flex-col">
          <div className="w-[80%] flex items-center justify-between pb-6">
            <p className=" text-xl">My Palette:</p>
            <button
              className="text-xl border-1 px-4 py-1 rounded-lg hover:text-white hover:bg-gray-800 transition-all duration-200"
              onClick={handleShowRGB}
            >
              show RGB-values
            </button>
          </div>

          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={selectedCards.map((c) => c.id)}
              strategy={rectSortingStrategy}
            >
              <div className="w-full h-full flex flex-wrap items-start justify-center gap-2">
                {selectedCards.map((card) => (
                  <DraggableColorCard
                    key={card.id}
                    id={card.id}
                    color={card.color}
                    showRGB={showRGB}
                    onDoubleClick={() => handleRemoveSelectedCard(card)}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );
};

export default ColorShaderApp;

import { useState } from "react";

import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { colorProgression } from "../BackgroundApp/helpers";

import ColorPicker from "./ColorPicker";
import DraggableColorCard from "./DraggableColorCard";

type RGB = [number, number, number];

type Card = {
  id: string;
  color: RGB;
};

const ColorShaderApp: React.FC = () => {
  const [colorCardsAmount, setColorCardsAmount] = useState<number>(8);
  const [progressionParameter, setProgressionParameter] = useState<number>(20);
  const [inputColor, setInputColor] = useState<RGB>([100, 100, 100]);

  const [cards, setCards] = useState<Card[]>([]);

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

    setCards(newCards);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    //  actual executing of array re-ordering
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      setCards((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="w-full h-full grid grid-col-1 xl:grid-cols-2 xl:gap-4 md:m-4 pt-8">
      <div className="pt-32">
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

      <div className="max-w-[900px] min-w-[330px] m-auto">
        <DndContext
          //  global drag container -> defines start, end and move
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            //  auto-sort handling for array (apparently it's better usage for grid but flex works as well)
            items={cards.map((c) => c.id)}
            strategy={rectSortingStrategy}
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {cards.map((card) => (
                <DraggableColorCard
                  key={card.id}
                  id={card.id}
                  color={card.color}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default ColorShaderApp;

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ColorCard from "./ColorCard";

type RGB = [number, number, number];

type Props = {
  id: string;
  color: RGB;
};

const DraggableColorCard: React.FC<Props> = ({ id, color }) => {
  //  what a hassle bro... didn't expect to have sorting and animating with a kit with that many variables :/
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform), //  handle drag animation and live updates style based on position inside drag-container
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ColorCard red={color[0]} green={color[1]} blue={color[2]} />
    </div>
  );
};

export default DraggableColorCard;

import { ReactNode, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface SectionProps {
  header: string;
  sectionContent: ReactNode;
  defaultOpen?: boolean;
}

const ContentSectionBlock = ({
  header,
  sectionContent,
  defaultOpen = true,
}: SectionProps) => {
  const [foldoutOpen, setFoldoutOpen] = useState(defaultOpen);

  const handleToggleFoldout = () => setFoldoutOpen(!foldoutOpen);

  return (
    <div
      id={header}
      className={`group pt-24 sm:pt-32 w-full border-b-1 border-gray-300 ${foldoutOpen ? "pb-12" : "pb-2"}`}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleToggleFoldout}
      >
        <p
          className="text-3xl text-gray-700 font-semibold tracking-tight group-hover:tracking-wider group-hover:text-[var(--textColor)] transition-all duration-300"
        >
          {header}
        </p>
        <button className="text-[1.7rem] group-hover:scale-115 ml-4 text-gray-700 font-semibold tracking-tight group-hover:underline group-hover:tracking-wide group-hover:text-[var(--textColor)] transition-all duration-300">
          {foldoutOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>

      <div className={`${foldoutOpen ? "block" : "hidden"}`}>
        {sectionContent}
      </div>
    </div>
  );
};

export default ContentSectionBlock;

import { ReactNode, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface SectionProps {
  header: string;
  sectionContent: ReactNode;
}

const ContentSectionBlock = ({ header, sectionContent, id }: SectionProps) => {
  const [foldoutOpen, setFoldoutOpen] = useState(false);

  const handleToggleFoldout = () => setFoldoutOpen(!foldoutOpen);

  return (
    <div
      id={header}
      className={`group w-full pr-4 border-b-1 border-gray-300 ${foldoutOpen ? "pb-6" : "pb-2"}`}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleToggleFoldout}
      >
        <p
          className="text-[1.4rem] text-gray-700 font-semibold tracking-tight group-hover:tracking-wider group-hover:text-[var(--textColor)] transition-all duration-300"
          style={{ fontFamily: "Inter, sans-serif" }}
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

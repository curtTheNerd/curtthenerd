import { ReactNode, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface SectionProps {
  header: string;
  sectionContent: ReactNode;
}

const ContentSectionBlock = ({ header, sectionContent }: SectionProps) => {
  const [foldoutOpen, setFoldoutOpen] = useState(false);

  const handleToggleFoldout = () => setFoldoutOpen(!foldoutOpen);

  return (
    <div className="group w-full pr-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleToggleFoldout}
      >
        <p
          className="text-xl text-gray-700 font-semibold tracking-tight group-hover:underline group-hover:tracking-wide group-hover:text-[var(--textColor)] transition-all duration-300"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {header}
        </p>
        <button className="text-2xl ml-4 text-gray-700 font-semibold tracking-tight group-hover:underline group-hover:tracking-wide group-hover:text-[var(--textColor)] transition-all duration-300">
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

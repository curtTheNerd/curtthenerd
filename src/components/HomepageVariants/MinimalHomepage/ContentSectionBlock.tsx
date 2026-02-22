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
    <div className="w-full">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleToggleFoldout}
      >
        <p style={{ fontFamily: "Inter, sans-serif" }}>{header}</p>
        <button className="text-[1.25rem] ml-4 cursor-pointer">
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

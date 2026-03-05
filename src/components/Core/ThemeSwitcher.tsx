import { useState } from "react";
import { useVariant } from "./VariantContext";

const ThemeSwitcher = () => {
  const { setVariant } = useVariant();
  const [open, setOpen] = useState(false);

  // fixed Button to control differnt Homepage styles, determined by what DynamicHomepage component renders as index element on "/"

  return (
    <div className="style-switch-menu">
      {
        //absolute top-4 left-4 z-50
      }
      <button
        onClick={() => setOpen(!open)}
        className="text-[1.1rem] px-5 py-1 border-2 border-gray-800 rounded-xl hover:text-[1.15rem] hover:text-gray-800 hover:shadow-lg hover:border-gray-600 hover:bg-gray-300 transition-all duration-500"
      >
        Style
      </button>
      {open && (
        <div className="mt-2 bg-white shadow-lg rounded">
          <button
            onClick={() => {
              setVariant("parallax");
              console.log("parallax");
            }}
            className="block px-4 py-2 w-full text-left hover:bg-gray-100"
          >
            Parallax
          </button>

          <button
            onClick={() => {
              setVariant("bento");
              console.log("bento");
            }}
            className="block px-4 py-2 w-full text-left hover:bg-gray-100"
          >
            Bento
          </button>

          <button
            onClick={() => {
              setVariant("modern-minimal");
              console.log("modern");
            }}
            className="block px-4 py-2 w-full text-left hover:bg-gray-100"
          >
            Modern
          </button>

          <button
            onClick={() => {
              setVariant("minimal");
              console.log("minimal");
            }}
            className="block px-4 py-2 w-full text-left hover:bg-gray-100"
          >
            Minimal
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;

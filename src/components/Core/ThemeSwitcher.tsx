import { useState } from "react";
import { useVariant, VariantType } from "./VariantContext";

type StyleProps = {
  wrapperStyle?: string;
  buttonStyle?: string;
  foldOutWrapperStyle?: string;
  foldOutItemStyle?: string;
};

const ThemeSwitcher = ({
  wrapperStyle,
  buttonStyle,
  foldOutWrapperStyle,
  foldOutItemStyle,
}: StyleProps) => {
  // fixed Button to control differnt Homepage styles, determined by what DynamicHomepage component renders as index element on "/"

  const { variant, setVariant } = useVariant();
  const [open, setOpen] = useState(false);

  console.log("Current variant:", variant);

  const themes: VariantType[] = [
    "Minimal",
    "Parallax",
    "Modern",
    "Bento",
    "Playful",
  ];

  return (
    <div className={wrapperStyle}>
      {
        //absolute top-4 left-4 z-50
      }
      <button onClick={() => setOpen(!open)} className={buttonStyle}>
        Style
      </button>

      {open && (
        <div className={foldOutWrapperStyle}>
          {themes.map((theme) => (
            <button
              key={theme}
              className={foldOutItemStyle}
              onClick={() => {
                console.log("Switch to", theme);
                setVariant(theme);
              }}
            >
              {theme}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;

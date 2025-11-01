import BackButton from "../BackButton";
import ColorShaderApp from "./ColorShader/ColorshaderApp";
import BackgroundApp from "./BackgroundApp/Background";

const DesignApps = () => {
  return (
    <div className="content-page">
      <BackButton />

      <div className="">
        <p
          className="text-[1.75rem] pb-2"
          style={{
            fontFamily: "Courier New",
            fontStyle: "italic",
          }}
        >
          RGB-Color Shader App
        </p>

        <p className="text-[1.1rem]">
          - app created with TypeScript and TailwindCSS
          <br />- take 3 RGB-values and renders tiles with similar shades as
          well as new RGB-value as hover:overlay
          <br />- fully adjustable: amount of shades and progression of
          gradients
          <br />- this App and the Background-App below utilize the same
          function for color-progression
          <br />
          <br />
          Checkout the code on my
          <span className="cursor-pointer pl-2">
            <a
              href="https://github.com/curtTheNerd/curtthenerd/tree/gitMain/src/components/Content/ContentGridPages/DesignApps/ColorShader"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-700 text-[1.2rem] transition-colors duration-300"
            >
              GitHub
            </a>
          </span>
        </p>
      </div>

      <div className="pt-8 pb-16">
        <ColorShaderApp />
      </div>

      <div className="pb-12">
        <p
          className="text-[1.75rem] pb-2"
          style={{
            fontFamily: "Courier New",
            fontStyle: "italic",
          }}
        >
          Background App
        </p>
        <p>RGB-Color Shade Generator</p>
        <p className="text-[1.1rem]">
          - app created with TypeScript and TailwindCSS
          <br />- generates animated entities with random x- and y-position on
          screen
          <br />- fully adjustable: panel on bottom-right of the screen opens
          the button console
          <br />- controls entitys shape, size, color progression,
          animation-speed, delay and background-color
          <br />
          <br />
          Checkout the code on my
          <span className="cursor-pointer pl-2">
            <a
              href="https://github.com/curtTheNerd/curtthenerd/tree/gitMain/src/components/Content/ContentGridPages/DesignApps/BackgroundApp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-700 text-[1.2rem] transition-colors duration-300"
            >
              GitHub
            </a>
          </span>
        </p>
      </div>

      <div className="relative w-[95vw] h-[95vh] overflow-hidden">
        <BackgroundApp />
      </div>
    </div>
  );
};

export default DesignApps;

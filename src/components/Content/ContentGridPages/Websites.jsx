import { Link } from "react-router";
import faquelage from "../../../assets/images/FaquelageWebsiteHomeImage.png";
import katyaGranova from "../../../assets/images/KatyaGranovaWebsiteHomeImage.png";
import schaustelle from "../../../assets/images/SchaustelleHalleWebsite.png";
import BackButton from "../ContentGridPages/BackButton";

const Websites = () => {
  return (
    <div className="content-page">
      <BackButton />
      <h2 className="pb-12 text-[var(--textColor)]">Development and Design</h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center p-8">
          <p
            className="text-[1.75rem] pb-2"
            style={{
              fontFamily: "Courier New",
              fontStyle: "italic",
            }}
          >
            Faquelage.com
          </p>
          <p>Band Website</p>
          <p className="text-[1.1rem]">
            - Website created with Vite + React.JavaScript and TailwindCSS
            <br />- utilizes react-router-dom, react-icons and react-youtube
            <br />- custom-design based on the provided image for background
            <br />
            <br />
            Checkout the code on my
            <span className="cursor-pointer pl-2">
              <a
                href="https://github.com/curtTheNerd/faquelage2.0/tree/gitMain"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 transition-colors duration-300"
              >
                GitHub
              </a>
            </span>
          </p>
        </div>
        <a
          href="https://faquelage.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-center"
        >
          <div className="flex-center">
            <img src={faquelage} alt="" />
          </div>
        </a>
        <div className="flex flex-col justify-center p-8">
          <p
            className="text-[1.75rem] pb-2"
            style={{ fontFamily: "Courier New", fontStyle: "italic" }}
          >
            Katya-Granova.com
          </p>
          <p>Artist Portfolio & Showroom</p>
          <p className="text-[1.1rem]">
            - Website created with Vite + React.JavaScript, CSS and SCSS
            <br />- utilizes react-router-dom, react-zoom-pan-pinch, react-icons
            and react-youtube
            <br />- design based of detailed clients wishes
            <br />
            <br />
            Checkout the code on my
            <span className="cursor-pointer pl-2">
              <a
                href="https://github.com/curtTheNerd/katyaGranovadev1.2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 transition-colors duration-300"
              >
                GitHub
              </a>
            </span>
          </p>
        </div>
        <a
          href="https://katya-granova.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-center"
        >
          <div className="flex-center">
            <img src={katyaGranova} alt="" />
          </div>
        </a>

        <div className="flex flex-col justify-center p-8">
          <p
            className="text-[1.75rem] pb-2"
            style={{ fontFamily: "Courier New", fontStyle: "italic" }}
          >
            CurtTheNerd.dev
          </p>
          <p>Frontend Portfolio</p>
          <p className="text-[1.1rem]">
            - Website created with Vite + React.TypeScript, CSS and TailwindCSS
            <br />- utilizes react-router-dom, react-zoom-pan-pinch,
            react-parallax, react-spring
            <br />
            <br />
            Checkout the code on my
            <span className="cursor-pointer pl-2">
              <a
                href="https://github.com/curtTheNerd/curtthenerd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 transition-colors duration-300"
              >
                GitHub
              </a>
            </span>
          </p>
        </div>
        <Link
          to={"/"}
          className="flex-center hover:underline text-[1.75rem]"
          style={{ fontFamily: "Courier New", fontStyle: "italic" }}
        >
          Back to HomePage
        </Link>
      </div>

      <h2 className="pb-12 pt-20 text-2xl md:text-3xl xl:text-4xl">
        Fixed and Maintained
      </h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center p-8">
          <p
            className="text-[1.75rem] pb-2"
            style={{
              fontFamily: "Courier New",
              fontStyle: "italic",
            }}
          >
            Schaustelle-Halle.de
          </p>
          <p>Actor Collective</p>
          <p className="text-[1.1rem]">
            - based on WordPress and CSS
            <br />- BugFixes, maintaining
          </p>
        </div>
        <a
          href="https://schaustelle-halle.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-center"
        >
          <div className="flex-center">
            <img src={schaustelle} alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Websites;

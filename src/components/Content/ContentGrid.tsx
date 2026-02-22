import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router";
import svgDesign from "/ContentGrid/design-education-painting-svgrepo-com.svg";

const ContentGrid: React.FC = () => {
  const location = useLocation();

  const fontStyle = { fontFamily: "Courier New" };

  // effect for the "BACK"-button to automatically scroll down to content-section on Homepage when navigating back
  useEffect(() => {
    const scrollId = location.state?.scrollToId;
    if (scrollId) {
      const element = document.getElementById(scrollId);
      if (element) {
        // short delay to ensure the site is "ready"
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div id="content-grid" className="flex-center w-full h-full">
      <div className="grid w-[90%] lg:w-[80%] z-0 max-w-[90vw] max-h-[90vh] md:m-4 xl:m-8 grid-cols-7 grid-rows-9 sm:grid-cols-8 sm:grid-rows-9 lg:grid-cols-12 lg:grid-rows-9 gap-2 lg:gap-3 2xl:gap-3">
        <Link
          to="weatherApp"
          id="weatherApp"
          className="group grid-item col-start-5 col-end-8 row-start-4 row-end-6 sm:col-start-1 sm:col-end-5 sm:row-start-5 sm:row-end-7 lg:col-start-4 lg:col-end-7 lg:row-start-5 lg:row-end-8"
        >
          <div className="flex-center flex-col">
            <img
              className="opacity-50 w-[70px] md:w-[100px] xl:w-[110px]"
              src="/ContentGrid/api-svgrepo-com (1).svg"
              alt="#"
            />
            <div className="absolute bottom-2 mt-4 text-[var(textColor)] opacity-0 group-hover:opacity-100  transition-all duration-500"></div>
          </div>
        </Link>

        <Link
          to="/designapps"
          id="stylingHelpers"
          className="group grid-item col-start-1 col-end-5 row-start-3 row-end-5 sm:col-start-1 sm:col-end-5 sm:row-start-1 sm:row-end-3 lg:col-start-1 lg:col-end-4 lg:row-start-2 lg:row-end-7"
        >
          <div className="flex-center flex-col">
            <img
              className="opacity-50 w-[70px] md:w-[100px] xl:w-[120px]"
              src={svgDesign}
              alt="#"
            />
            <div
              style={fontStyle}
              className="text-[var(textColor)] lg:pt-8 lg:text-2xl group-hover:opacity-100  transition-all duration-500"
            >
              Design Apps
            </div>
          </div>
        </Link>
        {/*
        <Link
          to="/websites"
          id="websites"
          className="group grid-item col-start-1 col-end-5 row-start-5 row-end-9 sm:col-start-6 sm:col-end-9 sm:row-start-4 sm:row-end-9 lg:col-start-4 lg:col-end-10 lg:row-start-1 lg:row-end-5"
        >
          <div className="flex-center flex-col">
            <div className="flex-center gap-4">
              <img
                className="opacity-50 w-[70px] md:w-[100px] xl:w-[120px]"
                src="/ContentGrid/website-program-svgrepo-com.svg"
                alt="#"
              />
              <img
                className="opacity-50 w-[70px] md:w-[100px] xl:w-[120px]"
                src="/ContentGrid/website-click-svgrepo-com.svg"
                alt="#"
              />
            </div>

            <div
              style={fontStyle}
              className="text-[var(textColor)] pt-6 lg:pt-8 lg:text-2xl group-hover:opacity-100  transition-all duration-500"
            >
              Websites
            </div>
          </div>
        </Link>
        <Link
          to="/playcorner"
          id="playCorner"
          className="group grid-item col-start-5 col-end-8 row-start-1 row-end-4 sm:col-start-6 sm:col-end-9 sm:row-start-1 sm:row-end-4 lg:col-start-1 lg:col-end-4 lg:row-start-7 lg:row-end-10"
        >
          <div className="flex-center flex-col">
            <img
              className="opacity-50 w-[70px] md:w-[100px] xl:w-[120px]"
              src="/ContentGrid/games-svgrepo-com (1).svg"
              alt="#"
            />
            <div
              style={fontStyle}
              className="text-[var(textColor)] pt-4 xl:pt-8 lg:text-2xl group-hover:opacity-100  transition-all duration-500"
            >
              PlayCorner
            </div>
          </div>
        </Link>
        <Link
          to="/about"
          id="about"
          className="group grid-item col-start-5 col-end-8 row-start-6 row-end-9 sm:col-start-2 sm:col-end-6 sm:row-start-7 sm:row-end-9 lg:col-start-10 lg:col-end-13 lg:row-start-2 lg:row-end-5"
        >
          <div className="flex-center flex-col">
            <div className="flex-center">
              <img
                className="opacity-50 w-[60px] md:w-[80px] xl:w-[90px]"
                src="/ContentGrid/cv-svgrepo-com.svg"
                alt="#"
              />
              <img
                className="opacity-50 w-[60px] md:w-[80px] xl:w-[90px]"
                src="/ContentGrid/about-svgrepo-com.svg"
                alt="#"
              />
            </div>
            <div
              style={fontStyle}
              className="text-[var(textColor)] lg:pt-4 lg:text-2xl group-hover:opacity-100  transition-all duration-500"
            >
              About
            </div>
          </div>
        </Link>

        <Link
          to="/gallery"
          id="gallery"
          className="group grid-item col-start-1 col-end-5 row-start-1 row-end-3 sm:col-start-2 sm:col-end-6 sm:row-start-3 sm:row-end-5 lg:col-start-7 lg:col-end-11 lg:row-start-5 lg:row-end-8"
        >
          <div className="flex-center flex-col">
            <img
              className="opacity-50 w-[70px] md:w-[100px] xl:w-[120px]"
              src="/ContentGrid/gallery-add-svgrepo-com.svg"
              alt="#"
            />
            <div
              style={fontStyle}
              className="text-[var(textColor)] lg:pt-4 lg:text-2xl group-hover:opacity-100  transition-all duration-500"
            >
              Gallery App
            </div>
          </div>
        </Link> */}

        <div className="w-full aspect-square"></div>
      </div>
    </div>
  );
};

export default ContentGrid;

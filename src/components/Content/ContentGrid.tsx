import { Link } from "react-router";

const ContentGrid: React.FC = () => {
  return (
    <div className="flex-center w-full h-full">
      <div className="grid w-full z-0 max-w-[90vw] max-h-[90vh] md:m-4 xl:m-8 grid-cols-7 grid-rows-9 sm:grid-cols-8 sm:grid-rows-9 lg:grid-cols-12 lg:grid-rows-9 gap-2 lg:gap-3 2xl:gap-3">
        <Link
          to="/designapps"
          id="stylingHelpers"
          className="group grid-item col-start-1 col-end-4 row-start-3 row-end-5 sm:col-start-2 sm:col-end-5 sm:row-start-1 sm:row-end-3 lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-7"
        >
          <div className="flex-center flex-col">
            <img
              className="opacity-50 w-[70px] md:w-[100px] xl:w-[120px]"
              src="/public/ContentGrid/design-education-painting-svgrepo-com.svg"
              alt="#"
            />
            <div className="absolute bottom-2 mt-4 text-[var(textColor)] opacity-0 group-hover:opacity-100  transition-all duration-500">
              DesignApps
            </div>
          </div>
        </Link>

        <Link
          to="/websites"
          id="websites"
          className="group grid-item col-start-2 col-end-7 row-start-5 row-end-8 lg:col-start-5 lg:col-end-9 lg:row-start-2 lg:row-end-5"
        >
          <div className="flex-center flex-col">
            <div className="flex-center gap-4">
              <img
                className="opacity-50 w-[70px] md:w-[100px] xl:w-[120px]"
                src="/public/ContentGrid/website-program-svgrepo-com.svg"
                alt="#"
              />
              <img
                className="opacity-50 w-[70px] md:w-[100px] xl:w-[120px]"
                src="/public/ContentGrid/website-click-svgrepo-com.svg"
                alt="#"
              />
            </div>

            <div className="absolute bottom-2 mt-4 text-[var(textColor)] opacity-0 group-hover:opacity-100  transition-all duration-500">
              Websites
            </div>
          </div>
        </Link>
        <Link
          to="/playcorner"
          id="playCorner"
          className="group grid-item col-start-5 col-end-8 row-start-1 row-end-4 sm:col-start-6 sm:col-end-9 sm:row-start-1 sm:row-end-4 lg:col-start-4 lg:col-end-7 lg:row-start-5 lg:row-end-8"
        >
          <div className="flex-center flex-col">
            <img
              className="opacity-50 w-[70px] md:w-[100px] xl:w-[120px]"
              src="/public/ContentGrid/games-svgrepo-com (1).svg"
              alt="#"
            />
            <div className="absolute bottom-2 mt-4 text-[var(textColor)] opacity-0 group-hover:opacity-100  transition-all duration-500">
              PlayCorner
            </div>
          </div>
        </Link>
        <Link
          to="/about"
          id="about"
          className="group grid-item col-start-1 col-end-4 row-start-8 row-end-10 sm:col-start-1 sm:col-end-4 sm:row-start-8 sm:row-end-10 lg:col-start-1 lg:col-end-4 lg:row-start-7 lg:row-end-9"
        >
          <div className="flex-center flex-col">
            <div className="flex-center">
              <img
                className="opacity-50 w-[70px] md:w-[100px] xl:w-[120px]"
                src="/public/ContentGrid/cv-svgrepo-com.svg"
                alt="#"
              />
              <img
                className="opacity-50 w-[70px] md:w-[100px] xl:w-[120px]"
                src="/public/ContentGrid/about-svgrepo-com.svg"
                alt="#"
              />
            </div>
            <div className="absolute bottom-2 mt-4 text-[var(textColor)] opacity-0 group-hover:opacity-100  transition-all duration-500">
              About
            </div>
          </div>
        </Link>

        <Link
          to="/crochet"
          id="crochet"
          className="group grid-item col-start-2 col-end-5 row-start-1 row-end-3 sm:col-start-4 sm:col-end-6 sm:row-start-3 sm:row-end-5 lg:col-start-9 lg:col-end-12 lg:row-start-1 lg:row-end-4"
        >
          <div className="flex-center flex-col">
            <img
              className="opacity-50 w-[70px] md:w-[100px] xl:w-[120px]"
              src="/public/ContentGrid/gallery-add-svgrepo-com.svg"
              alt="#"
            />
            <div className="absolute bottom-2 mt-4 text-[var(textColor)] opacity-0 group-hover:opacity-100  transition-all duration-500">
              GalleryApp
            </div>
          </div>
        </Link>

        <Link
          to="api"
          id="api"
          className="group grid-item col-start-6 col-end-8 row-start-4 row-end-5 sm:col-start-6 sm:col-end-8 sm:row-start-4 sm:row-end-5 lg:col-start-12 lg:col-end-13 lg:row-start-1 lg:row-end-3"
        >
          <div className="flex-center flex-col">
            <img
              className="opacity-50 w-[70px] md:w-[100px] xl:w-[120px]"
              src="/public/ContentGrid/api-svgrepo-com (1).svg"
              alt="#"
            />
            <div className="absolute bottom-2 mt-4 text-[var(textColor)] opacity-0 group-hover:opacity-100  transition-all duration-500">
              API
            </div>
          </div>
        </Link>
        <div className="w-full aspect-square"></div>
      </div>
    </div>
  );
};

export default ContentGrid;

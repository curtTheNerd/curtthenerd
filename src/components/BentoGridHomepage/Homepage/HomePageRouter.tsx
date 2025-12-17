import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ParallaxHomepage from "./ParallaxHomepage";

import WeatherApp from "../Content/WeatherApp";

//import PlayCorner from "../../ContentOldStyle/ContentGridPages/PlayCorner/PlayCorner";
//import DesignApps from "../Content/DesignHelpers/DesignApps";
//import About from "../Content/About/About.jsx";
//import Websites from "../Content/Websites";

//import Crochet from "../../ContentOldStyle/ContentGridPages/Crochet/Crochet.js";
//import Contact from "../../ContactForm";

const HomepageRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<ParallaxHomepage />} />
        <Route path="/weatherApp" element={<WeatherApp />} />
        {/* 
        <Route path="/playcorner" element={<PlayCorner />} />
        <Route path="/designapps" element={<DesignApps />} />
        <Route path="/about" element={<About />} />
        <Route path="/websites" element={<Websites />} />
        
        <Route path="/gallery" element={<Crochet />} />
        <Route path="/contact" element={<Contact />} />
        */}
        <Route
          path="*"
          element={
            <div className="p-10 text-center text-xl">
              ❌ Adress not found –{" "}
              <a href="/" className="underline">
                Back to HomePage
              </a>
            </div>
          }
        />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default HomepageRouter;

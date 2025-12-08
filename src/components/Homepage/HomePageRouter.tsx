import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ParallaxHomepage from "./ParallaxHomepage";

import PlayCorner from "../Content/ContentGridPages/PlayCorner/PlayCorner";
import DesignApps from "../Content/ContentGridPages/DesignApps/DesignApps";
import About from "../Content/ContentGridPages/About/About.jsx";
import Websites from "../Content/ContentGridPages/Websites";
import APIs from "../Content/ContentGridPages/APIs/APIs.jsx";
import Crochet from "../Content/ContentGridPages/Crochet/Crochet.jsx";
import Contact from "../ContactForm";

const HomepageRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<ParallaxHomepage />} />
        <Route path="/playcorner" element={<PlayCorner />} />
        <Route path="/designapps" element={<DesignApps />} />
        <Route path="/about" element={<About />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/api" element={<APIs />} />
        <Route path="/gallery" element={<Crochet />} />
        <Route path="/contact" element={<Contact />} />

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

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import DynamicHome from "../HomepageVariants/DynamicHome";
import WeatherApp from "../Content/WeatherApp";

const HomepageRouter: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<DynamicHome />} />
        <Route path="/weatherApp" element={<WeatherApp />} />
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
      </>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default HomepageRouter;

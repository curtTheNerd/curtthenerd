import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import DynamicHome from "../HomepageVariants/DynamicHome";

import Background from "../Content/BackgroundApp/Background";
import ColorShaderApp from "../Content/ColorShaderApp/ColorshaderApp";
import WeatherApp from "../Content/CompareWeatherForTravelApp/WeatherApp";
import CollyBlocs from "../Content/CollyBlocs/CollyBlocsWrapper";

import CV from "../Content/About/CV";

const HomepageRouter: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<DynamicHome />} />

        <Route path="/bubbleBlaster" element={<Background />} />
        <Route path="/RGB-colorShader" element={<ColorShaderApp />} />
        <Route path="/compareYourWeather" element={<WeatherApp />} />
        <Route path="/collyblocs" element={<CollyBlocs />} />

        <Route path="/CV" element={<CV />} />

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

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
import GalleryWrapper from "../Content/GalleryApp/GalleryAppWrapper";

import CV from "../Content/About/CV";
import ContactPage from "./ContactFormPage";
import NotFound from "./NotFound";

const HomepageRouter: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<DynamicHome />} />

        <Route path="/bubbleBlaster" element={<Background />} />
        <Route path="/RGB-colorShader" element={<ColorShaderApp />} />
        <Route path="/compareYourWeather" element={<WeatherApp />} />
        <Route path="/collyblocs" element={<CollyBlocs />} />
        <Route path="/galleryApp" element={<GalleryWrapper />} />

        <Route path="/CV" element={<CV />} />
        <Route path="/Contact" element={<ContactPage />} />

        <Route path="*" element={<NotFound />} />
      </>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default HomepageRouter;

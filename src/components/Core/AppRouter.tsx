import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import DynamicHome from "../HomepageVariants/DynamicHome";

import Background from "../Content/BackgroundApp/Background";
import ColorShaderApp from "../Content/ColorShaderApp/ColorshaderApp";
import WeatherWrapper from "../Content/CompareWeatherForTravelApp/WeatherWrapper";
import CollyBlocs from "../Content/CollyBlocs/CollyBlocsWrapper";
import CollyBlocs1_2 from "../Content/CollyBlocs/CollyBlocs1.2_demo/CollyBlocs1.2Wrapper";
import SHC_Wrapper from "../Content/SHC_eco_calc/SHC_Wrapper";
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
        <Route path="/compareYourWeather" element={<WeatherWrapper />} />
        <Route path="/collyblocs" element={<CollyBlocs />} />
        <Route path="/collyblocs1.2" element={<CollyBlocs1_2 />} />
        <Route path="/SHC_eco_calc" element={<SHC_Wrapper />} />
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

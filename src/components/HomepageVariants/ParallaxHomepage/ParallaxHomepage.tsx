import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ScrollToTopButton from "../../Core/ScrollToTopButton";
import Footer from "../MinimalHomepage/Footer";
import HeroSection from "../MinimalHomepage/Content/HeroSection";
import Projects from "../MinimalHomepage/Content/Projects";
import ContentSection from "../MinimalHomepage/Content/ContentSection";
import { TechStack } from "../../Content/TechStack";

import layer0 from "./backgoundLayersParallax/layer0LightBlueSky.svg";
import layer1 from "./backgoundLayersParallax/layer1BlueMountain.svg";
import layer2 from "./backgoundLayersParallax/layer2YellowForest.svg";
import layer3 from "./backgoundLayersParallax/layer3OrangeForest.svg";
import layer4 from "./backgoundLayersParallax/layer4OccreGrasPlusTrees.svg";
import layer5 from "./backgoundLayersParallax/layer5BrownGrasPlusTree.svg";
import layer6 from "./backgoundLayersParallax/layer6ForegroundWaterMirrow.svg";
import layer7 from "./backgoundLayersParallax/layer7ForegroundGras.svg";

import { SmallCloud, BigCloud } from "./clouds/Clouds";
import { TopsoilLayer } from "./layers/TopsoilLayer";
import { EarthLayer } from "./layers/EarthLayer";
import { DeepEarthLayer } from "./layers/DeepEarthLayer";
import { CaveEntranceLayer } from "./layers/CaveEntranceLayer";
import { GemstoneCaveLayer } from "./layers/GemstoneCaveLayer";

const ParallaxHomepage: React.FC = () => {
  const parallaxRef = useRef(null);

  return (
    <div className="relative w-full min-h-screen bg-green-300">
      <Parallax pages={14} ref={parallaxRef} className="w-full">
        {/* ===== ORIGINAL SURFACE LAYER - Pages 0-1 ===== */}

        <ParallaxLayer offset={0} speed={0.1}>
          <img src={layer0} alt="Sky" className="w-full h-full object-cover" />
        </ParallaxLayer>

        {/* Cloud Layer 1 */}
        <ParallaxLayer
          className="relative w-screen h-screen overflow-hidden"
          offset={0}
          speed={0.2}
        >
          <BigCloud
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              top: "-40px",
              left: "0",
              opacity: 0.35,
              animation: "slideRight 120s linear infinite",
              animationDelay: "",
            }}
          />
          <BigCloud
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              top: "-40px",
              left: "-300px",
              opacity: 0.45,
              animation: "slideRight 83s linear infinite",
              animationDelay: "8s",
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.1}>
          <img
            src={layer1}
            alt="Mountains"
            className="w-full h-full object-cover"
          />
        </ParallaxLayer>

        {/* Cloud Layer 2 */}
        <ParallaxLayer offset={0} speed={0.25}>
          <BigCloud
            style={{
              position: "absolute",
              width: "250px",
              height: "250px",
              top: "70px",
              left: "-250px",
              opacity: 0.6,
              animation: "slideRight 65s linear infinite",
              animationDelay: "21s",
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.25}>
          <img
            src={layer2}
            alt="Forest"
            className="w-full h-full object-cover"
          />
        </ParallaxLayer>

        {/* Cloud Layer 3 */}
        <ParallaxLayer offset={0} speed={0.4}>
          <SmallCloud
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              top: "100px",
              left: "-200px",
              opacity: 0.45,
              animation: "slideRight 60s linear infinite",
              animationDelay: "4s",
            }}
          />
          <SmallCloud
            style={{
              position: "absolute",
              width: "175px",
              height: "175px",
              top: "120px",
              left: "-175px",
              opacity: 0.5,
              animation: "slideRight 57s linear infinite",
              animationDelay: "11s",
            }}
          />
          <SmallCloud
            style={{
              position: "absolute",
              width: "160px",
              height: "160px",
              top: "150px",
              left: "-160px",
              opacity: 0.6,
              animation: "slideRight 51s linear infinite",
              animationDelay: "27s",
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.4}>
          <img
            src={layer3}
            alt="Orange Forest"
            className="w-full h-full object-cover"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.45}>
          <img
            src={layer4}
            alt="Grass and Trees"
            className="w-full h-full object-cover"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}>
          <img
            src={layer5}
            alt="Brown Grass"
            className="w-full h-full object-cover"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.55}>
          <img
            src={layer6}
            alt="Water"
            className="w-full h-full object-cover"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.55}>
          <img
            src={layer7}
            alt="Foreground Grass"
            className="w-full h-full object-cover"
          />
        </ParallaxLayer>

        {/* ===== TRANSITION TO DIGGING - Topsoil Layer (Pages 1-2) ===== */}
        <ParallaxLayer
          offset={1}
          speed={0}
          className="bg-gradient-to-b from-green-300 to-yellow-700 to-40%"
        ></ParallaxLayer>

        {/* ===== DEEPER EARTH - Pages 2-4 ===== */}
        <ParallaxLayer
          offset={1.99}
          speed={0}
          className="bg-gradient-to-b from-yellow-700 to-yellow-950 to-40%"
        ></ParallaxLayer>

        {/* ===== VERY DEEP EARTH - Pages 4-6 ===== */}
        <ParallaxLayer offset={3.5} speed={0}>
          <DeepEarthLayer />
        </ParallaxLayer>

        {/* ===== CAVE ENTRANCE - Pages 6-8 ===== */}
        <ParallaxLayer offset={5.5} speed={0}>
          <CaveEntranceLayer />
        </ParallaxLayer>

        {/* Content: Transition message */}
        <ParallaxLayer
          offset={6}
          speed={0.5}
          className="flex items-center justify-center"
        >
          <div className="w-[90%] sm:w-[85%] max-w-[850px] text-center text-white">
            <p className="text-xl font-light tracking-wide">
              Entering the depths...
            </p>
          </div>
        </ParallaxLayer>

        {/* ===== GEMSTONE CAVE - Pages 8-14 ===== */}
        <ParallaxLayer offset={7} speed={0}>
          <GemstoneCaveLayer />
        </ParallaxLayer>
        {/* Additional cave content layer */}
        <ParallaxLayer
          offset={9}
          speed={0.5}
          className="flex items-center justify-center"
        >
          <div className="w-[90%] sm:w-[85%] max-w-[900px] text-center">
            <p className="text-gray-400 text-lg font-light">
              More premium content placeholders
            </p>
          </div>
        </ParallaxLayer>

        {/* Footer */}
        <ParallaxLayer offset={12.5} speed={0.5}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxHomepage;

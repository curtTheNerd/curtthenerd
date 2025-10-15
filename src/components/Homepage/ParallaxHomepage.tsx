import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import layer0 from "../../assets/backgoundLayers/layer0LightBlueSky.svg";
import layer1 from "../../assets/backgoundLayers/layer1BlueMountain.svg";
import layer2 from "../../assets/backgoundLayers/layer2YellowForest.svg";
import layer3 from "../../assets/backgoundLayers/layer3OrangeForest.svg";
import layer4 from "../../assets/backgoundLayers/layer4OccreGrasPlusTrees.svg";
import layer5 from "../../assets/backgoundLayers/layer5BrownGrasPlusTree.svg";
import layer6 from "../../assets/backgoundLayers/layer6ForegroundWaterMirrow.svg";
import layer7 from "../../assets/backgoundLayers/layer7ForegroundGras.svg";

import { SmallCloud, BigCloud } from "./Clouds";
import Content from "../Content/Content";
import Background from "../Content/ContentGridPages/DesignApps/BackgroundApp/Background";

const ParallaxHomepage: React.FC = () => {
  const parallaxRef = useRef(null);
  return (
    <div id="parallax-banner-content" className="w-screen h-screen">
      <Parallax pages={3} ref={parallaxRef}>
        <ParallaxLayer offset={0} speed={0.1}>
          <img
            src={layer0}
            alt="Layer 0"
            className="w-full h-full object-cover"
          />
        </ParallaxLayer>

        {/*                 Cloud-Layer                 !!*/}

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
            alt="Layer 1"
            className="w-full h-full object-cover"
          />
        </ParallaxLayer>

        {/*                 Cloud-Layer                 !!*/}

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
            alt="Layer 2"
            className="w-full h-full object-cover"
          />
        </ParallaxLayer>

        {/*                 Cloud-Layer                 !!*/}

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
              height: "160p",
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
            alt="Layer 3"
            className="w-full h-full object-cover"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.45}>
          <img
            src={layer4}
            alt="Layer 4"
            className="w-full h-full object-cover"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}>
          <img
            src={layer5}
            alt="Layer 5"
            className="w-full h-full object-cover"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.55}>
          <img
            src={layer6}
            alt="Layer 6"
            className="w-full h-full object-cover"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.55}>
          <img
            src={layer7}
            alt="Layer 7"
            className="w-full h-full object-cover"
          />
        </ParallaxLayer>

        <ParallaxLayer className="flex-center" offset={1} speed={0.5}>
          <Content />
        </ParallaxLayer>
        <ParallaxLayer className="flex-center" offset={2} speed={0.5}>
          <Background />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxHomepage;

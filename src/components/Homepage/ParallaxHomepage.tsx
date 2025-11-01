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

const ParallaxHomepageBanner: React.FC = () => {
  const parallaxRef = useRef(null);
  return (
    <div
      id="parallax-banner-content"
      className="relative w-screen h-screen bg-[var(--bgColor)]"
    >
      {
        //    !!    Page-Settings
      }

      <Parallax pages={2.7} ref={parallaxRef} className="z-10">
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

        <ParallaxLayer offset={0} speed={2}>
          <div id="logo" className="absolute bottom-8 left-4">
            <div className="w-[240px] h-[50px]">
              <svg viewBox="0 0 240 50" className="w-full h-full rounded-sm">
                <defs>
                  <mask id="text-mask" x="0" y="0" width="240" height="50">
                    <rect width="100%" height="100%" fill="white" />
                    <text
                      x="44%"
                      y="74%"
                      text-anchor="middle"
                      dominant-baseline="middle"
                      font-size="36"
                      font-family="sans-serif"
                      fill="black"
                    >
                      CurtTheNerd
                    </text>
                  </mask>
                </defs>

                <rect
                  width="100%"
                  height="100%"
                  fill="black"
                  mask="url(#text-mask)"
                />
              </svg>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={0}>
          <div className="w-full flex flex-col items-center justify-start">
            <Content />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxHomepageBanner;

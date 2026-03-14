import { useVariant } from "../Core/VariantContext";
import ParallaxHomepage from "./ParallaxHomepage/ParallaxHomepage";
import BentoGridHomepage from "./BentoGridHomepage/BentoGridHomepage";
import ModernMinimalistHomepage from "./ModernMinimalistHomePage/ModernMinimalistHomepage";
import MinimalHomepage from "./MinimalHomepage/MinimalHomepage";

const DynamicHome = () => {
  const { variant } = useVariant();

  switch (variant) {
    case "Parallax":
      return <ParallaxHomepage />;
    case "Modern":
      return <ModernMinimalistHomepage />;
    case "Bento":
      return <BentoGridHomepage />;
    // "Playful" still to add
    default:
      return <MinimalHomepage />;
  }
};

export default DynamicHome;

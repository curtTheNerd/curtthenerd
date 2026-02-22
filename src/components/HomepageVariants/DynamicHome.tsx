import { useVariant } from "../Core/VariantContext";
import ParallaxHomepage from "./ParallaxHomepage/ParallaxHomepage";
import BentoGridHomepage from "./BentoGridHomepage/BentoGridHomepage";
import ModernMinimalistHomepage from "./ModernMinimalistHomePage/ModernMinimalistHomepage";
import MinimalHomepage from "./MinimalHomepage/MinimalHomepage";

const DynamicHome = () => {
  const { variant } = useVariant();

  switch (variant) {
    case "parallax":
      return <ParallaxHomepage />;
    case "modern-minimal":
      return <ModernMinimalistHomepage />;
    case "bento":
      return <BentoGridHomepage />;

    default:
      return <MinimalHomepage />;
  }
};

export default DynamicHome;

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import ContentCard from "./ContentCard";

const ContentCards: React.FC = () => {
  const location = useLocation();

  // const fontStyle = { fontFamily: "Courier New" };

  // effect for the "BACK"-button to automatically scroll down to content-section on Homepage when navigating back
  useEffect(() => {
    const scrollId = location.state?.scrollToId;
    if (scrollId) {
      const element = document.getElementById(scrollId);
      if (element) {
        // short delay to ensure the site is "ready"
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div id="content-card-grid" className="flex-center w-full">
      <div className="w-full grid gap-0 p-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <ContentCard src="/ContentGrid/website-program-svgrepo-com.svg" />
        <ContentCard src="/ContentGrid/website-program-svgrepo-com.svg" />
        <ContentCard src="/ContentGrid/website-program-svgrepo-com.svg" />
        <ContentCard src="/ContentGrid/website-program-svgrepo-com.svg" />
      </div>
    </div>
  );
};

export default ContentCards;

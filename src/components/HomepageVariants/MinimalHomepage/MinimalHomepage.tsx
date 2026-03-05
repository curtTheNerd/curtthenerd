import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

import Projects from "./Content/Projects";
import ContentSection from "./Content/ContentSection";
import { TechStack } from "./TechStack";
import Footer from "./Footer";

const MinimalHomepage = () => {
  return (
    <div className="minimal-hompepage w-full md:w-[1000px] h-full min-w-[300px] min-h-screen mx-auto">
      <div className="w-full h-[5rem]">
        <Navbar />
      </div>

      <div className="w-[90%] max-w-[1000px] h-full mx-auto">
        <HeroSection />
        <div className="pt-8 pb-4">
          <Projects />
        </div>

        <ContentSection />

        <TechStack />

        <Footer />
      </div>
    </div>
  );
};

export default MinimalHomepage;

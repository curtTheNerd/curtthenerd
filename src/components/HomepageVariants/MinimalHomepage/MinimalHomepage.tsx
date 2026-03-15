import Navbar from "./Navbar";
import HeroSection from "./Content/HeroSection";
import Projects from "./Content/Projects";
import ContentSection from "./Content/ContentSection";
import { TechStack } from "../../Content/TechStack";
import Footer from "./Footer";

const MinimalHomepage = () => {
  return (
    <div className="minimal-hompepage w-[90%] sm:w-[85%] max-w-[1200px] h-full min-h-screen mx-auto">
      <div className="w-full h-[5rem]">
        <Navbar />
      </div>

      <div className="w-full md:w-[80%] max-w-[850px] mx-auto pt-24 md:pt-36 space-y-20">
        <div>
          <HeroSection />
        </div>
        <div id="Projects">
          <Projects />
        </div>
        <div>
          <ContentSection />
        </div>

        <div className="pt-12">
          <TechStack />
        </div>
      </div>
      <div className="w-[90%] max-w-[1000px] mx-auto py-8">
        <Footer />
      </div>
    </div>
  );
};

export default MinimalHomepage;

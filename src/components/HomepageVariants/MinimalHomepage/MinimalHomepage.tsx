import Navbar from "./Navbar";
import HeroSection from "./Content/HeroSection";
import Projects from "./Content/Projects";
import ContentSection from "./Content/ContentSection";
import { TechStack } from "../../Content/TechStack";
import Footer from "./Footer";

const MinimalHomepage = () => {
  return (
    <div className="minimal-hompepage w-full md:w-[1400px] h-full min-w-[300px] min-h-screen mx-auto">
      <div className="w-full h-[5rem]">
        <Navbar />
      </div>

      <div className="w-[85%] max-w-[1000px] mx-auto pt-24">
        <HeroSection />
        <div id="Projects" className="pt-8 pb-4">
          <Projects />
        </div>
        <div className="pt-8 pb-8">
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

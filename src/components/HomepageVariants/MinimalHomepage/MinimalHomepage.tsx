import Navbar from "./Navbar";
import HeroSection from "./Content/HeroSection";
import Projects from "./Content/Projects";
import ContentSection from "./Content/ContentSection";
import { TechStack } from "../../Content/TechStack";
import Footer from "./Footer";
import { IoIosArrowDown } from "react-icons/io";


const MinimalHomepage = () => {
  return (
    <div className="homepage-wrapper bg-stone-50">
      <div className="z-50 mx-auto w-[90%] sm:w-[85%] max-w-[80%] h-[6rem] sm:h-[8rem] flex items-center sticky top-0 backdrop-blur-xs">
          <Navbar />
        </div>
      <div className="minimal-hompepage w-[90%] sm:w-[85%] max-w-[1000px] h-full min-h-screen mx-auto font-cormorant-infant">
        <div id="Hero" className="relative h-[80vh] flex-center sm:hidden">
          <img src="/CurtTheNerd_cursive_main.svg" alt="logo" className="flex w-[100%] mx-auto sm:w-100 -translate-x-4 -translate-y-8"/>
          <a
            href="#HeroScript"
            aria-label="Scroll to content"
            className="absolute left-1/2 top-[90%] -translate-x-1/2 -translate-y-1/2 text-6xl text-stone-400 animate-bounce-slow sm:hidden"
          >
            <IoIosArrowDown />
          </a>
        </div>
        
        <div className="w-full pt-64 sm:pt-0 md:w-[80%] max-w-[1000px] mx-auto space-y-20">
          <div id="HeroScript" className="pt-18 sm:pt-32">
            <HeroSection />
          </div>
          <div id="Projects" className="pt-18 sm:pt-32 w-[95%] sm:w-full">
            <Projects />
          </div>
          <div className="w-[95%] sm:w-full">
            <ContentSection />
          </div>

          <div className="pt-12">
            <TechStack />
          </div>
        </div>
        <div className="w-[100%] max-w-[1200px] mx-auto py-8 mt-8">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MinimalHomepage;

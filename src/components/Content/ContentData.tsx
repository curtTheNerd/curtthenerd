import { Link } from "react-router";
import { IconGithub } from "../Core/IconLinks";

const styles = {
  title:
    "py-1 text-xl xl:text-2xl text-gray-500 font-semibold tracking-tight hover:tracking-normal underline hover:text-[var(--textColor)] group-hover:text-gray-700 transition-color duration-300",
  subtitle:
    "text-md xl:text-lg text-gray-600 group-hover:text-gray-800 transition-color duration-300",
    
    // IconLinkDefault 
    //<IconGithub  size="flex items-center text-[1.5rem] xl:text-[2rem] hover:scale-110 pr-2 xl:pr-6" color="text-gray-500 hover:text-stone-700 group-hover:text-gray-600 transition-color duration-300" link="" />
  };

const handleClick = () => {
  window.scrollTo(0, 0);
};

export const ContentData = [
  {
    title: "Probussoft.de & Probus EventPilot",
    image: "/",
    HTML_block: (
      <div className="group">
        <a
          href="https://probussoft.de/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <p className={styles.title}>Probussoft.de & Probus EventPilot</p>
        </a>
        <p className={styles.subtitle}>
          Company Website - full design and development, cross-functional team member — product development and sales for a SaaS platform
        </p>
      </div>
    ),
  },
  {
    title: "Katya-Granova.com",
    image: "/",
    HTML_block: (
      <div className="group">
        <div className="flex justify-between">
          <a
          href="https://katya-granova.com/"
          rel="noreferrer noopener"
          target="_blank"
          ><p className={styles.title}>Katya-Granova.com</p>
          </a>
          <IconGithub size="flex items-center text-[1.5rem] xl:text-[2rem] hover:scale-110 pr-2 xl:pr-6" color="text-gray-500 hover:text-stone-700 group-hover:text-gray-600 transition-color duration-300" link="https://github.com/curtTheNerd/katyaGranovadev1.2" />
        </div>
        
        <p className={styles.subtitle}>
          Artist Portfolio Website & Showroom — full custom design and development, including a bespoke gallery carousel and content management system
        </p>
      </div>
    ),
  },
  {
    title: "SCH_ecoCalc",
    image: "/",
    HTML_block: (
      <div className="group">
        <div className="flex justify-between">
          <Link to="/SHC_eco_calc" onClick={handleClick} className="flex justify-between">
            <p className={styles.title}>SHC EcoCalc [Beta]</p>  
          </Link>
          <IconGithub size="flex items-center text-[1.5rem] xl:text-[2rem] hover:scale-110 pr-2 xl:pr-6" color="text-gray-500 hover:text-stone-700 group-hover:text-gray-600 transition-color duration-300" link="https://github.com/curtTheNerd/curtthenerd/tree/gitMain/src/components/Content/SHC_eco_calc" /></div>
        
        <p className={styles.subtitle}>
          Stronghold Crusader (Video Game) Economy Calculator — reverse-engineered grid-placement & pathfinding system for calculating exact economical output by building or in total. Built to finally settle a 20+ year ongoing multiplayer meta debate with hard numbers instead of opinions. Currently just available in German!
        </p>
      </div>
    ),
  },
  {
    title: "Schaustelle-Halle.de",
    image: "/",
    HTML_block: (
      <div className="group">
        <a
          href="https://schaustelle-halle.de/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <p className={styles.title}>Schaustelle-Halle.de</p>
        </a>
        <p className={styles.subtitle}>
          Actor Collective Website — contracted for both admin management and development, including a custom WordPress plugin for a fully adjustable form and reservation manager, controlled entirely via the admin dashboard.
        </p>
      </div>
    ),
  },
  {
    title: "ColorShader",
    image: "/",
    HTML_block: (
      <div className="group">
        <div className="flex justify-between">
          <Link to="/RGB-colorShader" onClick={handleClick}>
            <p className={styles.title}>ColorShader App</p>
          </Link>
          <IconGithub  size="flex items-center text-[1.5rem] xl:text-[2rem] hover:scale-110 pr-2 xl:pr-6" color="text-gray-500 hover:text-stone-700 group-hover:text-gray-600 transition-color duration-300" link="https://github.com/curtTheNerd/curtthenerd/tree/gitMain/src/components/Content/ColorShaderApp" />
        </div>
        <p className={styles.subtitle}>
          RGB Shader App — semi-randomized palette generator, born from color-palette fatigue. Adds a nice element of surprise to every design.
        </p>
      </div>
    ),
  },
  {
    title: "WeatherApp",
    image: "/",
    HTML_block: (
      <div className="group">
        <div className="flex justify-between">    
          <Link to="/compareYourWeather" onClick={handleClick}>
            <p className={styles.title}>Multi-Stop Travel Planner</p>
          </Link>
          <IconGithub  size="flex items-center text-[1.5rem] xl:text-[2rem] hover:scale-110 pr-2 xl:pr-6" color="text-gray-500 hover:text-stone-700 group-hover:text-gray-600 transition-color duration-300" link="https://github.com/curtTheNerd/curtthenerd/tree/gitMain/src/components/Content/CompareWeatherForTravelApp" />
        </div>        
        <p className={styles.subtitle}>
          Multi-Stop Weather Travel Planner — built for my own trips, which usually hit way more than 2 destinations in a short time. I got bothered by the necessity to check local weather one by one everytime. Lets you set multiple locations plus your go-to constants at once. Simple, but genuinely useful.
        </p>
      </div>
    ),
  },
  {
    title: "Faquelage.com",
    image: "/",
    HTML_block: (
      <div className="group">
        <div className="flex justify-between">
          <a
          href="https://www.faquelage.com/"
          rel="noreferrer noopener"
          target="_blank"
          >
            <p className={styles.title}>Faquelage.com</p>
          </a>
          <IconGithub  size="flex items-center text-[1.5rem] xl:text-[2rem] hover:scale-110 pr-2 xl:pr-6" color="text-gray-500 hover:text-stone-700 group-hover:text-gray-600 transition-color duration-300" link="https://github.com/curtTheNerd/faquelage2.0" />
        </div>
        
        <p className={styles.subtitle}>
          Musician Website - full custom design & development. 2.0 version based on my first complete web project in 2023.
        </p>
      </div>
    ),
  },
  {
    title: "BubbleBlaster",
    image: "/",
    HTML_block: (
      <div className="group">
        <div className="flex justify-between">
          <Link to="/bubbleBlaster" onClick={handleClick}>
          <p className={styles.title}>BubbleBlaster</p>
        </Link>
        <IconGithub size="flex items-center text-[1.5rem] xl:text-[2rem] hover:scale-110 pr-2 xl:pr-6" color="text-gray-500 hover:text-stone-700 group-hover:text-gray-600 transition-color duration-300" link="https://github.com/curtTheNerd/curtthenerd/tree/gitMain/src/components/Content/BackgroundApp" />
        </div>
        <p className={styles.subtitle}>
          Playaround App for Background & Screensaver Use — built for my first website when I needed an easy-on-the-eyes background, powered by my own ColorShader App.
        </p>
      </div>
    ),
  },
  {
    title: "CollyBlocs0.2",
    image: "/",
    HTML_block: (
      <div className="group">
        <div className="flex justify-between">
          <Link to="/collyblocs1.2" onClick={handleClick}>
            <p className={styles.title}>CollyBlocs 0.2</p>
          </Link>
        <IconGithub  size="flex items-center text-[1.5rem] xl:text-[2rem] hover:scale-110 pr-2 xl:pr-6" color="text-gray-500 hover:text-stone-700 group-hover:text-gray-600 transition-color duration-300" link="https://github.com/curtTheNerd/curtthenerd/tree/gitMain/src/components/Content/CollyBlocs/CollyBlocs1.2_demo" />
        </div>
        <p className={styles.subtitle}>
          Early Browser Game Demo — current 0.2 Demo
        </p>
      </div>
    ),
  },
  {
    title: "CollyBlocs0.1",
    image: "/",
    HTML_block: (
      <div className="group">
        <div className="flex justify-between">
          <Link to="/collyblocs" onClick={handleClick}>
            <p className={styles.title}>CollyBlocs 0.1</p>
          </Link>
          <IconGithub  size="flex items-center text-[1.5rem] xl:text-[2rem] hover:scale-110 pr-2 xl:pr-6" color="text-gray-500 hover:text-stone-700 group-hover:text-gray-600 transition-color duration-300" link="https://github.com/curtTheNerd/curtthenerd/tree/gitMain/src/components/Content/CollyBlocs" />
        </div>
        <p className={styles.subtitle}>
          Early Browser Game Demo — architecture based on my very first learning project (vanilla JS & HTML). Currently evolving into a TypeScript-based Telegram bot and full browser game (v1.0 in development).
        </p>
      </div>
    ),
  },
];

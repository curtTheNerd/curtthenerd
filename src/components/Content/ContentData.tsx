import { Link } from "react-router";

const styles = {
  title:
    "py-1 text-xl xl:text-2xl text-gray-500 font-semibold tracking-tight hover:tracking-normal underline hover:text-[var(--textColor)] group-hover:text-gray-700 transition-color duration-300",
  subtitle:
    "text-md xl:text-lg text-gray-600 group-hover:text-gray-800 transition-color duration-300",
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
        <a
          href="https://katya-granova.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <p className={styles.title}>Katya-Granova.com</p>
        </a>
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
        <Link to="/SHC_eco_calc" onClick={handleClick}>
          <p className={styles.title}>SHC EcoCalculator</p>
        </Link>
        <p className={styles.subtitle}>
          
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
        <Link to="/RGB-colorShader" onClick={handleClick}>
          <p className={styles.title}>ColorShader App</p>
        </Link>
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
        <Link to="/compareYourWeather" onClick={handleClick}>
          <p className={styles.title}>Multi-Stop Travel Planner</p>
        </Link>
        <p className={styles.subtitle}>
          Multi-Stop Travel Planner — built for my own trips, which usually hit way more than 2 destinations in a short time. Lets you set multiple locations plus your go-to constants at once. Simple, but genuinely useful.
        </p>
      </div>
    ),
  },
  {
    title: "Faquelage.com",
    image: "/",
    HTML_block: (
      <div className="group">
        <a
          href="https://www.faquelage.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <p className={styles.title}>Faquelage.com</p>
        </a>
        <p className={styles.subtitle}>
          Musician Website - full custom design & development.
        </p>
      </div>
    ),
  },
  {
    title: "BubbleBlaster",
    image: "/",
    HTML_block: (
      <div className="group">
        <Link to="/bubbleBlaster" onClick={handleClick}>
          <p className={styles.title}>BubbleBlaster App</p>
        </Link>
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
        <Link to="/collyblocs1.2" onClick={handleClick}>
          <p className={styles.title}>CollyBlocs 0.2</p>
        </Link>
        <p className={styles.subtitle}>
          Early Browser Game Demo — current 0.2 demo"
        </p>
      </div>
    ),
  },
  {
    title: "CollyBlocs0.1",
    image: "/",
    HTML_block: (
      <div className="group">
        <Link to="/collyblocs" onClick={handleClick}>
          <p className={styles.title}>CollyBlocs 0.1</p>
        </Link>
        <p className={styles.subtitle}>
          Early Browser Game Demo — architecture based on my very first learning project (vanilla JS & HTML). Currently evolving into a TypeScript-based Telegram bot and full browser game (v1.0 in development)."
        </p>
      </div>
    ),
  },
];

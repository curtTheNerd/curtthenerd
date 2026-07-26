import { Link } from "react-router";

const styles = {
  title:
    "py-1 text-xl text-gray-500 font-semibold tracking-tight hover:tracking-normal underline hover:text-[var(--textColor)] group-hover:text-gray-700 transition-color duration-300",
  subtitle:
    "text-md text-gray-600 group-hover:text-gray-800 transition-color duration-300",
};

const handleClick = () => {
  window.scrollTo(0, 0);
};

export const ContentData = [
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
          Artist Portfolio Website and Showroom - full custom design &
          development, including unique custom gallery carousel and content
          management.
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
          Actor Collective Website - admin responsibilities and development as contractor, build a custom WordPress plugin for fully adjustable form and reservation manager controlled via admin dashboard.
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
          Playaround App for Background or as a Screensaver - for my first
          Website I was in need for an easy-for-the-eye background, so I came up
          with that utilizing my ColorShader App down below.
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
          Adjustable Shader App for RGB - I once got so annoyed by creating new
          color palettes again and again that I build my own semi-randomized
          version for RGB colors. The randomized element here delivers a nice
          touch for unique designs.
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
          <p className={styles.title}>CompareYourWeather App</p>
        </Link>
        <p className={styles.subtitle}>
          Title says it all - I like to travel, usually including way more than
          2 locations in a short time span. The App allows to set multiple
          locations (and my 3 most needed constants) at once. Simple but super
          convenient.
        </p>
      </div>
    ),
  },
  {
    title: "CollyBlocs",
    image: "/",
    HTML_block: (
      <div className="group">
        <Link to="/collyblocs" onClick={handleClick}>
          <p className={styles.title}>CollyBlocs App</p>
        </Link>
        <p className={styles.subtitle}>
          Early Browser Game Demo - this demo architecture is based on my first
          ever learning project, formerly in plain JavaScript and HTML.
          Currently in 1.0 development to be injected as TypeScript Telegram bot
          and as complete browser game. Be excited, because I am too!
        </p>
      </div>
    ),
  },
  {
    title: "Gallery",
    image: "/",
    HTML_block: (
      <div className="group">
        <Link to="/galleryApp" onClick={handleClick}>
          <p className={styles.title}>GalleryApp</p>
        </Link>
        <p className={styles.subtitle}>nice pics</p>
      </div>
    ),
  },
];

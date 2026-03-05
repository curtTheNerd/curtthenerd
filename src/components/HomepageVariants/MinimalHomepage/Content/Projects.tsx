import { Link } from "react-router";

const Projects = () => {
  const styles = {
    title:
      "py-1 text-xl text-gray-500 font-semibold tracking-tight hover:tracking-normal underline hover:text-[var(--textColor)] group-hover:text-gray-700 transition-color duration-300",
    subtitle:
      "text-md text-gray-600 group-hover:text-gray-800 transition-color duration-300",
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="content-section-projects py-4 space-y-4">
      <p className="section-title text-2xl font-semibold tracking-tighter">
        Featured Projects and Content
      </p>
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

      <div className="group">
        <a
          href="https://schaustelle-halle.de/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <p className={styles.title}>Schaustelle-Halle.de</p>
        </a>
        <p className={styles.subtitle}>
          Actor Collective Website - maintenance & bug fixing, developed a
          custom reservation form based on Wordpress plugin and essentially took
          over all admin responsibilities after the former developer abandoned
          the project.
        </p>
      </div>

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

      {/* TEMPLATE */}

      <div className="group">
        <Link to="">
          <p className={styles.title}></p>
        </Link>
        <p className={styles.subtitle}></p>
      </div>
    </div>
  );
};

export default Projects;

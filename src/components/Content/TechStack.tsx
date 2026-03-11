import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiWordpress,
  SiHtml5,
  SiCsswizardry,
  SiCss3,
  SiPostcss,
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiJest,
  SiMysql,
  SiSqlite,
  SiPostgresql,
  SiGithub,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";

export const TechStack = () => {
  const icons = [
    <SiReact title="React" aria-label="React" />,
    <SiNodedotjs title="Node.js" aria-label="Node.js" />,
    <SiJavascript title="JavaScript" aria-label="JavaScript" />,
    <SiTypescript title="TypeScript" aria-label="TypeScript" />,
    <SiPhp title="PHP" aria-label="PHP" />,
    <SiWordpress title="WordPress" aria-label="WordPress" />,
    <SiHtml5 title="HTML 5" aria-label="HTML 5" />,
    <SiCsswizardry title="CSS" aria-label="CSS" />,
    <SiCss3 title="CSS 3" aria-label="CSS 3" />,
    <BsFiletypeScss title="SCSS" aria-label="SCSS" />,
    <SiSass title="SASS" aria-label="SASS" />,
    <SiPostcss title="PostCSS" aria-label="PostCSS" />,
    <SiTailwindcss title="TailwindCSS" aria-label="TailwindCSS" />,
    <SiBootstrap title="BootStrap" aria-label="BootStrap" />,
    <SiRedux title="Redux" aria-label="Redux" />,
    <SiJest title="Jest" aria-label="Jest" />,
    <SiMysql title="MySQL" aria-label="MySQL" />,
    <SiPostgresql title="PostgreSQL" aria-label="PostgreSQL" />,
    <SiSqlite title="SQLite" aria-label="SQLite" />,
    <SiGithub title="GitHub" aria-label="GitHub" />,
    <SiGit title="git" aria-label="git" />,
    <SiFigma title="Figma" aria-label="Figma" />,
  ];

  return (
    <section className="skill-set-section w-full max-w-[500px] flex-center flex-wrap mx-auto">
      {icons.map((icon) => (
        <div className="w-[60px] aspect-square">
          <div className="text-4xl">{icon}</div>
        </div>
      ))}
    </section>
  );
};

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
  SiLaravel,
  SiDocker,
} from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { TiVendorMicrosoft } from "react-icons/ti";

export const TechStack = () => {
  const icons = [
    <SiReact title="React" aria-label="React" />,
    <SiTypescript title="TypeScript" aria-label="TypeScript" />,
    <SiJavascript title="JavaScript" aria-label="JavaScript" />,
    <SiPhp title="PHP" aria-label="PHP" />,
    <SiWordpress title="WordPress" aria-label="WordPress" />,
    <SiLaravel title="Laravel" aria-label="Laravel" />,
    <SiDocker title="Docker" aria-label="Docker" />,
    <SiNodedotjs title="Node.js" aria-label="Node.js" />,
    <SiPostgresql title="PostgreSQL" aria-label="PostgreSQL" />,
    <SiMysql title="MySQL" aria-label="MySQL" />,
    <SiSqlite title="SQLite" aria-label="SQLite" />,
    <SiHtml5 title="HTML 5" aria-label="HTML 5" />,
    <SiCsswizardry title="CSS" aria-label="CSS" />,
    <SiCss3 title="CSS 3" aria-label="CSS 3" />,
    <BsFiletypeScss title="SCSS" aria-label="SCSS" />,
    <SiSass title="SASS" aria-label="SASS" />,
    <SiPostcss title="PostCSS" aria-label="PostCSS" />,
    <SiTailwindcss title="TailwindCSS" aria-label="TailwindCSS" />,
    <SiBootstrap title="BootStrap" aria-label="BootStrap" />,
    <SiGithub title="GitHub" aria-label="GitHub" />,
    <SiGit title="git" aria-label="git" />,
    <SiRedux title="Redux" aria-label="Redux" />,
    <SiJest title="Jest" aria-label="Jest" />,
    <SiFigma title="Figma" aria-label="Figma" />,
    <TiVendorMicrosoft title="Microsoft Technologies" aria-label="Microsoft Technologies" />
  ];

  return (
    <section className="skill-set-section w-full max-w-[600px] flex-center flex-wrap mx-auto">
      {icons.map((icon) => (
        <div className="w-[60px] aspect-square">
          <div className="text-4xl">{icon}</div>
        </div>
      ))}
    </section>
  );
};

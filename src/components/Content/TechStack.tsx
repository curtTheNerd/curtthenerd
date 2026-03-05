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
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiJest,
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
    <SiTailwindcss title="TailwindCSS" aria-label="TailwindCSS" />,
    <SiBootstrap title="BootStrap" aria-label="BootStrap" />,
    <SiRedux title="Redux" aria-label="Redux" />,
    <SiJest title="Jest" aria-label="Jest" />,
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

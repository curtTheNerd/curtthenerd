import { NavLink } from "react-router";
import ThemeSwitcher from "../../Core/ThemeSwitcher";
import Footer from "./Footer";

import ContentSectionBlock from "./ContentSectionBlock";
import ContactForm from "../../Content/ContactForm";

const MinimalHomepage: React.FC = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
  ];

  const contentSection = [
    {
      header: "Featured Projects",
      content: "Projects",
    },
    {
      header: "About",
      content: "About",
    },
    { header: "History", content: "History" },
    { header: "Contact", content: <ContactForm /> },
  ];

  const styles = {
    navItem: "text-xl",
  };

  return (
    <div className="minimal-hompepage w-full md:w-[80%] h-full min-w-[300px] min-h-screen mx-auto">
      {/* Navbar */}

      <nav className="navbar-title-section flex items-center justify-between">
        <h2 className="title w-full">CurtTheNerd</h2>
        <ul className="flex-center space-x-4">
          {navItems.map((item) => (
            <NavLink to="/" key={item.name} className={styles.navItem}>
              {item.name}
            </NavLink>
          ))}

          <ThemeSwitcher />
        </ul>
      </nav>

      {/* Hero */}

      <section className="hero-section grid grid-cols-1 md:grid-cols-2">
        <div className="hero-description flex-center">Hero description</div>
        <div className="hero-image">
          <img
            src="/public/meWithStrawHatMarocco.jpg"
            alt="plain image of me"
            className="w-full max-w-[400px] h-full object-cover"
          />
        </div>
      </section>

      {/* Content */}

      <section className="content-section space-y-4">
        {contentSection.map((element) => (
          <ContentSectionBlock
            header={element.header}
            sectionContent={element.content}
          />
        ))}
      </section>

      {/* Tech Stack*/}

      <section></section>

      {/* Footer */}

      <Footer />
    </div>
  );
};

export default MinimalHomepage;

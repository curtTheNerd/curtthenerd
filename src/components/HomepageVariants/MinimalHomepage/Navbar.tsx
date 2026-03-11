import { useState } from "react";
import { NavLink } from "react-router";
import ThemeSwitcher from "../../Core/ThemeSwitcher";

const Navbar = () => {
  const [smallScreenMenuOverlay, setSmallScreenMenuOverlay] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
  ];
  return (
    <nav className="navbar-title-section w-full h-full flex items-center justify-between pl-4 pr-8">
      <div className="navbar logo pt-12 w-[12rem]">
        <img src="/public/CurtTheNerd_logo_text.webp" alt="logo" />
      </div>
      <ul className="flex-center space-x-4">
        {navItems.map((item) => (
          <NavLink to="/" key={item.name} className="text-xl hidden md:block">
            {item.name}
          </NavLink>
        ))}
        <div className="md:pl-6">
          <ThemeSwitcher />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

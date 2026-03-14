import { useState } from "react";
import { Link } from "react-router";
import ThemeSwitcher from "../../Core/ThemeSwitcher";
import MobileMenuToggle from "../../Core/MobileMenuToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { name: "Projects", link: "#Projects" },
    { name: "About", link: "#About" },
    { name: "History", link: "#History" },
    { name: "Contact", link: "#Contact" },
  ];

  return (
    <nav className="navbar-logo-section w-full h-[6rem] flex items-center justify-between pl-4 pr-8">
      {/* LOGO */}
      <Link to="/" className="navbar logo pt-6 px-2 w-[14rem]">
        <img src="/public/CurtTheNerd_logo_text.webp" alt="logo" />
      </Link>

      {/* NAV-LIST */}
      <div className="w-full flex items-center justify-end pr-5 space-x-6">
        {/* NAV_ITEMS */}
        <ul className="flex-center space-x-4">
          {navItems.map((item) => (
            <a
              href={item.link}
              key={item.name}
              className="text-xl hidden md:block"
            >
              {item.name}
            </a>
          ))}
        </ul>

        {/* THEME-SWITCHER */}
        <ThemeSwitcher
          wrapperStyle={`${menuOpen ? "pr-10" : "block"} md:pl-4`}
          buttonStyle=" cursor-pointer text-[1.15rem] px-5 py-1 border-2 border-gray-400 rounded-lg hover:text-gray-100 hover:shadow-lg hover:border-gray-200 hover:bg-gray-500 transition-all duration-300"
          foldOutWrapperStyle="mt-2 bg-white shadow-lg rounded"
          foldOutItemStyle="block px-4 py-2 w-full text-left hover:bg-gray-100"
        />

        {/* MOBILE MENU TOGGLE */}
        <MobileMenuToggle
          style={`${menuOpen ? "fixed" : ""} z-101`}
          menuOpen={menuOpen}
          handleMenuOpen={handleMenuOpen}
        />
      </div>

      {menuOpen && (
        <div
          className={`${menuOpen ? "opacity-80 z-100" : "opacity-0 -z-1"} fixed w-3/5 h-screen top-0 right-0 bg-white`}
        >
          <ul className="w-full flex flex-col pt-32 pr-12">
            {navItems.map((item) => (
              <a
                href={item.link}
                key={item.name}
                className="text-3xl text-black md:block flex justify-end hover:underline hover:tracking-wider  transition-all duration-300"
                onClick={handleMenuOpen}
              >
                {item.name}
              </a>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

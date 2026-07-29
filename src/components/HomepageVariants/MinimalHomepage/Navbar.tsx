import { useState } from "react";
// import { Link } from "react-router";
// import ThemeSwitcher from "../../Core/ThemeSwitcher";
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
    <nav className="navbar-logo-section w-full h-full flex items-center justify-between pl-4 pr-6">
      {/* NAV-LIST */}
      <div className="w-full flex items-center justify-end sm:justify-between space-x-4">
        {/* BANNER */}
        <img src="/CurtTheNerd_cursive_main.svg" alt="logo" className="hidden sm:block sm:w-75"/>
        {/* NAV_ITEMS */}
        <div>
          <ul className="flex justify-end">
          {navItems.map((item) => (
            <a
              href={item.link}
              key={item.name}
              className={`${navItems.indexOf(item) < navItems.length - 1 ? "border-r-1" : ""} px-4 border-gray-500 text-xl xl:text-2xl text-shadow-sm hidden md:block hover:underline`}
            >
              {item.name}
            </a>
          ))}
        </ul>

        {/* THEME-SWITCHER 
        <ThemeSwitcher
          wrapperStyle={`${menuOpen ? "pr-10" : "block"}`}
          buttonStyle="cursor-pointer relative text-[1.15rem] px-5 py-1 border-2 border-gray-400 rounded-lg hover:text-gray-100 hover:shadow-lg hover:border-gray-200 hover:bg-gray-500 transition-all duration-300"
          foldOutWrapperStyle="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md"
          foldOutItemStyle="block px-4 py-2 w-full text-left hover:bg-gray-100"
        />*/}

        {/* MOBILE MENU TOGGLE */}
        <MobileMenuToggle
          style={`${menuOpen ? "fixed top-7 sm:top-11 right-6" : ""} z-101`}
          menuOpen={menuOpen}
          handleMenuOpen={handleMenuOpen}
        />
        </div>
        
      </div>

      {menuOpen && (
        <div
          className={`${menuOpen ? "opacity-80 z-100" : "opacity-0 -z-1"} fixed w-5/7 h-screen top-0 right-0 bg-white`}
        >
          <ul className="w-full flex flex-col pt-32 pr-12 space-y-6">
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

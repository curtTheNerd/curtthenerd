import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 2000); // nach 2 Sekunden
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 className="absolute top-0 left-0 w-[100vw] h-12 flex items-center p-4 text-3xl backdrop-blur-xs font-bold z-900">
      CurtTheNerd
      <span
        className={`
          inline-block
          origin-top
          ${animate ? "animate-question-fall" : ""}
        `}
      >
        ?
      </span>
    </h1>
  );
};

export default Header;

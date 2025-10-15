import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 2000);  // nach 2 Sekunden
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 className="text-4xl font-bold inline-block relative">
      Was soll das!
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

export default Header
import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section flex-center grid grid-cols-1 md:grid-cols-2 py-8 mx-auto space-y-8">
      <div className="hero-description flex-center">
        This could be your advertisement!
      </div>
      <div className="hero-image">
        <img
          src="/public/meWithStrawHatMarocco.jpg"
          alt="plain image of me"
          className="w-full max-w-[400px] h-full flex object-cover mx-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;

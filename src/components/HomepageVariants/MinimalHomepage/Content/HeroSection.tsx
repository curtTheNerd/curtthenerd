const HeroSection = () => {
  return (
    <section className="hero-section w-full items-between flex flex-col md:flex-row py-8 mx-auto space-y-24 space-x-12">
      <div className="hero-description w-full flex flex-col justify-center ">
        <p className="text-4xl">CurtTheNerd</p>
        <p>
          CurtTheNerd - legal name Kurt Gatzke - is an independent software
          engineer, web developer and sales trainer, as well as a German-English
          translator and interpreter.
        </p>
      </div>
      <div className="hero-image">
        <img
          src="/public/meWithStrawHatMarocco.jpg"
          alt="plain image of me"
          className="w-full max-w-[400px] h-full flex mx-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;

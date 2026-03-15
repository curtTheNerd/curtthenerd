const HeroSection = () => {
  return (
    <section className="hero-section w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto">
      <div className="hero-description w-full sm:w-4/5 lg:w-full flex flex-col items-start justify-center p-8 md:p-0 mx-auto space-y-2">
        <p className="text-4xl sm:text-5xl tracking-tight">Kurt Gatzke</p>
        <p className="text-lg tracking-normal">
          Kurt Gatzke - Artist name CurtTheNerd - is an independent Software
          Engineer, Web Developer, Musician, Sales Trainer, and
          German-English/English-German Translator & Interpreter.
        </p>
      </div>
      <div className="hero-image relative w-4/5 h-auto mx-auto overflow-hidden">
        <img
          src="/artworks&AI_shenenigans/altered_self_portrait_01.webp"
          alt="filtered image of me"
          className="w-full max-w-[360px] mx-auto aspect-square object-cover rounded-sm"
        />
        {/*
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_70%,white_100%)]"></div>
           */}
      </div>
    </section>
  );
};

export default HeroSection;

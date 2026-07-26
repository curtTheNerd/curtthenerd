import { Link } from "react-router";

const About = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full flex py-4">
      <div className="space-y-12">
        <section>
          <p className="text-md xl:text-lg">
            Hey there — Kurt here! Welcome to my website, and thanks for taking a moment to read a bit about me. <br />
            I was born and raised on the outskirts of the medieval German "Thüringer" forest, and at some point, I decided to become the first technological wizard of my kind. Well… maybe not the first, but I like to dream big. <br /> <br />
            It took a while to find a profession that actually fit — I started as a Pharmaceutical Assistant (2010), studied Musicology and Egyptology with Computer Science as an elective at the University of Leipzig (2013–2017), worked as a Gastro Specialist and Head of Bar at the formerly well-known "Jazz Club Telegraph" in Leipzig (2013–2018), then became Team Lead and Supervisor in Construction & Assembly (2018–2023). Somewhere in there, Development and IT finally stuck — and now I'm a Software Engineer and Web Developer (2023–present). <br /> <br />
            This portfolio showcases selected projects I've built over the past 3 years — some only as demos here. Parts of my work were commercial and the code's proprietary, but I'm happy to share demos or talk details on request. <br />
            I'm self-taught, no traditional tech degree — check out my alternative certifications in my<Link to="/CV" onClick={handleScroll}>
              <span className="text-lg xl:text-xl italic px-2 underline cursor-pointer tracking-tight hover:tracking-wide transition-all duration-300">
                CV here
              </span>
            </Link>, or just browse the projects below.
            
            
          </p>
        </section>
        <section className="space-y-2">
          <p className="text-xl text-gray-700 font-semibold">
            Coding Principle
          </p>
          <p  className="pl-2 text-md xl:text-lg">
            Make it work, make it clean, make it nice. In this hierarchy.
          </p>
        </section>
        <section className="space-y-2">
          <p className="text-xl text-gray-700 font-semibold">
            Interests and other Projects
          </p>
          <p  className="pl-2 text-md xl:text-lg">
            I generally like everything that is assemblable and disassemblable in blocks and parts — like music, chemistry, languages, crocheting, gardening, and riddles. And all the other things I consider 'defaults' that most people like, for example travelling and eating good food. In my free time I have projects as a musician (composing, piano, blues harmonica) and as a crochet artist; I'm currently working out a few free crochet patterns as an ebook on my gallery blog.
            {/* <Link to="/crochet" onClick={handleScroll}>
              <span className="text-[1.1rem] italic px-2 underline cursor-pointer tracking-tight hover:tracking-wider transition-all duration-300">
                Blog here
              </span>
            </Link>*/}
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;

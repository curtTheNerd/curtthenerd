import { Link } from "react-router";

const About = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full flex py-4">
      <div className="space-y-12">
        <section>
          <p>
            Hey there — Kurt here! Welcome to my website, and thanks for taking
            a moment to read a bit about me. <br />
            I was born and raised on the outskirts of the medieval German
            "Thüringer" forest, and at some point, I decided to become the first
            technological wizard of my kind. <br />
            Well… maybe not the first, but I like to dream big. <br />
            For several years, I’ve been on a journey to find a profession that
            fits me naturally — and I finally found it in Development and IT. I
            started as a Pharmaceutical Assistant (2010), then studied
            Musicology and Egyptology with Computer Science as Elective at the
            University Leipzig (2013–2017), worked as a Gastro Specialist and
            Head of Bar at the formerly well-known "Jazz Club Telegraph" in
            Leipzig (2013–2018), and later became Team Lead and Supervisor in
            Construction & Assembly (2018–2023) before embarking on my current
            chapter as a Software Engineer and Web Developer (2023–present).{" "}
            <br />
            <br />
            This portfolio exclusively showcases selected projects I’ve
            developed over the past 3 years — some of which are only featured
            here as demos. Some of my work has been part of commercial projects,
            so while certain code is proprietary and not publicly available, I
            can share demos or discuss details on request. <br />
            I’m self-taught and driven by passion. While I don’t hold a
            traditional university degree in tech especially, you are welcome to
            check out my alternative certifications in my
            <Link to="/CV" onClick={handleScroll}>
              <span className="text-[1.1rem] italic px-2 underline cursor-pointer tracking-tight hover:tracking-wider transition-all duration-300">
                CV here
              </span>
            </Link>
            or take a look at my showcased projects.
          </p>
        </section>
        <section className="space-y-2">
          <p className="text-xl text-gray-700 font-semibold">
            Coding Principle
          </p>
          <p className="pl-2">
            Make it work, make it clean, make it nice. In this hierarchy.
          </p>
        </section>
        <section className="space-y-2">
          <p className="text-xl text-gray-700 font-semibold">Philosophy</p>
          <p className="pl-2">
            Firstly, and I can't stress this enough: stay healthy!
            <br />I already worked in so many different roles that included
            completely different requirements and hard skills that I consider
            myself an extremely solid all-rounder. Apart from the soft skills —
            which as well are not bound to just one industry — I learned the
            hard way that health is the most important. Have a balanced diet,
            work your body (if you are not into sports then regular walks and
            stretching are perfectly fine), stimulate your brain, sleep well,
            have hobbies that interest you, and rest enough.
            <br />A healthy body can enhance a healthy brain and vice versa to
            be as performant as you can possibly be.
            <br />
            <br />
            Secondly, don't be too strict with yourself! Even with overall
            healthy principles you should allow yourself to break those rules
            now and then and forfeit yourself to a sin if you feel like it. For
            example, I don't think that alcohol is a solution (well, chemically
            it is actually), but I like beer as well.
            <br />
            <br />
            Life is about balance. Cheers.
          </p>
        </section>
        <section className="space-y-2">
          <p className="text-xl text-gray-700 font-semibold">
            Interests and other Projects
          </p>
          <p className="pl-2">
            I generally like everything that is assemblable and disassemblable
            in blocks and parts like music, chemistry, languages, crocheting,
            gardening, and riddles. And all the other things that I consider as
            'defaults' that most people like, for example travelling and eating
            good food. In my free time I have projects as a musician (composing,
            piano, blues harmonica) and as a crochet instructor; currently
            publishing a few free crocheting patterns on my gallery blog.
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

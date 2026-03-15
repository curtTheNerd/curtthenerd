import { Link } from "react-router";

const About = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full flex py-4">
      <div className="flex flex-col justify-center">
        <p>
          Hey there — Kurt here! Welcome to my website, and thanks for taking a
          moment to read a bit about me. <br />
          I was born and raised on the outskirts of the medieval German
          "Thüringer" forest, and at some point, I decided to become the first
          technological wizard of my kind. <br />
          Well… maybe not the first, but I like to dream big. <br />
          For several years, I’ve been on a journey to find a profession that
          fits me naturally — and I finally found it in Development and IT. I
          started as a Pharmaceutical Assistant (2010), then studied Musicology
          and Egyptology with Computer Science as Elective at the University
          Leipzig (2013–2017), worked as a Gastro Specialist and Head of Bar at
          the formerly well-known "Jazz Club Telegraph" in Leipzig (2013–2018),
          and later became Team Lead and Supervisor in Construction & Assembly
          (2018–2023) before embarking on my current chapter as a Software
          Engineer and Web Developer (2023–present). <br />
          <br />
          This portfolio exclusively showcases selected projects I’ve developed
          over the past 3 years — some of which are only featured here as demos.
          Some of my work has been part of commercial projects, so while certain
          code is proprietary and not publicly available, I can share demos or
          discuss details on request. <br />
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
      </div>
    </div>
  );
};

export default About;

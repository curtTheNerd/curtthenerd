import BackButton from "../BackButton";
import CV from "./CV";

const About = () => {
  return (
    <div className="content-page">
      <BackButton />
      <div className="w-full grid grid-cols-1">
        <div className="flex flex-col justify-center p-8">
          <p
            className="text-[1.75rem] md:text-[2rem] pb-2"
            style={{
              fontFamily: "Courier New",
              fontStyle: "italic",
            }}
          >
            About Me
          </p>
          <p>
            Hey - Kurt here - welcome to my Website and I appreciate the time
            you spendt to even get to this About-page! <br /> Once Me - born and
            raised in the outskirts of the medival german "Thüringer"-forest -
            decided to become the first technological wizard of my kind.
            <br /> Well, just kidding...
            <br /> But I'm indeed on the chase for a profession that fits my
            natural since quite a few years, finally found it in Development and
            IT. Started as a Pharmaceutical Assisstent (in 2010), later went
            through university with the subject of Musicology (2013 - 2017),
            worked as Gastro Specialist and Head-of-Bar in the formerly well
            known Jazz-Club Telegraph-Leipzig (2013-2018) and eventually ended
            up as Team-lead in Construction & Assembly (2018 - 2023) before I
            started my new chapter as Software Developer and Translator (2023 -
            today).
            <br />
            This Portfolio Website exclusively features my own Freelance
            projects and Frontend Works over the last 1.5 years, partially just
            as demos.
            <br /> I am self-tought out of passion for the game so I don't
            pocess an impressive or fancy degree, sorry for that!
            <br />
          </p>
          <p
            className="text-[1.75rem] md:text-[2rem] pt-12 pb-28"
            style={{
              fontFamily: "Courier New",
              fontStyle: "italic",
            }}
          >
            CV down below
          </p>
        </div>
      </div>
      <CV />
    </div>
  );
};

export default About;

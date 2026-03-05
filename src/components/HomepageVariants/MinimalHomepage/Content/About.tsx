import { Link } from "react-router";

const About = () => {
  return (
    <div className="w-full flex py-4">
      <div className="flex flex-col justify-center">
        <p>
          Hey there - Kurt here - welcome to my Website and I appreciate the
          time you spent to even get to this About page! <br /> Once I - born
          and raised on the outskirts of the medieval German "Thüringer" forest
          - decided to become the first technological wizard of my kind.
          <br /> Well, just kidding...
          <br /> But I've indeed been chasing a profession for quite a few years
          now that fits me naturally - and finally found it in Development and
          IT. Started as a Pharmaceutical Assistent (in 2010), later went
          through university with the subject of Musicology (2013 - 2017),
          worked as Gastro Specialist and Head of Bar in the formerly well-known
          "Jazz Club Telegraph" (2013-2018) and eventually ended up as Team Lead
          in Construction & Assembly (2018 - 2023) before I started my new
          chapter as Software Developer (2023 to the present).
          <br />
          This Portfolio website exclusively features my own freelance projects
          and Frontend works over the last 1.5 years - some of which are just
          featured as demos here.
          <br /> I am self-taught, out of passion for the game. I don't have a
          university degree, but you will find my alternative certificates in my
          <Link to="/CV">
            <span className="text-[1.1rem] italic pl-2 cursor-pointer">
              CV here
            </span>
          </Link>
          .
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;

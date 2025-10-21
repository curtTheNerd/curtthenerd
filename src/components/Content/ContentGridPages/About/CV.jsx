import { NavLink } from "react-router";

const CV = () => {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-sans px-6 py-40 lg:px-16 xl:px-32">
      {/* Header */}
      <section className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        {/* Profile Text */}
        <div>
          <NavLink to="/">
            <h1
              className="text-4xl md:text-5xl font-mono font-light mb-4"
              style={{
                fontFamily:
                  "Courier New, GFS Gidot, Times New Roman, Helvetica, serif",
              }}
            >
              Kurt Gatzke
            </h1>
          </NavLink>
          <h2 className="text-lg md:text-xl uppercase tracking-widest text-gray-600 mb-6">
            Frontend Developer
          </h2>
          <p className="text-base leading-relaxed max-w-prose">
            I’m a Frontend Software- and Web-Developer with focus on React
            JavaScript & TypeScript; based in Leipzig, Germany. Currently
            turning one of my biggest longterm Hobbies into a career. Relatively
            fresh in the industry and hungry for more!
            <br />
            <br />
            After finishing my FrontEnd studies a while ago I am now in the
            process of studying BackEnd to eventually end up as FullStack.
            Looking for opportunities to dive deeper into the industry and to
            refine my skillset to progress faster. If that sounds right and you
            like my stuff then I'd say let's not hesitate to get in contact and
            have a talk.
          </p>
        </div>

        {/* Image */}
        <div className="flex-center w-full max-w-[90%] mx-auto bg-gray-300 rounded-md shadow-md">
          <img src="/meWithStrawHatMarocco.jpg" />
        </div>
      </section>

      {/* Contact Info */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-sm">
        <div>
          <h3 className="font-semibold uppercase text-xs tracking-widest mb-2">
            Email
          </h3>
          <p>kurt-gatzke@gatzke-granova.com</p>
        </div>
        <div>
          <h3 className="font-semibold uppercase text-xs tracking-widest mb-2">
            Website
          </h3>
          <NavLink to="/">
            <p>www.curtthenerd.dev</p>
          </NavLink>
        </div>
        <div>
          <h3 className="font-semibold uppercase text-xs tracking-widest mb-2">
            Location
          </h3>
          <p>Leipzig, Germany</p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-2xl font-serif mb-6 border-b border-gray-300 pb-2">
          Experience
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium">Frontend Developer</h3>
            <p className="text-sm text-gray-500 mb-2">12 / 2024 – Present</p>
            <ul className="list-disc list-inside text-base space-y-1">
              <li className="pb-2">Hackney Games, London / UK, remote</li>
              <li>React JavaScript & TypeScript Apps,</li>
              <li>Frontend Design</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Customer Service & App Testing
            </h3>
            <p className="text-sm text-gray-500 mb-2">08 / 2024 - 08 / 2025</p>
            <ul className="list-disc list-inside text-base space-y-1">
              <li className="pb-2">
                Rewe Digital Fulfilment Services GmbH, Leipzig, Germany
              </li>

              <li>Customer Service & Error Management,</li>
              <li>App Testing, Python 3</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">IT-Sales & Customer Service</h3>
            <p className="text-sm text-gray-500 mb-2">03 / 2024 - 07 / 2024</p>
            <ul className="list-disc list-inside text-base space-y-1">
              <li className="pb-2">IONOS, Leipzig, Germany</li>
              <li>IT-Sales around Websites, Design, Virtual Servers,</li>
              <li>Custom Design Development, Hosting and Infrastructure</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Freelance Webdeveloper & Translator
            </h3>
            <p className="text-sm text-gray-500 mb-2">05 / 2023 – Present</p>
            <ul className="list-disc list-inside text-base space-y-1">
              <li className="pb-2">
                Selfemployed, Leipzig / London, part-time
              </li>
              <li>Website & Webapp Development,</li>
              <li>JavaScript/TypeScript, Webdesign,</li>
              <li>Translator German-English and vice versa</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-2xl font-serif mb-6 border-b border-gray-300 pb-2">
          Education
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium">Selftought Developer</h3>
            <p className="text-sm text-gray-500 mb-2">
              Leipzig / London, 01/2023 - ongoing
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Projects of my own, Codecademy (FullStack Career Path),
              StackOverFlow and more
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Certificates:
              <a
                href="/Kurt Gatzke - Frontend Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.05rem] pl-4 text-gray-500 hover:underline"
              >
                FrontEnd Career-Path,
              </a>
              <a
                href="/MySQLCertificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.05rem] pl-4 text-gray-500 hover:underline"
              >
                SQL Course
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">
              BA Musicology, Elective of Computer Science
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              University of Leipzig, 2013–2017
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-serif mb-6 border-b border-gray-300 pb-2">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 text-base">
          <ul className="list-disc list-inside space-y-1">
            <li>React TypeScript & JavaScript</li>
            <li>HTML, CSS3, SCSS, SASS</li>
            <li>TailwindCSS, BootStrap</li>
            <li>mySQL, Jest, Redux</li>
          </ul>
          <ul className="list-disc list-inside space-y-1">
            <li>WordPress, PHP, Python3</li>
            <li>Languages: DE & EN, both C2</li>
            <li>Pattern Recognition & Critical Thinking</li>
            <li>Great Memory and Adaptivity</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CV;

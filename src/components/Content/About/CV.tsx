import { NavLink } from "react-router";

const CV = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="w-[95%] max-w-[1200px] min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-sans mx-auto pb-20 px-6 lg:px-16 xl:px-32">
      {/* Header */}
      <section className="grid md:grid-cols-2 gap-8 mb-16 items-center pt-16">
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
            Software Engineer & Web-Developer
          </h2>
          <p className="text-base leading-relaxed max-w-prose">
            I'm a Software Engineer and Web-Developer based in Leipzig, Germany,
            with a strong focus on Frontends using React, JavaScript, and
            TypeScript. After years of treating coding just as a passion, I now
            turned one of my biggest long-term hobbies into a career. With 3
            years of experience I'm still relatively new to the industry - and
            absolutely hungry for more.
            <br />
            <br /> After completing my Frontend studies a while ago, I'm
            currently expanding my knowlegde in Backend and Fullstack
            development as well as Databases. I'm looking for interesting new
            projects and opportunities to dive deeper into the field, sharpen my
            skills, and grow at a even faster pace. If that resonates with you
            and you like what I do, feel free to reach out - I'd be happy to
            have a conversation.
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
          <NavLink to="/contact" onClick={scrollToTop}>
            <p>curtthenerd.dev/contact</p>
          </NavLink>
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

        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-medium">
              Contract Web Developer & WebApp Consultant
            </h3>
            <p className="text-sm text-gray-500 mb-2">05 / 2023 – Present</p>
            <ul className="list-disc list-inside text-base space-y-1">
              <li className="pb-2">Selfemployed, Leipzig / London</li>
              <li>
                - React JavaScript & TypeScript, HTML 5, CSS, CSS 3, SCSS, SASS,
                TailwindCSS, WordPress, PHP, SQL, and more
              </li>
              <li>
                Specializing in WebApp and website development with React
                JavaScript and TypeScript. I design intuitive, responsive user
                interfaces, improve user experiences, connect frontends with
                backend systems, and provide technical consulting. Also
                experienced in German-English translation and localization to
                support international projects.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium pt-4">Frontend Engineer</h3>
            <p className="text-sm text-gray-500 mb-2">12 / 2024 – 12 / 2025</p>
            <ul className="list-disc list-inside text-base space-y-1">
              <li className="pb-2">Hackney Games, London , UK (remote)</li>
              <li>
                - React JavaScript & TypeScript, MUI, CSS 3, Frontend Design
              </li>
              <li>
                Frontend and component development for the Hackney Games App
                Catalog; focusing on React, implemeting and integrating new
                games content, working on the main UI design, and connecting
                user interfaces with backend databases. First experiences in
                modular game development based on Telegram chat bots.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Error Management, Customer Service & App Testing
            </h3>
            <p className="text-sm text-gray-500 mb-2">08 / 2024 - 08 / 2025</p>
            <ul className="list-disc list-inside text-base space-y-1">
              <li className="pb-2">
                Rewe Digital Fulfilment Services GmbH, Leipzig, Germany
              </li>
              <li>- App Analysis, App Testing, Python 3</li>
              <li>
                Supporting error management and customer support, mobile app
                testing, bug fixing through standard ticket workflows, and basic
                Python-based analysis to improve operational processes.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">IT-Sales & Customer Service</h3>
            <p className="text-sm text-gray-500 mb-2">03 / 2024 - 07 / 2024</p>
            <ul className="list-disc list-inside text-base space-y-1">
              <li className="pb-2">Avedo (IONOS), Leipzig, Germany</li>
              <li>
                - HTML 5, CMS, Hosting & Deployment, Infrastructure, Consulting,
                Sales
              </li>
              <li>
                IT Sales and Sales Coach (IONOS) with a strong focus of web
                hosting and infrastructure, covering website solutions, design
                services, virtual servers, custom development, and managed
                hosting environments.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Assembly Team Leader & Site Supervisor
            </h3>
            <p className="text-sm text-gray-500 mb-2">02 / 2021 – 04 / 2023</p>
            <ul className="list-disc list-inside text-base space-y-1">
              <li className="pb-2">CoMoDi GmbH, Arnstadt, Germany</li>
              <li>
                - Team-Leading, Ressource Management, Logistical Planning, Team
                Communication & Motivation
              </li>
              <li>
                I led a team of up to 10 technicians for nationwide assembly,
                disassembly, and customization of mobile container units.
                Managed project schedules, coordinated resources, and ensured
                high-quality delivery on time and within specifications.
                Developed strong team leadership, problem-solving, and
                logistical planning skills through complex, multi-site projects.
              </li>
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
            <h3 className="text-lg font-medium">Self-taught Developer</h3>
            <p className="text-sm text-gray-500 mb-2">
              Leipzig / London, 01/2023 - ongoing
            </p>
            <p className="text-[1.1rem] text-gray-800 mb-6">
              Codecademy (FullStack Career Path currently in progress), own
              projects as independent Developer, StackOverFlow and more
            </p>
            <p className="text-lg font-medium mb-2">
              Certificates:
              <a
                href="/Kurt Gatzke - Frontend Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-style"
              >
                FrontEnd Career-Path
              </a>
              <a
                href="/TypeScript Class Types.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-style"
              >
                Intermediate TypeScript: Class Types
              </a>
              <a
                href="/TypeScript Configuration.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-style"
              >
                Intermediate TypeScript: Configuration
              </a>
              <a
                href="/MySQLCertificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-style"
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
            <li>HTML 5, CSS 3, SCSS, SASS</li>
            <li>TailwindCSS, BootStrap</li>
            <li>SQL, Jest, Redux</li>
            <li>Express.js, Next.js, Node.js</li>
          </ul>
          <ul className="list-disc list-inside space-y-1">
            <li>WordPress, PHP, Python3</li>
            <li>Bilingual in German & English</li>
            <li>Fundamentals in Spanish & Polish</li>
            <li>Pattern Recognition & Critical Thinking</li>
            <li>Great Memory and Adaptivity</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CV;

import { NavLink } from "react-router";
import { useEffect, useState } from "react";

const cvImages = ["/meWithStrawHatMarocco.jpg", "/meWithDoggoInHeinz.jpg"];

const CV = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % cvImages.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-320 min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-sans mx-auto px-6 py-12 lg:py-24 lg:px-16 xl:px-32">
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
            I'm a Software Engineer and Web Developer based in Leipzig, Germany, with a strong focus on frontends using React, JavaScript, and TypeScript. After years of coding as a passion, I've turned one of my longest-running hobbies into a career. With over 3 years of professional experience, I'm still relatively new to the industry - and hungry to grow further.


            <br />
            <br /> Since completing my frontend studies, I've been expanding into backend and full-stack development with Laravel and Express.js, along with databases like PostgreSQL and MySQL, using Docker to tie it all together. I'm looking for interesting projects and opportunities to dive deeper into the field, sharpen my skills, and keep growing at pace. If that resonates with you, feel free to reach out - let's talk.
          </p>
          
        </div>

        {/* Image */}
        <div className="relative flex-center w-full aspect-2/3 max-w-[90%] mx-auto overflow-hidden">
          {cvImages.map((src, i) => (
            <img
              key={src}
              src={src}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ${
                i === activeImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Contact Info */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-sm">
        <div>
          <h3 className="font-semibold uppercase text-xs tracking-widest mb-2">
            Email
          </h3>
          <NavLink to="/contact" onClick={scrollToTop}>
            <p className="hover:underline hover:tracking-wide transition-all duration-400">curtthenerd.dev/contact</p>
          </NavLink>
        </div>
        <div>
          <h3 className="font-semibold uppercase text-xs tracking-widest mb-2">
            Website
          </h3>
          <NavLink to="/">
            <p className="hover:underline hover:tracking-wide transition-all duration-400">www.curtthenerd.dev</p>
          </NavLink>
        </div>
        <div>
          <h3 className="font-semibold uppercase text-xs tracking-widest mb-2">
            GitHub
          </h3>
          <a href="https://github.com/curtTheNerd" target="_blank" rel="noreferrer noopener">
            <p className="hover:underline hover:tracking-wide transition-all duration-400">curtTheNerd</p>
          </a>
        </div>
        
        <div>
          <h3 className="font-semibold uppercase text-xs tracking-widest mb-2">
            Location
          </h3>
          <p>Leipzig, Germany</p>
        </div>
        <a
            href="/CV - Kurt Gatzke.pdf"
            download="CV - Kurt Gatzke.pdf"
            className="inline-block w-40 mt-6 px-6 py-3 border border-gray-700 text-sm rounded-xs uppercase tracking-wide hover:bg-gray-600 hover:text-white transition-colors duration-250"
          >
            Download CV
          </a>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-2xl font-serif mb-6 border-b border-gray-300 pb-2">
          Experience
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-medium pt-4">Frontend Engineer & Sales Agent</h3>
            <p className="text-sm text-gray-500 mb-2">03 / 2026 – present</p>
            <ul className="list-disc list-inside text-base space-y-1">
              <li className="pb-2">ProbusSoft Richter eK, Erfurt, Germany (remote)</li>
              <li>
                - PHP & JavaScript, React, TailwindCSS, CSS 3, Azure, Docker, Frontend / Backend &
                  Deployment
              </li>
              <li>
                Frontend and backend work on the Probus Eventpilot app, plus website development.
                Focused on the PHP backend, implementing and deploying new website content, and
                building the UI in React. Worked across the full stack and handled Azure deployment.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium pt-4">Frontend Engineer</h3>
            <p className="text-sm text-gray-500 mb-2">12 / 2024 – 12 / 2025</p>
            <ul className="list-disc list-inside text-base space-y-1">
              <li className="pb-2">Hackney Games, London, UK (remote)</li>
              <li>
                - React JavaScript & TypeScript, MUI, CSS 3, Frontend Design
              </li>
              <li>
                Frontend and component development for the Hackney Games app catalogue. Built
                and integrated new game content in React, contributed to the main UI design, and
                connected interfaces to backend databases. Worked on modular game development
                built around Telegram chat bots.
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
                Supported error management and customer service, mobile app testing, and bug
                fixing through standard ticket workflows, with basic Python analysis to improve
                operational processes
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
                IT Sales and Sales Coach (IONOS) with a strong focus on web
                hosting and infrastructure, covering website solutions, design
                services, virtual servers, custom development, and managed
                hosting environments.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Contract Web Developer & WebApp Consultant
            </h3>
            <p className="text-sm text-gray-500 mb-2">05 / 2023 – Present</p>
            <ul className="list-disc list-inside text-base space-y-1">
              <li className="pb-2">Selfemployed, Leipzig / London</li>
              <li>
                - React, JavaScript & TypeScript, HTML 5, CSS 3, SCSS,
                TailwindCSS, Docker, Laravel, PHP, Wordpress, MySQL, postgreSQL, and more
              </li>
              <li>
                Web app and website development with React, JavaScript, and TypeScript. I build
                responsive interfaces, connect frontends to backend systems, and advise on technical
                decisions. I also handle German–English translation and localisation for international
                projects.
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-medium">
              Assembly Team Leader & Site Supervisor
            </h3>
            <p className="text-sm text-gray-500 mb-2">02 / 2020 – 04 / 2023</p>
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
              Leipzig/London, 01/2023 - ongoing
            </p>
            <p className="text-[1.1rem] text-gray-800 mb-6">
              Built up through Codecademy career paths, technical documentation, and independent projects — and expanded through professional work since 2023.
            </p>
            <p className="text-lg font-medium mb-2">
              Certificates:
              <a
                href="/certificates/Kurt Gatzke - Frontend Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-style"
              >
                FrontEnd Career-Path
              </a>
              <a
                href="/certificates/PHPCertificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-style"
              >
                PHP Course
              </a>
              <a
                href="/certificates/MySQLCertificate.pdf"
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
          <div>
            <h3 className="text-lg font-medium">
              State-certified Pharmaceutical Technician (PTA)
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              Bildungswerk für Gesundheitsberuf e.V, Erfurt/Germany, 2010–2013
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
            <li>React TypeScript / JavaScript</li>
            <li>Express.js, Next.js, Node.js</li>
            <li>PHP, Laravel, WordPress</li>
            <li>Docker, MySQL, postgreSQL</li>
            <li>Context engineering & AI-assisted development (Claude / LLMs)</li>
          </ul>
          <ul className="list-disc list-inside space-y-1">
            
            <li>HTML 5, CSS 3, SCSS, SASS</li>
            <li>TailwindCSS, BootStrap</li>
            <li>Bilingual in German & English</li>
            <li>Fundamentals in Spanish & Polish</li>
            <li>Pragmatic, focused on maintainable solutions</li>
            <li>Adaptable, quick to pick up new tools</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CV;

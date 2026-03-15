const History = () => {
  const jobs = [
    {
      company: "Hackney Games",
      role: "Frontend Engineer",
      period: "12 / 2024 – 12 / 2025",
      description:
        "Work on Frontend Development & Design for Hackney Games Catalogue.",
      mainTech: "React TypeScript, CSS 3",
    },
    {
      company: "Rewe Digital Fulfilment Services GmbH",
      role: "App Analyst",
      period: "08 / 2024 – 08 / 2025",
      description:
        "App analysis/testing and support of error management for mobile delivery app.",
      mainTech: "Python 3, JavaScript, HTML 5, CSS",
    },
    {
      company: "IONOS",
      role: "Sales Agent & IT Consultant",
      period: "03 / 2024 – 07 / 2024",
      description:
        "IT Sales and Coaching with strong focus on web hosting and infrastructure as well as website design solutions and virtual servers.",
      mainTech: "WordPress, HTML 5",
    },
    {
      company: "Selfemployed",
      role: "Contract Web Developer & WebApp Consultant",
      period: "05 / 2023 – present",
      description:
        "Custom designs and Frontend developments and apps (e.g. custom websites & inventory management) for private clients.",
      mainTech: "React JavaScript & TypeScript, HTML 5, CSS 3, TailwindCSS",
    },
  ];

  return (
    <div className="w-full mx-auto p-4">
      <div className="relative">
        {/*  vertical line  */}

        <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-400" />

        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.company} className="relative pl-12">
              {/*  horizontal break-points  */}

              <div className="absolute left-4 top-5 w-4 h-px bg-gray-400" />

              <div className="flex flex-col space-y-1">
                <p className="font-semibold text-gray-800">{job.role}</p>
                <p className="flex flex-col sm:flex-row text-gray-600 text-sm">
                  <span>{job.company} </span>
                  <span className="hidden sm:block px-2">|</span>
                  <span> {job.period}</span>
                </p>
                <p className="text-gray-500 text-sm">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;

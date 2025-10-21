import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { SlArrowLeft } from "react-icons/sl";
import CV from "./CV";

const About = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollY = location.state?.fromScrollY ?? 0;

  const handleBack = () => {
    navigate("/", { state: { scrollY } });
  };

  return (
    <div className="w-full max-w-[1440px] md:w-[90%] mx-auto">
      <button
        className="group absolute top-12 left-12 md:left-16 lg:left-24 xl:left-[10vw] cursor-pointer text-gray-700 hover:text-[var(--textColor)] text-[1.5rem]"
        onClick={handleBack}
      >
        <SlArrowLeft className="absolute left-0" />
        <SlArrowLeft className="absolute left-3" />
        <SlArrowLeft className="absolute left-6" />
        <p className="absolute text-[1.5rem] left-15 -top-[0.55rem] z-10 text-gray-700 group-hover:text-[var(--textColor)]">
          Back
        </p>
      </button>
      <CV />
    </div>
  );
};

export default About;

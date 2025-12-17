import { FaSquareGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { LiaCopyright } from "react-icons/lia";
import { SiImessage } from "react-icons/si";
import { Link } from "react-router";

const Footer: React.FC = () => {
  return (
    <div
      id="footer"
      className="relative flex-center flex-col w-screen h-[auto] pt-6 mt-2" //  border-t-1
    >
      <div className="flex-center space-x-7 pb-4">
        <a
          href="https://www.linkedin.com/in/kurt-georg-gatzke-143831350/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="cursor-pointer text-[2.4rem] text-green-950">
            <BsLinkedin />
          </div>
        </a>
        <a
          href="https://github.com/curtTheNerd"
          target="_blank"
          rel="noreferrer"
        >
          <div className="cursor-pointer text-[2.8rem] text-green-950">
            <FaSquareGithub />
          </div>
        </a>

        <Link to="/contact" id="contactForm">
          <div className="cursor-pointer text-[2.45rem] text-green-950">
            <SiImessage />
          </div>
        </Link>
      </div>
      <div className="flex-center space-x-1">
        <p className="text-[1.05rem]">2025</p>
        <div className="text-[1.5rem] text-[var(--textColor)]">
          <LiaCopyright />
        </div>
        <p className="text-[0.95rem]">CopyRight CurtTheNerd</p>
      </div>
    </div>
  );
};

export default Footer;

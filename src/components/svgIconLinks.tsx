import { FaSquareGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

export const GitHub = (size: string, color: string) => {
  return (
    <a href="https://github.com/curtTheNerd" target="_blank" rel="noreferrer">
      <div className={`cursor-pointer text-[${size}] ${color}`}>
        <FaSquareGithub />
      </div>
    </a>
  );
};

export const LinkedIn = () => {
  return (
    <a
      href="https://www.linkedin.com/in/kurt-georg-gatzke-143831350/"
      target="_blank"
      rel="noreferrer"
    >
      <div className="cursor-pointer text-[2.45rem] text-green-950">
        <BsLinkedin />
      </div>
    </a>
  );
};

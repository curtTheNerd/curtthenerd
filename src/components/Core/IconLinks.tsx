import { FaSquareGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { SiImessage } from "react-icons/si";
import { Link } from "react-router";

interface IconProps {
  size?: string;
  color?: string;
}

export const IconLinkedIn = ({
  size = "text-[2.4rem]",
  color = "text-green-950",
}: IconProps) => {
  return (
    <a
      href="https://www.linkedin.com/in/kurt-georg-gatzke-143831350/"
      target="_blank"
      rel="noreferrer noopener"
      title="LinkedIn"
      aria-label="LinkedIn"
      className={`cursor-pointer ${size} ${color}`}
    >
      <BsLinkedin />
    </a>
  );
};

export const IconGithub = ({
  size = "text-[2.8rem]",
  color = "text-green-950",
}: IconProps) => {
  return (
    <a
      href="https://github.com/curtTheNerd"
      target="_blank"
      rel="noreferrer noopener"
      title="GitHub"
      aria-label="GitHub"
      className={`cursor-pointer ${size} ${color}`}
    >
      <FaSquareGithub />
    </a>
  );
};

export const IconContact = ({
  size = "text-[2.45rem]",
  color = "text-green-950",
}: IconProps) => {
  return (
    <Link
      to="/contact"
      id="contactForm"
      title="Contact"
      aria-label="Contact"
      className={`cursor-pointer ${size} ${color}`}
    >
      <SiImessage />
    </Link>
  );
};

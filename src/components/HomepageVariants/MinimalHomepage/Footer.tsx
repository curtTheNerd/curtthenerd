import { LiaCopyright } from "react-icons/lia";
import { IconLinkedIn, IconGithub, IconContact } from "../../Core/IconLinks";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div
      id="footer"
      className="w-full flex-center flex-col pt-8 border-t-1 border-gray-500"
    >
      <div className="flex-center space-x-6 pb-5">
        <IconLinkedIn color="text-[var(--textColor)]" />
        <IconGithub color="text-[var(--textColor)]" />
        <div onClick={scrollToTop}>
          <IconContact color="text-[var(--textColor)]" />
        </div>
        
      </div>

      <p className="text-sm">Designed & build by CurtTheNerd</p>
      <div className="flex-center space-x-2">
        <div className="text-[1.25rem] text-[var(--textColor)] -translate-y-0.25">
          <LiaCopyright />
        </div>
        <p className="text-sm">2026</p>
      </div>
    </div>
  );
};

export default Footer;

{
  /*
   */
}

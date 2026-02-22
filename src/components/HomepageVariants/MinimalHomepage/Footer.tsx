// import { LiaCopyright } from "react-icons/lia";
import { IconLinkedIn, IconGithub, IconContact } from "../../Core/IconLinks";

const Footer: React.FC = () => {
  return (
    <div
      id="footer"
      className="w-full flex-center flex-col h-[auto] pt-4 pb-8" //  border-t-1
    >
      <div className="flex-center space-x-6 pb-4">
        <IconLinkedIn />
        <IconGithub />
        <IconContact />
      </div>
      <p className="text-[0.9rem]">Designed & build by CurtTheNerd</p>
    </div>
  );
};

export default Footer;

{
  /* 
      <div className="flex-center space-x-1">
        <p className="text-[1.05rem]">2025</p>
        <div className="text-[1.5rem] text-[var(--textColor)]">
          <LiaCopyright />
        </div>
        <p className="text-[0.95rem]">CopyRight CurtTheNerd</p>
      </div>*/
}

type menuProps = {
  menuOpen: boolean;
  handleMenuOpen: () => void;
  style: string;
};

const MobileMenuToggle = ({ menuOpen, handleMenuOpen, style }: menuProps) => {
  return (
    <div className={style}>
      <div
        className="w-[40px] aspect-square flex items-end justify-center md:hidden flex-col space-y-1.25 cursor-pointer"
        onClick={handleMenuOpen}
      >
        <span
          className={`${menuOpen ? "rotate-12 -translate-y-0.75" : ""} w-[30px] h-[4px] bg-black rounded-sm transition-all duration-300`}
        ></span>
        <span className="w-[30px] h-[4px] bg-black rounded-sm"></span>
        <span className="w-[30px] h-[4px] bg-black rounded-sm"></span>
      </div>
    </div>
  );
};

export default MobileMenuToggle;

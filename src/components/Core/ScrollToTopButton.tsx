import { useState, useEffect } from "react";
import { LiaArrowUpSolid } from "react-icons/lia";

interface ScrollToTopButtonProps {
  buttonStyle?: string;
  iconStyle?: string;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  buttonStyle = "fixed bottom-8 right-8 z-40 p-3 bg-white text-black rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer",
  iconStyle = "text-2xl",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className={buttonStyle}
      aria-label="Scroll to top"
    >
      <div className={iconStyle}>
        <LiaArrowUpSolid />
      </div>
    </button>
  ) : null;
};

export default ScrollToTopButton;

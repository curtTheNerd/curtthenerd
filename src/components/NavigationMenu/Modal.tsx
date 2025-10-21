import { useEffect } from "react";
import { SlArrowLeft } from "react-icons/sl";

type ModalProps = {
  isModalOpen: boolean;
  onCloseModal: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  onCloseModal,
  children,
}) => {
  // 👉 Side effects: Disable scroll & key scrolling
  useEffect(() => {
    if (isModalOpen) {
      // Disable background scroll
      document.body.style.overflow = "hidden";

      // Disable arrow keys scroll
      const handleKeyDown = (e: KeyboardEvent) => {
        if (
          ["ArrowUp", "ArrowDown", "PageUp", "PageDown", " "].includes(e.key)
        ) {
          e.preventDefault();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        // Cleanup
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[1001] bg-white bg-opacity-100 overflow-y-auto">
      <div className="min-h-screen p-6 relative">
        <button
          className="group absolute top-12 left-12 cursor-pointer text-gray-700 hover:text-[var(--textColor)] text-[2rem]"
          onClick={onCloseModal}
        >
          <SlArrowLeft className="absolute left-0" />
          <SlArrowLeft className="absolute left-4" />
          <SlArrowLeft className="absolute left-8" />
          <p className="absolute text-[2rem] left-20 -top-3 z-10 text-gray-700 group-hover:text-[var(--textColor)]">
            Back
          </p>
        </button>

        <div className="pt-24">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

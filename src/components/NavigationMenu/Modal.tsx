interface ModalProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  onCloseModal,
  children,
}) => {
  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-[rgba(142,140,152,0)]">
      <div className="bg-[rgba(249,247,241,0.9)] w-[90vw] h-[90vh] p-6 rounded-md relative overflow-auto shadow-lg">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
          onClick={onCloseModal}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

import { useState } from "react";
import Modal from "../NavigationMenu/Modal";
import DesignApps from "./ContentGridPages/DesignApps/DesignApps.jsx";
import PlayCorner from "./ContentGridPages/PlayCorner/PlayCorner.js";

//   add  and remove Navigation Elements
type ComponentType = "DesignApps" | "PlayCorner" | null;

const ContentGrid: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<ComponentType>(null);

  const handleOpenModal = (type: ComponentType) => setIsModalOpen(type);
  const handleCloseModal = () => setIsModalOpen(null);

  //  render the chosen content-component as modal-overlay
  const renderModal = () => {
    switch (isModalOpen) {
      case "DesignApps":
        return <DesignApps />;
      case "PlayCorner":
        return <PlayCorner />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="grid w-full h-[96%] grid-cols-5 grid-rows-8 sm:grid-cols-6 sm:grid-rows-7 lg:grid-cols-12 lg:grid-rows-7 gap-2 lg:gap-3 2xl:gap-3">
        <div
          id="websites"
          className="grid-item col-start-1 col-end-4 row-start-1 row-end-4 sm:col-start-1 sm:col-end-5 sm:row-start-1 sm:row-end-4 lg:col-start-4 lg:col-end-9 lg:row-start-2 lg:row-end-6"
          onClick={() => handleOpenModal(null)}
        >
          WebsiteProjects
        </div>
        <div
          id="playCorner"
          className="grid-item col-start-1 col-end-4 row-start-4 row-end-6 sm:col-start-1 sm:col-end-5 sm:row-start-4 sm:row-end-6 lg:col-start-10 lg:col-end-13 lg:row-start-4 lg:row-end-8"
          onClick={() => handleOpenModal("PlayCorner")}
        >
          PlayCorner
        </div>
        <div
          id="about"
          className="grid-item col-start-4 col-end-6 row-start-1 row-end-5 sm:col-start-5 sm:col-end-8 sm:row-start-1 sm:row-end-5 lg:col-start-7 lg:col-end-10 lg:row-start-6 lg:row-end-8"
          onClick={() => handleOpenModal(null)}
        >
          About
        </div>
        <div
          id="stylingHelpers"
          className="grid-item col-start-1 col-end-3 row-start-6 row-end-9 sm:col-start-1 sm:col-end-4 sm:row-start-6 sm:row-end-8 lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-8"
          onClick={() => handleOpenModal("DesignApps")}
        >
          DesignApps
        </div>
        <div
          id="links"
          className="grid-item col-start-3 col-end-6 row-start-6 row-end-9 sm:col-start-4 sm:col-end-7 sm:row-start-6 sm:row-end-8 lg:col-start-9 lg:col-end-13 lg:row-start-1 lg:row-end-4"
          onClick={() => handleOpenModal(null)}
        >
          Links (github/linkedIn)
        </div>

        <div
          id="free"
          className="grid-item hidden lg:block lg:col-start-4 lg:col-end-7 lg:row-start-6 lg:row-end-8"
          onClick={() => handleOpenModal(null)}
        ></div>
        <div
          id="free"
          className="grid-item hidden lg:block lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-2"
          onClick={() => handleOpenModal(null)}
        ></div>
        <div
          id="free"
          className="grid-item hidden lg:block lg:col-start-9 lg:col-end-10 lg:row-start-4 lg:row-end-6"
          onClick={() => handleOpenModal(null)}
        ></div>

        <div
          className="grid-item w-[100%]"
          onClick={() => handleOpenModal(null)}
        ></div>
        <div
          className="grid-item w-[100%]"
          onClick={() => handleOpenModal(null)}
        ></div>
      </div>

      <Modal isModalOpen={isModalOpen !== null} onCloseModal={handleCloseModal}>
        {" "}
        {renderModal()}
      </Modal>
    </>
  );
};

export default ContentGrid;

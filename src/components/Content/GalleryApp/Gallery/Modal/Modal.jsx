import { useState } from "react";
import "./modal.css";
import TransformImage from "./TransformImage";

const Modal = ({ selectedImage, closeModal, prevImage, nextImage }) => {
  // takes as arguments { first: an image-object, second: fuction(closing the modal-view), third: function(show the previous image), forth: function(show the next image)
  // returns a modal container of that image-object with text-descriptions and adjustable size and navigation functionality through buttons

  const [scaleState, setScaleState] = useState(false);
  const [cursor, setCursor] = useState("grab");

  // controlling the state for a zoom funtion that toggles max-width to 200vw/vh or 100vw/vh of the image  and  the visibility of the buttons
  const scaleHandler = () => {
    setScaleState((prev) => !prev);
  };

  const cursorGrabHandler = () => {
    setCursor((prev) => (prev === "grab" ? "grabbing" : "grab"));
  };

  return (
    <div className="modal">
      <div
        className="modalContent"
        style={{ cursor: cursor }}
        onMouseDown={cursorGrabHandler}
        onMouseUp={cursorGrabHandler}
      >
        <TransformImage selectedImage={selectedImage} scaleState={scaleState} />

        <div className="description_modal">
          <p style={{ fontStyle: "italic" }}>
            {selectedImage.id},
            <span style={{ fontStyle: "normal" }}> {selectedImage.date}</span>
          </p>
          <p>{selectedImage.method}</p>
          <p>{selectedImage.sizeCm}</p>
          <p>{selectedImage.sizeInch}</p>
        </div>

        <button
          className="close"
          onClick={closeModal}
          style={{ display: scaleState ? "none" : "" }}
        >
          &times;
        </button>
        <button
          className="prev"
          onClick={prevImage}
          style={{ display: scaleState ? "none" : "" }}
        >
          &#10094;
        </button>
        <button
          className="next"
          onClick={nextImage}
          style={{ display: scaleState ? "none" : "" }}
        >
          &#10095;
        </button>

        <button
          className="zoom"
          onClick={scaleHandler}
          style={{ cursor: scaleState ? "zoom-out" : "zoom-in" }}
        >
          {/*Zoom edited out for now*/}
        </button>
      </div>
    </div>
  );
};

export default Modal;

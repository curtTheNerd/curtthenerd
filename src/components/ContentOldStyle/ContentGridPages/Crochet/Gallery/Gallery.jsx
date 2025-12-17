import { useState, useEffect, useRef } from "react";
import "./gallery.css";
import Modal from "./Modal/Modal";

const Gallery = ({ images = [] }) => {
  // takes an array of images as objects
  //  => images = [ {id: '', src: '', method: '', size: '', date: '', title: '', link: ''} ]
  //
  // returns an image-gallery as container for presenting all the in the array included images with uniform size and hover functionality
  //
  // states for showing fullscreen modal overlay with description, forced re-render to update selectedImageRef.current, display hover-overlay on previem
  // useRefs to control navigation
  const [showModal, setShowModal] = useState(false);
  const [dummy, setDummy] = useState(false);
  const [showOverlay, setShowOverlay] = useState(null);
  const selectedImageRef = useRef(null);
  const currentIndexRef = useRef(0);

  const openModal = (image) => {
    // activates fullscreen modal overlay
    selectedImageRef.current = image;
    currentIndexRef.current = images.findIndex((img) => img.id === image.id);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  // functions for the navigation buttons in modal view
  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "";
  };

  const prevImage = () => {
    const newIndex =
      (currentIndexRef.current - 1 + images.length) % images.length;
    currentIndexRef.current = newIndex;
    selectedImageRef.current = images[newIndex];
    setDummy((prev) => !prev);
  };

  const nextImage = () => {
    const newIndex = (currentIndexRef.current + 1) % images.length;
    currentIndexRef.current = newIndex;
    selectedImageRef.current = images[newIndex];
    setDummy((prev) => !prev);
  };

  // key-eventlisteners for optional navigation in modal view
  const handleKeyEvent = (event) => {
    if (!showModal) return;
    if (event.key === "ArrowLeft") prevImage();
    if (event.key === "ArrowRight") nextImage();
    if (event.key === "Escape") closeModal();
  };

  // functions to control hover-overlay on preview conatiner
  const handleMouseOver = (id) => {
    setShowOverlay(id);
  };

  const handleMouseOut = () => {
    setShowOverlay(null);
  };

  // control key-eventlisteners
  useEffect(() => {
    window.addEventListener("keydown", handleKeyEvent);
    return () => {
      window.removeEventListener("keydown", handleKeyEvent);
    };
  }, [showModal]);

  return (
    <div>
      <div className="container preview_gallery">
        {images.map(
          (
            image // mapping all the images to a tile-based gallery
          ) => (
            <div
              key={image.id}
              className="imageContainer_gallery"
              onMouseOver={() => handleMouseOver(image.id)}
              onMouseOut={handleMouseOut}
            >
              <img
                src={image.src}
                alt={image.id}
                loading="lazy"
                onClick={() => openModal(image)}
              />
              <div
                className={`overlay_gallery ${showOverlay === image.id ? "show" : ""}`}
                onClick={() => openModal(image)}
              >
                <p>{image.id}</p>
              </div>
            </div>
          )
        )}
      </div>

      {showModal && ( // producing invisible modal overlay
        <Modal
          selectedImage={selectedImageRef.current}
          closeModal={closeModal}
          prevImage={prevImage}
          nextImage={nextImage}
        />
      )}
    </div>
  );
};

export default Gallery;

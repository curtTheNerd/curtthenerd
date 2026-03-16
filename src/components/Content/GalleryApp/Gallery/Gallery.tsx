import { useState, useEffect, useRef } from "react";
import Modal from "./Modal/Modal";

const Gallery = ({ images = [] }) => {
  // takes an array of images as objects
  // returns an image-gallery as container for presenting all the in the array included images with uniform size and hover functionality

  // states for showing fullscreen modal overlay with description, forced re-render to update selectedImageRef.current, display hover-overlay on previem
  // useRefs to control navigation
  const [showModal, setShowModal] = useState(false);
  const [dummy, setDummy] = useState(false);
  const selectedImageRef = useRef(null);
  const currentIndexRef = useRef(0);

  const openModal = (image) => {
    // activates fullscreen modal overlay
    selectedImageRef.current = image;
    currentIndexRef.current = images.findIndex((img) => img.id === image.id);
    setShowModal(true);
    document.body.style.overflow = "hidden";
    // document.body.style.overflow = "hidden" prevents rendering of second scroll bar
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

  // control key-eventlisteners
  useEffect(() => {
    window.addEventListener("keydown", handleKeyEvent);
    return () => {
      window.removeEventListener("keydown", handleKeyEvent);
    };
  }, [showModal]);

  return (
    <div className="gallery_grid_wrapper w-full flex-center flex-col">
      <div className="gallery_body w-full grid gap-4 sm:gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
        {images.map(
          (
            image, // mapping image-array to a preview gallery as grid-element inside flex-container
          ) => (
            <div
              key={image.id}
              id={image.id}
              className="group flex-center relative"
            >
              <div className="grid_element block relative w-full aspect-square sm:h-[40vh] rounded-xs overflow-hidden cursor-pointer">
                <img
                  src={image.src}
                  alt={image.id}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onClick={() => openModal(image)}
                />

                <div
                  className="absolute flex items-center justify-center w-full h-1/4 bottom-0 left-0 bg-[rgba(255,255,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease"
                  onClick={() => openModal(image)}
                >
                  <p>{image.id}</p>
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      {showModal && ( // opens gallery modal overlay with fullsize picture & description
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

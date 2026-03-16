import Gallery from "./Gallery/Gallery";
import { galleryData } from "./GalleryData";

const GalleryWrapper = () => {
  return (
    <div className="gallery-wrapper w-full flex-center flex-col mx-auto">
      <Gallery images={galleryData} />
    </div>
  );
};

export default GalleryWrapper;

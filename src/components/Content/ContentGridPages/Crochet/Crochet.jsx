import BackButton from "../BackButton";
import Gallery from "./Gallery/Gallery";

import img1 from "../../../../assets/images/catGallery/photo_2025-10-20_23-02-56.jpg";
import img2 from "../../../../assets/images/catGallery/photo_2025-10-20_23-03-33.jpg";
import img3 from "../../../../assets/images/catGallery/photo_2025-10-20_23-03-41.jpg";
import img4 from "../../../../assets/images/catGallery/photo_2025-10-20_23-04-04.jpg";
import img5 from "../../../../assets/images/catGallery/photo_2025-10-20_23-04-29.jpg";
import img6 from "../../../../assets/images/catGallery/photo_2025-10-20_23-04-32.jpg";
import img7 from "../../../../assets/images/catGallery/photo_2025-10-20_23-04-51.jpg";
import img8 from "../../../../assets/images/catGallery/photo_2025-10-20_23-05-00.jpg";
import img9 from "../../../../assets/images/catGallery/photo_2025-10-20_23-06-02.jpg";
import img10 from "../../../../assets/images/catGallery/photo_2025-10-20_23-06-13.jpg";
import img11 from "../../../../assets/images/catGallery/photo_2025-10-20_23-07-28.jpg";
import img12 from "../../../../assets/images/catGallery/photo_2025-10-20_23-07-30.jpg";

const images = [
  {
    id: "I'll kill you in your sleep",
    src: img1,
    method: "Method: Oil on canvas (nah, not really^^)",
    size: "Size: 115 x 150cm",
    date: "Date: 2024",
    title: "Little, cute animal Gallery",
  },
  {
    id: "But Pixia is as well is curious",
    src: img2,
    method: "",
    size: "",
    date: "2024",
  },
  {
    id: "Anfisa the fluffy Living-Room-Tiger",
    src: img3,
    method: "",
    size: "",
    date: "2024",
  },
  {
    id: "Random Cat in a Train",
    src: img4,
    method: "",
    size: "",
    date: "2025",
  },
  {
    id: "Agitated",
    src: img5,
    method: "",
    size: "",
    date: "2024",
  },
  {
    id: "Derpy",
    src: img6,
    method: "",
    size: "",
    date: "2024",
  },
  {
    id: "Bored",
    src: img7,
    method: "",
    size: "",
    date: "2025",
  },
  {
    id: "What do you want again?!",
    src: img8,
    method: "",
    size: "",
    date: "2025",
  },
  {
    id: "Cute but Pixelsss...",
    src: img9,
    method: "",
    size: "",
    date: "2023",
  },
  {
    id: "Doggo for a change, Frida and Frodo",
    src: img10,
    method: "Species: Dachshund, ",
    size: " Age: 2 days",
    date: "Date of Birth: 01.01.2025 (03:00)",
  },
  {
    id: "Life's hard man",
    src: img11,
    method: "",
    size: "",
    date: "2024",
  },
  {
    id: "But lucky Me being so pretty",
    src: img12,
    method: "",
    size: "",
    date: "",
  },
];

const Crochet = () => {
  return (
    <div className="content-page">
      <BackButton />
      <div className="flex flex-col justify-center p-8">
        <p
          className="text-[1.75rem] pb-2"
          style={{
            fontFamily: "Courier New",
            fontStyle: "italic",
          }}
        >
          Gallery-App
        </p>
        <p className="text-[1.1rem]">
          Originally developed for Katya-Granova.com.
          <br /> - takes an array objects (object: id, src, method, size, date)
          <br />
          - returns uniform image containers as a preview gallery with title as
          hover:overlay
          <br />
          - opens image carousel on click with full-view, description,
          scroll-zoom & grab function
          <br />
          - renders image frame with max size on screen without distortion,
          regardless of image measures
          <br />- navigation either by keys (Arrow, ESC) or overlay buttons
          <br />- full responsive for all screen sizes
        </p>
      </div>
      <h2 className="albumTitle">{images[0].title}</h2>
      <Gallery images={images} />
    </div>
  );
};

export default Crochet;

/* import React from 'react'
import Gallery from '../../../Gallery/Gallery'
import { loveForBritain as images} from '../../../02 constants/Data'

const ASongOfUnrequitedLoveForBritain = () => {
    return (
        <div>
            <h2 className="albumTitle">{images[0].title}</h2>
            <Gallery images={images} />
        </div>
    )
}

export default ASongOfUnrequitedLoveForBritain*/

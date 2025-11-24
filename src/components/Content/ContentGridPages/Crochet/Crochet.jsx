import BackButton from "../BackButton";
import Gallery from "./Gallery/Gallery";

const images = [
  {
    id: "'I'll kill you in your sleep', she says...",
    src: "/catGallery/photo_2025-10-20_23-02-56.jpg",
    method: "Method: Oil on canvas (photo realistic! ^^)",
    size: "Size: 115 x 150cm (made up)",
    date: "Date: 2025",
    title: "Little, cute animal Gallery",
  },
  {
    id: "But Pixia is sometimes just curious as well",
    src: "/catGallery/photo_2025-10-20_23-03-33.jpg",
    method: "",
    size: "",
    date: "2024",
  },
  {
    id: "Anfisa the fluffy 'Living-Room-Tiger'",
    src: "/catGallery/photo_2025-10-20_23-03-41.jpg",
    method: "",
    size: "",
    date: "2024",
  },
  {
    id: "Random Cat on a Train",
    src: "/catGallery/photo_2025-10-20_23-04-04.jpg",
    method: "",
    size: "",
    date: "2025",
  },
  {
    id: "Agitated",
    src: "/catGallery/photo_2025-10-20_23-04-29.jpg",
    method: "",
    size: "",
    date: "2024",
  },
  {
    id: "Derpy",
    src: "/catGallery/photo_2025-10-20_23-04-32.jpg",
    method: "",
    size: "",
    date: "2024",
  },
  {
    id: "Bored",
    src: "/catGallery/photo_2025-10-20_23-04-51.jpg",
    method: "",
    size: "",
    date: "2025",
  },
  {
    id: "What do you want again?!",
    src: "/catGallery/photo_2025-10-20_23-05-00.jpg",
    method: "",
    size: "",
    date: "2025",
  },
  {
    id: "Cute but lack of Pixelsss...",
    src: "/catGallery/photo_2025-10-20_23-06-02.jpg",
    method: "",
    size: "",
    date: "2023",
  },
  {
    id: "Doggo for a change, Frida and Frodo",
    src: "/catGallery/photo_2025-10-20_23-06-13.jpg",
    method: "Species: Dachshund, ",
    size: " Age: 2 days",
    date: "Date of Birth: 01.01.2025 (03:00)",
  },
  {
    id: "Life's hard man",
    src: "/catGallery/photo_2025-10-20_23-07-28.jpg",
    method: "",
    size: "",
    date: "2024",
  },
  {
    id: "But lucky Me being so pretty",
    src: "/catGallery/photo_2025-10-20_23-07-30.jpg",
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
          - takes an array objects (each including id, src and string)
          <br />
          - returns uniform image containers as a preview gallery with title as
          hover:overlay
          <br />
          - opens image carousel on click with full-view, description,
          scroll-zoom & grab functionality
          <br />
          - renders image frame with max size on screen without distortion
          <br />- navigation either by keys (Arrow, ESC) or by overlay buttons
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

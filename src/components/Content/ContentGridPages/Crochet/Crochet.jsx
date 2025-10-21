import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { SlArrowLeft } from "react-icons/sl";
import Gallery from "./Gallery/Gallery";

const images = [
  {
    id: "A Poet is thinking",
    src: "/public/catGallery/photo_2025-10-20_23-02-56.jpg",
    method: "Oil on canvas",
    size: "115 x 150cm",
    date: "2024",
    title: "Little, cute animal Gallery",
  },
  {
    id: "Freeze",
    src: "/public/catGallery/photo_2025-10-20_23-03-33.jpg",
    method: "Oil on canvas",
    size: "115 x 150cm",
    date: "2024",
  },
  {
    id: "Freeze",
    src: "/public/catGallery/photo_2025-10-20_23-03-41.jpg",
    method: "Oil on canvas",
    size: "115 x 150cm",
    date: "2024",
  },
  {
    id: "Freeze",
    src: "/public/catGallery/photo_2025-10-20_23-04-04.jpg",
    method: "Oil on canvas",
    size: "115 x 150cm",
    date: "2024",
  },
  {
    id: "Freeze",
    src: "/public/catGallery/photo_2025-10-20_23-04-29.jpg",
    method: "Oil on canvas",
    size: "115 x 150cm",
    date: "2024",
  },
  {
    id: "Freeze",
    src: "/public/catGallery/photo_2025-10-20_23-04-32.jpg",
    method: "Oil on canvas",
    size: "115 x 150cm",
    date: "2024",
  },
  {
    id: "Freeze",
    src: "/public/catGallery/photo_2025-10-20_23-04-51.jpg",
    method: "Oil on canvas",
    size: "115 x 150cm",
    date: "2024",
  },
  {
    id: "Freeze",
    src: "/public/catGallery/photo_2025-10-20_23-05-00.jpg",
    method: "Oil on canvas",
    size: "115 x 150cm",
    date: "2024",
  },
  {
    id: "Freeze",
    src: "/public/catGallery/photo_2025-10-20_23-06-02.jpg",
    method: "Oil on canvas",
    size: "115 x 150cm",
    date: "2024",
  },
  {
    id: "Freeze",
    src: "/public/catGallery/photo_2025-10-20_23-06-13.jpg",
    method: "Oil on canvas",
    size: "115 x 150cm",
    date: "2024",
  },
  {
    id: "Freeze",
    src: "/public/catGallery/photo_2025-10-20_23-07-28.jpg",
    method: "Oil on canvas",
    size: "115 x 150cm",
    date: "2024",
  },
  {
    id: "Freeze",
    src: "/public/catGallery/photo_2025-10-20_23-07-30.jpg",
    method: "Oil on canvas",
    size: "115 x 150cm",
    date: "2024",
  },
];

const Crochet = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollY = location.state?.fromScrollY ?? 0;

  const handleBack = () => {
    navigate("/", { state: { scrollY } });
  };
  return (
    <div className="w-full max-w-[1440px] md:w-[90%] mx-auto pt-32">
      <button
        className="group absolute top-12 left-12 md:left-16 lg:left-24 xl:left-[10vw] cursor-pointer text-gray-700 hover:text-[var(--textColor)] text-[1.5rem]"
        onClick={handleBack}
      >
        <SlArrowLeft className="absolute left-0" />
        <SlArrowLeft className="absolute left-3" />
        <SlArrowLeft className="absolute left-6" />
        <p className="absolute text-[1.5rem] left-15 -top-[0.55rem] z-10 text-gray-700 group-hover:text-[var(--textColor)]">
          Back
        </p>
      </button>
      <h2 className="albumTitle font-Driftwood">{images[0].title}</h2>
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

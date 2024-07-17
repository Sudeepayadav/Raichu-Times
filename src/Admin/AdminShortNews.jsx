import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

function AdminShortNews() {
  const images = [
    {
      src: "https://images.tv9kannada.com/wp-content/uploads/2024/07/neeraj-chopra.jpg?w=670&ar=16:9",
      alt: "Image 1",
      href: "#",
    },
    {
      src: "https://images.tv9kannada.com/wp-content/uploads/2024/07/carlos-alcaraz-1-2.jpg?w=670&ar=16:9",
      alt: "Image 2",
      href: "#",
    },
    {
      src: "https://images.tv9kannada.com/wp-content/uploads/2024/07/bollywood-5-1.jpg?w=670&ar=16:9",
      alt: "Image 3",
      href: "#",
    },
    {
      src: "https://images.tv9kannada.com/wp-content/uploads/2024/07/nita-mukesh-ambani.jpg",
      alt: "Image 4",
      href: "#",
    },
    {
      src: "https://images.tv9kannada.com/wp-content/uploads/2024/07/neuralink-feature-1-1.jpg",
      alt: "Image 5",
      href: "#",
    },
    {
      src: "https://images.tv9kannada.com/wp-content/uploads/2024/07/radhika-wedding.jpg",
      alt: "Image 6",
      href: "#",
    },
    {
      src: "https://images.tv9kannada.com/wp-content/uploads/2024/07/nita-mukesh-ambani.jpg",
      alt: "Image 4",
      href: "#",
    },
    {
      src: "https://images.tv9kannada.com/wp-content/uploads/2024/07/neuralink-feature-1-1.jpg",
      alt: "Image 5",
      href: "#",
    },
    {
      src: "https://images.tv9kannada.com/wp-content/uploads/2024/07/radhika-wedding.jpg",
      alt: "Image 6",
      href: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 6, images.length - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 6, 0));
  };

  const displayedImages = images.slice(currentIndex, currentIndex + 6);

  return (
    <div
      className="w-11/12 m-auto space-y-4 mb-9 z-1"
    >
      <div>
        <h1 className="text-3xl font-bold my-7">Short News</h1>
      </div>
      <div className=" flex space-x-4 overflow-x-auto">
        {currentIndex > 0 && (
          <div
            onClick={handlePrev}
            className=" left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 flex items-center justify-center h-10 w-10 rounded-full cursor-pointer z-10"
          >
            <FaAngleLeft />
          </div>
        )}
        {displayedImages.map((image, index) => (
          <div key={index}>
            <a href={image.href}>
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-xl w-60 h-80"
              />
            </a>
          </div>
        ))}
        {currentIndex + 6 < images.length && (
          <div
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 flex items-center justify-center h-10 w-10 rounded-full cursor-pointer z-10"
          >
            <FaAngleRight />
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminShortNews;

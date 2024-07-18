import React, { useState } from "react";

function ShortNews() {
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
      src: "https://images.tv9kannada.com/wp-content/uploads/2024/07/nita-mukesh-ambani.jpg?w=670&ar=16:9",
      alt: "Image 4",
      href: "#",
    },
    {
      src: "https://images.tv9kannada.com/wp-content/uploads/2024/07/neuralink-feature-1-1.jpg?w=670&ar=16:9",
      alt: "Image 5",
      href: "#",
    },
    {
      src: "https://images.tv9kannada.com/wp-content/uploads/2024/07/radhika-wedding.jpg?w=670&ar=16:9",
      alt: "Image 6",
      href: "#",
    },
    {
      src: "https://images.tv9kannada.com/wp-content/uploads/2024/07/nita-mukesh-ambani.jpg?w=670&ar=16:9",
      alt: "Image 7",
      href: "#",
    },
    {
      src: "https://images.tv9kannada.com/wp-content/uploads/2024/07/neuralink-feature-1-1.jpg?w=670&ar=16:9",
      alt: "Image 8",
      href: "#",
    },
    {
      src: "https://images.tv9kannada.com/wp-content/uploads/2024/07/radhika-wedding.jpg?w=670&ar=16:9",
      alt: "Image 9",
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
    <div className="w-11/12 m-auto space-y-4 mb-9 z-1">
      <div>
        <h1 className="text-3xl font-bold my-7">Short News</h1>
      </div>
      <div className="flex flex-wrap md:flex-nowrap md:overflow-x-auto space-x-4 space-y-4 justify-start">
        {displayedImages.map((image, index) => (
          <div key={index} className="flex-none w-full md:w-60">
            <a href={image.href}>
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-xl w-full h-90 md:h-90 object-cover"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShortNews;

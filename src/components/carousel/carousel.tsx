"use client";
import React, { useState, useEffect } from "react";

const AutoplayCarousel = () => {
  const images = [
    "/images/couple1.png",
    "/images/couple2.png",
    "/images/couple3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="py-[40px] bg-[#335C72]/20 flex flex-col justify-center items-center lg:hidden">
      <h3
        className={`text-[#335C72]  uppercase tracking-[0.1em] text-[24px] italic font-medium text-center mb-5 flex`}
      >
        &quot;Where Our Story Began...❤️ &quot;
      </h3>
      <div className="relative w-[300px] h-[400px] max-w-6xl mx-auto">
        {/* Main Carousel */}
        <div className="relative h-full overflow-hidden rounded-2xl">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-1000 ease-in-out
              ${
                index === currentIndex
                  ? "opacity-100 translate-x-0"
                  : index === (currentIndex - 1 + images.length) % images.length
                  ? "opacity-0 -translate-x-full"
                  : index === (currentIndex + 1) % images.length
                  ? "opacity-0 translate-x-full"
                  : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Optional Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-500 rounded-full
              ${
                currentIndex === index
                  ? "w-4 h-2 bg-white"
                  : "w-2 h-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoplayCarousel;

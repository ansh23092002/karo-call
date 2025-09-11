"use client";
import React, { useEffect, useState } from "react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";

const Carousel = () => {
  const PostersImages = [
    {
      id: 1,
      Dtsrc: "/image/Banner/AcRepair.png",
      mbsrc: "/image/Banner/AcRepair.png",
    },
    {
      id: 2,
      Dtsrc: "/image/Banner/CARservices.png",
      mbsrc: "/image/Banner/CARservices.png",
    },
    {
      id: 3,
      Dtsrc: "/image/Banner/ElectricServices.png",
      mbsrc: "/image/Banner/ElectricServices.png",
    },
    {
      id: 4,
      Dtsrc: "/image/Banner/HomeAppliances.png",
      mbsrc: "/image/Banner/HomeAppliances.png",
    },
    {
      id: 5,
      Dtsrc: "/image/Banner/smartSecurity.png",
      mbsrc: "/image/Banner/smartSecurity.png",
    },
  ];

  const [current, setCurrent] = useState(0);
  const autoplay = true;
  const autoSlideInterval = 4000; // 4s
  const [isMobile, setIsMobile] = useState(false);

  // ✅ check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // ✅ autoplay
  useEffect(() => {
    if (!autoplay) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === PostersImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? PostersImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative h-screen   overflow-hidden">
      {/* Slides */}
      {PostersImages.map((item, index) => (
        <img
          key={index}
          src={isMobile ? item.mbsrc : item.Dtsrc}
          className={`absolute top-0 left-0 h-full object-fill transition-opacity duration-700 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          alt={`Slide ${index + 1}`}
        />
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          className="bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
          onClick={prevSlide}
        >
          <FaLessThan size={18} />
        </button>
        <button
          className="bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
          onClick={nextSlide}
        >
          <FaGreaterThan size={18} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {PostersImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === i ? "bg-white scale-125" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

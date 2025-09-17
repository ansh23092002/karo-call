import React, { useEffect, useState } from "react";
import Imgae from "next/image";

const Carousel = () => {
  const PostersImages = [
    {
      id: 1,
      Dtsrc: "/image/Banner/AcRepair.webp",
      mbsrc: "/image/Banner/AcRepair.webp",
    },
    {
      id: 2,
      Dtsrc: "/image/Banner/CARservices.webp",
      mbsrc: "/image/Banner/CARservices.webp",
    },
    {
      id: 3,
      Dtsrc: "/image/Banner/ElectricServices.webp",
      mbsrc: "/image/Banner/ElectricServices.webp",
    },
    {
      id: 4,
      Dtsrc: "/image/Banner/HomeAppliances.webp",
      mbsrc: "/image/Banner/HomeAppliances.webp",
    },
    {
      id: 5,
      Dtsrc: "/image/Banner/smartSecurity.webp",
      mbsrc: "/image/Banner/smartSecurity.webp",
    },
  ];

  const [current, setCurrent] = useState(0);
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

  // Autoplay
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === PostersImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? PostersImages.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-screen max-sm:h-60   overflow-hidden">
      {/* Slides */}
      {PostersImages.map((item, index) => (
        <Imgae
          key={index}
          width={1920}
          height={600}
            
          src={isMobile ? item.mbsrc : item.Dtsrc}
          className={`absolute top-0 left-0 h-full object-fill transition-opacity duration-700 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          alt={`Slide ${index + 1}`}
        />
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {PostersImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
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

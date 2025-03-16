import React, { useState, useEffect } from 'react';

const HeroSlide = () => {
  const backgroundImages = [
    'src/assets/herobanner.jpg',
    'src/assets/herobanner2.jpg',
    'src/assets/herobanner3.jpg',
    'src/assets/herobanner4.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [backgroundImages.length]);

  return (
    <section
      className="relative h-[80vh] bg-cover bg-center lg:bg-center md:bg-center bg-no-repeat flex items-center justify-center text-white transition-all duration-1000"
      style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          MIAAAAAAAAAAAAAAM MA MIA
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl">
          miam miam miam
        </p>
      </div>
    </section>
  );
};

export default HeroSlide;
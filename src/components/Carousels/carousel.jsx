import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = () => {
  const backgroundImages = [
    {
      url: 'src/assets/menu1.webp',
      text: 'Texte pour herobanner1',
    },
    {
      url: 'src/assets/menu2.webp',
      text: 'Texte pour herobanner2',
    },
    {
      url: 'src/assets/menu3.webp',
      text: 'Texte pour herobanner3',
    },
    {
      url: 'src/assets/menu2.webp',
      text: 'Texte pour herobanner4',
    },
  ];

  return (
    <div className="relative h-[80vh]">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        swipeable={true}
        dynamicHeight={false}


      >
        {backgroundImages.map((image, index) => (
          <div key={index} className="relative h-[80vh]">
            <div
              className="absolute inset-0 bg-cover bg-center lg:bg-center md:bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image.url})` }}
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {image.text}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          MIAAAAAAAAAAAAAAM MA MIA
        </h1>
      </div>
    </div>
  );
};

export default CarouselComponent;
import React from 'react';

const Herov = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {/* Vidéo en boucle */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video3.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge les vidéos HTML5.
      </video>

      {/* Superposition sombre */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenu textuel */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          Trouvez la voiture de vos rêves
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl">
          Large sélection d'Autos d'occasion et neufs.
        </p>
      </div>
    </section>
  );
};

export default Herov;
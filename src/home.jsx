// src/Home.tsx

import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Section d'introduction */}
      <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white" style={{ backgroundImage: 'url(/car-banner.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Trouvez la voiture de vos rêves
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl">
            Large sélection de véhicules d'occasion et neufs.
          </p>
        </div>
      </section>

      {/* Section des voitures en vedette */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Voitures en vedette</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Exemple de carte de voiture */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/car1.jpg" alt="Voiture 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Modèle de voiture 1</h3>
              <p className="text-gray-600">Année, kilométrage, prix...</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Voir les détails
              </button>
            </div>
          </div>
          {/* Ajoutez d'autres cartes de voiture ici */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/car2.jpg" alt="Voiture 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Modèle de voiture 2</h3>
              <p className="text-gray-600">Année, kilométrage, prix...</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Voir les détails
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/car3.jpg" alt="Voiture 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Modèle de voiture 3</h3>
              <p className="text-gray-600">Année, kilométrage, prix...</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Voir les détails
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section de contact */}
      <section className="bg-gray-200 py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Contactez-nous</h2>
        <div className="text-center">
          <p>Adresse : 123 Rue de la Voiture, Ville</p>
          <p>Téléphone : 01 23 45 67 89</p>
          <p>Email : contact@garage.com</p>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Garage Automobile. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Home;

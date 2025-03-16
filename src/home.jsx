// src/Home.tsx

import React from 'react';
import BestCards from './components/Cards/BestCards';
import Hero from './components/Heros/Hero';
import Herov from './components/Heros/Herov';
import BestCards2 from './components/Cards/BestCard2';
import HeroSlide from './components/Heros/HeroSlide';
import Thero from './components/Heros/Thero';
import Slider from './components/Heros/Slider';
import CarouselComponent from './components/Carousels/carousel';
import { SignedIn } from '@clerk/clerk-react';
import Zero from './components/test/zero';
import HeroUi1 from './components/test/HeroUi1';
import SectionUi1 from './components/test/SectionUi1';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Section d'introduction */}
      <SignedIn><Thero /></SignedIn>
      <HeroUi1 />
      <SectionUi1 />
      <Zero />
      <BestCards2 />
      <Hero />
      <BestCards2 />
      <CarouselComponent />
      <BestCards2 />
      <Herov />
      <BestCards2 />
      <HeroSlide />
      <BestCards2 />
      <Slider />
      
      {/* Section des voitures en vedette */}
      
      {/* <Slider /> */}
      

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

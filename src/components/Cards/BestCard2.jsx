import React from 'react';

const BestCards2 = () => {
  const cardsData = [
    {
      image: '/src/assets/dish1.jpg',
      title: 'Modèle de voiture 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus praesentium vel expedita quos odit quo illum eligendi ipsum, officia beatae reiciendis amet molestias id! Quaerat sit consequuntur itaque eos est! Ut libero pariatur veniam nihil fuga quae, rerum eligendi rem optio consectetur ea debitis mollitia non quasi repellat, et dolore, sunt tempore eos est cupiditate. In excepturi debitis non nihil.',
    },
    {
      image: '/src/assets/dish2.jpg',
      title: 'Modèle de voiture 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta velit ipsam accusamus itaque natus molestias, vitae cum nihil praesentium expedita distinctio odio numquam. Debitis odio praesentium, ipsum eum quaerat eos.',
    },
    {
      image: '/src/assets/dish3.jpg',
      title: 'Modèle de voiture 3',
      description: 'Année, kilométrage, prix...',
    },
    {
      image: '/src/assets/item1.jpg',
      title: 'Modèle de voiture 4',
      description: 'Année, kilométrage, prix...',
    },
    {
      image: '/src/assets/item2.jpg',
      title: 'Modèle de voiture 5',
      description: 'Année, kilométrage, prix...',
    },
    {
      image: '/src/assets/item3.jpg',
      title: 'Modèle de voiture 6',
      description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum lorem',
    },
  ];

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Nos Plats Vedette</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 flex-grow">{card.description}</p>
              <div className="flex justify-end mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Voir les détails
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestCards2;
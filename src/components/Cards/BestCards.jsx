import React from 'react'

const BestCards = () => {
  return (
    <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Nos Plats Vedette</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Exemple de carte de voiture */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/src/assets/dish1.jpg" alt="Voiture 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Modèle de voiture 1</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus praesentium vel expedita quos odit quo illum eligendi ipsum, officia beatae reiciendis amet molestias id! Quaerat sit consequuntur itaque eos est!
              Ut libero pariatur veniam nihil fuga quae, rerum eligendi rem optio consectetur ea debitis mollitia non quasi repellat, et dolore, sunt tempore eos est cupiditate. In excepturi debitis non nihil.</p>
              <div className='flex justify-end items-center'>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Voir les détails
              </button>
              </div>
            </div>
          </div>
          {/* Ajoutez d'autres cartes de voiture ici */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/src/assets/dish2.jpg" alt="Voiture 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Modèle de voiture 2</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta velit ipsam accusamus itaque natus molestias, vitae cum nihil praesentium expedita distinctio odio numquam. Debitis odio praesentium, ipsum eum quaerat eos.</p>
              <div className='flex justify-end items-center'>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Voir les détails
              </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/src/assets/dish3.jpg" alt="Voiture 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Modèle de voiture 3</h3>
              <p className="text-gray-600">Année, kilométrage, prix...</p>
              <div className='flex justify-end items-center'>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Voir les détails
              </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/src/assets/item1.jpg" alt="Voiture 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Modèle de voiture 4</h3>
              <p className="text-gray-600">Année, kilométrage, prix...</p>
              <div className='flex justify-end items-center'>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Voir les détails
              </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/src/assets/item2.jpg" alt="Voiture 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Modèle de voiture 5</h3>
              <p className="text-gray-600">Année, kilométrage, prix...</p>
              <div className="justify-between items-center">
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Voir les détails
              </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/src/assets/item3.jpg" alt="Voiture 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Modèle de voiture 6</h3>
              <p className="text-gray-600">lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum lorem
              </p>
              <div className='flex justify-end items-end'>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Voir les détails
              </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BestCards

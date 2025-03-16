import React from 'react'

const Hero = () => {
  return (


     <section className="relative h-[80vh] bg-cover bg-center lg:bg-center md:bg-center bg-no-repeat flex items-center justify-center text-white" style={{ backgroundImage: 'url(src/assets/herobanner4.jpg)' }}>
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

  )
}

export default Hero

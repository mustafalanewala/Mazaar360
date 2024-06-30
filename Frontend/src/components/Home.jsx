import React from 'react'

function Home() {
  return (
    <>
     <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('./assets/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
          Your Heading Here
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Your paragraph text goes here. It can be a brief description or call to action.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg md:text-xl hover:bg-blue-700 transition duration-300">
          Your Button Text
        </button>
      </div>
    </div>
    </>
  )
}

export default Home
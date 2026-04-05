import React from 'react'

const Home = () => {
  return (
  <div className="max-w-5xl mx-auto mt-10 px-6 py-12 
    bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 text-center">

    {/* Heading */}
    <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
      Welcome to AstroApp 🚀
    </h1>

    {/* Description */}
    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
      Explore the universe, discover amazing space images, and navigate through courses and content designed to expand your knowledge.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-wrap justify-center gap-4">
      <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-md hover:scale-105 transition" onClick={() => window.location.href = '/apotd'}>
        Explore APOD
      </button>

      <button className="px-6 py-3 bg-white/10 text-gray-200 rounded-xl border border-white/10 hover:bg-white/20 transition" onClick={()=> window.location.href='/courses'} >
        View Courses
      </button>
    </div>

  </div>
)
}

export default Home
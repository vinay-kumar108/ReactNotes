import React from 'react'

const Extra = () => {
  return (
  <div className="max-w-5xl mx-auto mt-10 px-6 py-10 
    bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10">

    {/* Heading */}
    <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
      Extra Courses
    </h1>

    {/* Description */}
    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
      Explore our collection of creative and skill-based courses designed beyond academics.
    </p>

    {/* Course List */}
    <ul className="grid sm:grid-cols-2 gap-4">
      {["Photography", "Cooking", "Music", "Art"].map((course, index) => (
        <li
          key={index}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 
          hover:bg-white/10 hover:text-yellow-400 transition duration-300 cursor-pointer"
        >
          {course}
        </li>
      ))}
    </ul>

  </div>
)
}

export default Extra
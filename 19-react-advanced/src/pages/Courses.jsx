import React from 'react'

import { Link , Outlet} from 'react-router-dom'
const Courses = () => {
  return (
  <div className="max-w-6xl mx-auto mt-10 px-6 py-10 
    bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10">

    {/* Heading */}
    <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
      Courses
    </h1>

    {/* Description */}
    <p className="text-gray-300 text-lg mb-8">
      Explore different categories of courses and expand your knowledge.
    </p>

    {/* Navigation Links */}
    <div className="flex flex-wrap gap-4 mb-8">
      <Link
        to="/courses/academics"
        className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 
        text-gray-300 hover:bg-white/10 hover:text-yellow-400 transition"
      >
        Academics
      </Link>

      <Link
        to="/courses/extra"
        className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 
        text-gray-300 hover:bg-white/10 hover:text-yellow-400 transition"
      >
        Extra
      </Link>
    </div>

    {/* Nested Content */}
    <div className="bg-black/30 border border-white/10 rounded-xl p-6">
      <Outlet />
    </div>

  </div>
)
}

export default Courses
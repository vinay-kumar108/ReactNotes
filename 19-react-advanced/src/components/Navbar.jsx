import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-yellow-400 tracking-wide">
          AstroApp 🚀
        </h1>

        {/* Links */}
        <div className="flex gap-6 text-lg font-medium">
          <Link className="hover:text-yellow-400 transition duration-300" to="/">Home</Link>
          <Link className="hover:text-yellow-400 transition duration-300" to="/courses">Courses</Link>
          <Link className="hover:text-yellow-400 transition duration-300" to="/apotd">APOD</Link>
          <Link className="hover:text-yellow-400 transition duration-300" to="/about">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'

const Footer = () => {
  return (
  <footer className="bg-black/40 border-t border-white/10 mt-10">
    
    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row 
      items-center justify-between gap-4 text-sm text-gray-400">

      {/* Left */}
      <p>
        © 2026 <span className="text-yellow-400 font-medium">AstroApp</span>. All rights reserved.
      </p>

      {/* Right Links */}
      <div className="flex gap-6">
        <span className="hover:text-yellow-400 transition cursor-pointer">
          Privacy
        </span>
        <span className="hover:text-yellow-400 transition cursor-pointer">
          Terms
        </span>
        <span className="hover:text-yellow-400 transition cursor-pointer">
          Contact
        </span>
      </div>

    </div>
  </footer>
)
}

export default Footer
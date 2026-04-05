import React from 'react'

const About = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 px-6 py-10 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10">

      <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
        About Us
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed">
        Welcome to our About page! Here you can learn more about our company and its mission.
      </p>
      <p className="text-gray-400 mt-4">
        We aim to build modern, scalable, and user-friendly web experiences.
      </p>
    </div>
  )
}

export default About
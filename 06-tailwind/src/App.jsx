import React from 'react'

const App = () => {
  const jobs = [
    {
      role: "Frontend Developer",
      company: "Google",
      location: "Remote"
    },
    {
      role: "Backend Developer",
      company: "Amazon",
      location: "Delhi"
    },
    {
      role: "Full Stack Developer",
      company: "Microsoft",
      location: "Bangalore"
    }
  ]
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-10">
        Tailwind Job Board
      </h1>

      {/* Cards Container */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >

            <h2 className="text-xl font-semibold mb-2">
              {job.role}
            </h2>

            <p className="text-gray-500 mb-4">
              {job.company} • {job.location}
            </p>

            <button className="bg-blue-500 hover:bg-pink-800 text-white px-4 py-2 rounded-lg">
              Apply Now
            </button>

          </div>
        ))}

      </div>

    </div>
  )
}

export default App
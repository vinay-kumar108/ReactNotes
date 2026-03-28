import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      

      <div className='routes'><Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes></div>

    </>
  )
}

export default App
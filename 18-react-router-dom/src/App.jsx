import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 page */}
        <Route path="*" element={
          <div>
            <p style={{
              lineHeight: "64px",
              fontSize: "64px",
              fontWeight: "600"
            }} >404</p>
            <h1>Page Not Found</h1>
          </div>

        } />
      </Routes >
    </BrowserRouter>  
  )
}

export default App
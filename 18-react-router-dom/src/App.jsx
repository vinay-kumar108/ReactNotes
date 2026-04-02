import React from 'react'
import { BrowserRouter, Link ,Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Photo from './pages/Photo.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/photo' element={<Photo />} />

        {/* 404 page */}
        <Route path="*" element={
          <div>
            <p style={{
              lineHeight: "64px",
              fontSize: "64px",
              fontWeight: "600"
            }} >404</p>
            <h1>Page Not Found</h1>
            <button style={{ top:"80%", left:"50%" , position:"absolute" ,height:"50px", width:"100px", backgroundColor: "lightgray", border: "none", borderRadius: "10px"}} ><Link style={{textDecoration: "none" }} to='/'>Return To Home</Link></button>
          </div>

        } />
      </Routes >
    </BrowserRouter>  
  )
}

export default App
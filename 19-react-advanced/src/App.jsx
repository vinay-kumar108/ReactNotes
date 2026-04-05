import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import APOTD from './pages/APOTD.jsx'
import ApotdDetails from './pages/ApotdDetails.jsx'
import Courses from './pages/Courses.jsx'
import Academics from './pages/Academic.jsx'
import Extra from './pages/Extra.jsx'
import Footer from './components/Footer.jsx'  
import NotFound from './pages/NotFound.jsx'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-950 text-white">
        
        {/* Top Navigation */}
        <Navbar />
        

        {/* Main Content */}
        <main className="flex-grow px-4 md:px-10 py-6">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/apotd' element={<APOTD />} />
            <Route path='/apotd/:date' element={<ApotdDetails />} />
            
            <Route path='/courses' element={<Courses />} >
              <Route path='academics' element={<Academics />} />
              <Route path='extra' element={<Extra />} />
            </Route>

            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>


     
    </>
  )
}

export default App

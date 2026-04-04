import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import NavPanel from './components/NavPanel.jsx'
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
      <Navbar />
      <NavPanel />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/apotd' element={<APOTD />} />
          <Route path='/apotd/:date' element={<ApotdDetails />} ></Route> {/* dynamic route with parameter */}
          <Route path='/courses' element={<Courses />} >
            <Route path='academics' element={<Academics />} /> {/* nested route */}
            <Route path='extra' element={<Extra />} />

          </Route>
          <Route path='*' element={<NotFound />} /> {/* catch all route for 404 */}



        </Routes>
      </BrowserRouter>


      <Footer />
    </>
  )
}

export default App
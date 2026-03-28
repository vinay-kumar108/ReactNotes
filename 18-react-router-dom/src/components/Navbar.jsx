import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{ display: "flex" , gap: "20px", backgroundColor: "peachpuff", fontSize:"2rem" , justifyContent: "flex-end" , padding: "10px"}}>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
    </div>
  )
}

export default Navbar
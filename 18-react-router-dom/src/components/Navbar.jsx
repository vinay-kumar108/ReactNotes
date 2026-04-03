import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <div style={{ display: "flex" , gap: "20px", backgroundColor: "peachpuff", fontSize:"2rem" , justifyContent: "center" , alignItems:"center" , padding: "10px"}}>
 

        
        <NavLink style={{ textDecoration: "none" }}  to='/' >Home</NavLink>
        <Link style={{ textDecoration: "none" }} to='/contact'>Contact</Link>
        <Link style={{textDecoration: "none" }} to='/about'>About</Link>
        <Link style={{textDecoration: "none" }} to='/photo'>APOTD</Link>
    </div>
  )
}

export default Navbar
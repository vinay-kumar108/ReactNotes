import React from 'react'
import { Link , Navlink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{ display: "flex" , gap: "20px", backgroundColor: "peachpuff", fontSize:"2rem" , justifyContent: "center" , alignItems:"center" , padding: "10px"}}>
 {/*Link component is used to navigate between different routes in a React application without causing a full page reload. It is a part of the react-router-dom library and provides a declarative way to create navigation links. */}

        
<NavLink 
  to="/about"
  className={({ isActive }) => isActive ? "active" : ""}
>
  Home
</NavLink>
        <Link style={{ textDecoration: "none" }} to='/contact'>Contact</Link>
        <Link style={{textDecoration: "none" }} to='/about'>About</Link>
        <Link style={{textDecoration: "none" }} to='/photo'>Photos</Link>
    </div>
  )
}

export default Navbar
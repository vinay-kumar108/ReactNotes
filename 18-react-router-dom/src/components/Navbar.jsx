import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{ display: "flex" , gap: "20px", backgroundColor: "peachpuff", fontSize:"2rem" , justifyContent: "center" , alignItems:"center" , padding: "10px"}}>
 {/*Link component is used to navigate between different routes in a React application without causing a full page reload. It is a part of the react-router-dom library and provides a declarative way to create navigation links. */}

        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
    </div>
  )
}

export default Navbar
import React from 'react'
import {useNavigate} from 'react-router-dom'

const Photo = () => {
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", fontSize: "2rem", textAlign: "center" , color: "magenta"}} >Cosmic gallery</div>
    
  )
}

export default Photo
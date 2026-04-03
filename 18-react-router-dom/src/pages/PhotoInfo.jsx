import React from 'react'
import { Link, useParams } from 'react-router'


const PhotoInfo = () => {
//props drilling
    const param=useParams(); 
  return (
    //implemented 
    <div style={{
        top:'10%',
        left:'50%',
        position:'relative',
        fontSize:'2rem'
    }} >{param.id} Details Page  </div> //generated dynamic component!
  )
}

export default PhotoInfo
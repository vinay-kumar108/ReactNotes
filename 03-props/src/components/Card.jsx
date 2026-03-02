import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className="parent">
        <div className="child">
            <img src={"https://images.unsplash.com/photo-1768479397383-49806c934167?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="profile_pic" />
            <h1>{props.username},{props.age}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>View More</button>
        </div>
        
        
    </div>
    </>
  )
}

export default Card

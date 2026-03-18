 import React from 'react'

const App = () => {

  const handleSubmit=(e)=>{
    e.preventDefault()
    
    alert("Form Submitted Successfully")
  }

  return (
    <div>
      <form onSubmit={(e)=>{
            handleSubmit(e)
        }} >
        <input type="text" placeholder='Enter Your Name'/>
        <input type="email" placeholder='Enter Your Email'/>
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default App
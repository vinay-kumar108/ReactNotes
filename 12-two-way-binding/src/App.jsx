import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    
    alert("Form Submitted Successfully")
    console.log(`Form data: ${title}`)
  }
  return (
    <div>
      <h1>Two Way Binding</h1>
      <form onSubmit={(e)=>{
            handleSubmit(e)
        }} >
        <input type="text" placeholder='' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <button type="submit" >Submit</button>
      </form>
    </div>
    
  )
}

export default App
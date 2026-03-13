import React from 'react'
import './App.css'
const App = () => {
  function handleClick(name) {
    alert(`Hello ${name}, welcome to React!`)
    }
    
  return (
    <div>
      <div className="btn">
         
    <button onClick={() => handleClick('Alice')}>Greet Alice</button>
      </div>
    </div>
  )
}

export default App
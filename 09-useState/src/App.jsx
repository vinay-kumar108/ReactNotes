import React, { useState } from 'react'
import './App.css'
const App = () => {
  /*
const [id, setid] = useState(1)
const users=['Vinay','Atul','Lalu','Yogi']
  const [Name, setName] = useState(users[0])

  function fun(){
    setid(id+1)
    setName(users[id])
  }*/
 const [num, setnum] = useState(0)
 function increaseNum(){
  setnum(num+1)
 }function decreaseNum(){
  setnum(num-1)
 }function increaseBy5(){
  setnum(num+5)
 }
 function resetC(){
  setnum(0)
 }
 
  return (
    /*<div>
      <h1>UseState</h1>
      <h2>Value of num is: {id}</h2>
      <h2>Value of name is: {Name}</h2>
      <button onClick={fun}>Click Me</button>
    </div>*/
    <div className='container'>
      <h1 >Counter</h1>
      <span>{num}</span>
      <button onClick={increaseNum} className='increase'>+1</button>
      <button onClick={decreaseNum} className='decrease'>-1</button>
      <button onClick={increaseBy5} className='incBy5'>+5</button>
      <button onClick={resetC} className='reset'>Reset</button>

    </div>
  )
}

export default App
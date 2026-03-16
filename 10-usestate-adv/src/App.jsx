import React, { useState } from 'react'

const App = () => {
  const [data, setnum] = useState({user:'Vinay',age:20})
  const change=()=> {
    
    
    let newData={...data}
    console.log("Old Data:", newData)

    newData.age=21
    newData.user='Vishnu'
  setnum(newData)
  
    console.log("New Data:", newData)
  }
const [count, setCount] = useState(0)


  return (
    <>
      <div className="container">
        <h1 className='heading'>ये  जग  मोह  माया  है ||</h1>
        <h2  >User Name: {data.user}</h2>
        <h2 >User Age: {data.age}</h2>
        <p>Count: {count}</p>
          <button onClick={change} className='btn'>Change Data</button>
        <button onClick={() => setCount(prev => prev + 1)} className='btn'>Increase Count </button>
      </div>
    </>
  )
}

export default App
/*
function App() {
  const [count, setCount] = useState(0);

  function increase() {// useful when we want to update state multiple times in a single function
    setCount(prev => prev + 1);
    setCount(prev => prev + 1); 
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }

  return (
    <>
      <h1 className='counter '>{count}</h1>
      <button className='counter' onClick={increase}>Increase</button>
    </>
  );
}


export default App
*/
import React from 'react'

const App = () => {
    const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com');
    const data = await response.json();
    console.log(data);
  }
  return (
    <><div >App</div>
      <button onClick={getData}>Click me</button></>
  )
}

export default App
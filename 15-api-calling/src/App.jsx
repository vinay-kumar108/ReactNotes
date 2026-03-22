import React, { useEffect, useState } from 'react'
import axios from'axios'

const App = () => {
  const [list, setList] = useState([]);

/*  Calling API using fetch


const getData= async ()=>{

  
    const res=await fetch('https://jsonplaceholder.typicode.com/todos');
    const data=  await res.json();
    console.log(data);
    setList(data);
   

  }
  */
//uisng axios
const getData= async ()=>{
    const res=await axios.get('https://jsonplaceholder.typicode.com/todos');
    setList(res.data);
  }

//useEffect Hook
useEffect(()=>{
  console.log('Changes occurred!')
},[list])

  

  return (
    <>
    
      <h1 >API Calling </h1>
      <button onClick={getData}>Click Me</button>
      {list.map((ele,idx)=>{
        return <h2 key={ele.id} >{ele.title} {`<----->`}  {idx}</h2>

      }

      )
      }
    </>
  )
}

export default App
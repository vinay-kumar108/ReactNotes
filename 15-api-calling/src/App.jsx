import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  

  /*  Calling API using fetch
  
  
  const getData= async ()=>{
  
    
      const res=await fetch('https://jsonplaceholder.typicode.com/todos');
      const data=  await res.json();
      console.log(data);
      setList(data);
     
  
    }
    <--using axios-->
    const getData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      
      setList(res.data);
    }
    */

  //useEffect Hook is used to perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.
  // used to demonstrate pagination by fetching data from an API and updating the list based on the current page.
  useEffect( () =>  {
      async function setData () {
        try{

          const res= await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`);
          setList(res.data);
        }
        catch(err){
          console.log(err);
        }
      };
      setData();

  }, [page])



  return (
    <>

      <h1 >API Calling </h1>
<button onClick={setPage } ></button>
      <div style={ { margin: '20px', height: '500px', overflow: 'auto' } } >{list.map((ele) => {
        return <h2 style={{ lineHeight: '1.5' }} key={ele.id} > {ele.id}  &gt; {ele.title} </h2>
      })}
</div>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <button onClick={() => setPage(page + 1)}>
        Next
      </button>

    </>
  )
}

export default App
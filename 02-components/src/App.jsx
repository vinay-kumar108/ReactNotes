
import Card from './components/Card'
const users = [
    { username: "vinay", age: 18 },

    { username: "Vikrant", age: 24 },
    { username: "Arjun", age: 10 },
    { username: "Ayaan", age: 61 },
    { username: "Ashutosh", age: 25 }
];

const App = () => {
  return (
    <>
    {users.map((user,index)=>(
      <Card
        key={index}
        username={user.username}
        age={user.age}
      />
    ))}
    </>
    
  )
}

export default App
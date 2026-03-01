
const Card = ({ username, age }) => {
    
    return (
        <div className="card">
            <div className="name">Name: {username}</div>
            <div className="age">Age: {age}</div>
        </div>
    )
}

export default Card
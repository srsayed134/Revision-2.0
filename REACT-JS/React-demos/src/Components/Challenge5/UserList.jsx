import React from 'react'

function UserList() {
    let users = [
        {id: 1, name: "Alice", age: 25},
        {id: 2, name: "Bob", age: 30},
        {id: 3, name: "Charlie", age: 22},
    ]
  return (
    <div>
     {users.map((user) => (
        <ul key={Math.random()}>
            <li>{user.id}</li>
            <li>{user.name}</li>
            <li>{user.age}</li>
        </ul>
     ))}
    </div>
  )
}

export default UserList
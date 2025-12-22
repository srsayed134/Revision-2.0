import React, { useState } from 'react'

function Comp4() {

    const[count, setCount] = useState(() => {
        return Math.floor(Math.random() * 10000)
    })
    
    const increment = () => {
        const newNumber =  Math.floor(Math.random() * 100)
        setCount(newNumber)
    }

  return (
    <div>
        <h1>Random Number : {count}</h1>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Comp4
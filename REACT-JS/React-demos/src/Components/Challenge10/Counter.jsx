import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    const up = () => {
        setCount(count + 1)
    }
    const down = () => {
        setCount(count - 1)
    }


  return (
    <div>
        <h1>Count :- {count}</h1>
        <button onClick={up}>+</button>
        <button onClick={down}>-</button>
    </div>
  )
}

export default Counter
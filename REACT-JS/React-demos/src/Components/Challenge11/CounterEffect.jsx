import React, { useEffect, useState } from 'react'

function CounterEffect() {

    const[count, setCount] = useState(0);

    useEffect(() => {
       document.title = `Incre:- ${count}`
    }, [count])

    const handleClick = () => {
        console.log("Call useEffect")
        setCount(count + 1)
    }

  return (
    <div>
        <h1>Count :- {count}</h1>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default CounterEffect
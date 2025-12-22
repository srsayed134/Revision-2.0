import React, { useRef, useState } from 'react'

function Comp3() {

    const [count, setCount] = useState(() => {
        const setValue = 10;
        return setValue;
    })
    //For regular button
    const increment = () => {
        setCount((previous) => previous + 1)
    }
    //For my own development
    const timer = useRef(null)
     //this is for catch interval id and it has to be clear all time each when each action occurd and useRef() useRef keeps the value persistent between renders when i marked or give values null this does NOT trigger a re-render

    const start = () => {
        if(timer.current) return //if it is true(from 0 to unlimited value is true except 0 or null) return
        timer.current = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1)
    }
    const stop = () => {
        clearInterval(timer.current)
        timer.current = null
    }

  return (
    <div>
        <p>{count}</p>
        {/* //For regular  */}
        {/* <button onMouseDown={increment}>+</button> */}
        {/* My development */}
        <button onMouseDown={start} onMouseLeave={stop} onMouseUp={stop}>+</button>


    </div>
  )
}

export default Comp3
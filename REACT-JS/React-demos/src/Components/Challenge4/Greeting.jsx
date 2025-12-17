import React from 'react'

function Greeting() {

    const name = "Jhon";
    const today = new Date();

  return (
    <div>
        <h1>Good evening {name}</h1>
        <p>Today is {today.toDateString()}</p>

    </div>
  )
}

export default Greeting
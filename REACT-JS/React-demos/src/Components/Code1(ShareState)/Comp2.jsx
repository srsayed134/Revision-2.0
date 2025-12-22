import React from 'react'

function Comp2({count, onclickHandler}) {
    //You can create another function
    const clickHandle = () => onclickHandler()

  return (
    <div>
        <button onClick={clickHandle}>-</button>
    </div>
  )
}

export default Comp2
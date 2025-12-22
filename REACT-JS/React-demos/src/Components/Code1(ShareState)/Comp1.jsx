import React from 'react'

function Comp1({count, onclickHandler}) {
  return (
    <div>
        <p>{count}</p>
        {/* //Or you can fire function directly */}
        <button onClick={onclickHandler}>+</button>
    </div>
  )
}

export default Comp1
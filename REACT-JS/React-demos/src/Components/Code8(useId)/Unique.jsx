import React, { useId } from 'react'

function Unique() {

    const id = useId()

  return (
    <div>
        <label htmlFor={`${id}-email`}>Email</label>
        <input type="email" id={`${id}`} />
        <br />

        <label htmlFor={`${id}-pass`}>Password</label>
        <input type="password" id={`${id}-pass`} />

        

    </div> 
  )
}

export default Unique
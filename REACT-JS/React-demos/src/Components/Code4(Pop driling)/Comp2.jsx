import React from 'react'
import Comp3 from './Comp3'

function Comp2({name}) {
  return (
    <div>
        <Comp3 name = {name}/>
    </div>
  )
}

export default Comp2 
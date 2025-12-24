import React from 'react'
import Comp2 from './Comp2'

function Comp1({name}) {
  return (
    <div>
        <Comp2 name = {name}/>
    </div>
  )
}

export default Comp1 
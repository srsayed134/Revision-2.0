import React, { useContext } from 'react'
import { Data, Data1 } from '../../App'

function Comp3() {
    let userName = useContext(Data)
    let userAge = useContext(Data1)

  return (
    <div>
        <h1>This is {userName} and age is {userAge}</h1>
    </div>
  )
}

export default Comp3
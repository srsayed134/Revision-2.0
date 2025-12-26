import React, { useReducer, useState } from 'react'
import { counterreducer, inittialState } from './counterReducer'

function Counter() {
    const [state, dispatch] = useReducer(counterreducer, inittialState);

    //State For form

    const [input, setInput] = useState(0)

    const handleIncrementByAmount = () => {
        dispatch({type: "incrementByValue", payload: Number(input)})
        setInput(0);
    }

    const handleDecrementByAmount = () => {
        dispatch({type: "decrementByValue", payload:Number(input)})
        setInput(0)
    }




  return (
    <div>
        <h1>Count : {state.count}</h1>
        <button onClick={() => dispatch({type: "increment"})}>+</button>
        <button onClick={() => dispatch({type: "decrement"})}>-</button>
        <button onClick={() => dispatch({type: "reset"})}>*</button>
    
    <div>
        <input type="number" value={input} onChange={e => setInput(e.target.value)}/>

        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Subtract</button>
    </div>


    </div>
  )
}

export default Counter
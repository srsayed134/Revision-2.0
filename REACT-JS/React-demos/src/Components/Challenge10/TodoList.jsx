import React, { useState } from 'react'

function TodoList() {

    const [list, setList] = useState([]);
    const [inputValues, setValues] = useState("");

    const handleSubmit = e => {
      e.preventDefault()
      if(inputValues.trim()){ //Prevents empty todo like " "
        setList([...list, inputValues]);
        setValues("") //Clears input box
      }
    }
    const handleChange = e => { //handleChange keeps the input text and React state perfectly synchronized, character by character.
      setValues(e.target.value)
    }

  return (
    <div>
        <h1>To do list</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValues} onChange = {handleChange} placeholder='Add a new to do'/>
        <button type='submit'>Add to do</button>
        </form>
        <ul>{list.map((list, i) => <li key={i}>{list}</li>)}</ul>
    </div>
  )
}

export default TodoList
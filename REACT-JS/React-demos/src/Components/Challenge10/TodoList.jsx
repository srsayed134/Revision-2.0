import React, { useState } from 'react'

function TodoList() {

    const [list, setList] = useState([]);
    const [inputValues, setValues] = useState("");

  return (
    <div>
        <h1>To do list</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValues} placeholder='Add a new to do'/>
        </form>
        <button type='submit'>Add to do</button>
        <ul>{list.map((list, i) => <li key={i}>{list}</li>)}</ul>
    </div>
  )
}

export default TodoList
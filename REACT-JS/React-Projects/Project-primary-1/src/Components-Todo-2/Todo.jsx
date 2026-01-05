import React, { useState } from "react";
import "./Style.css";
function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) => {
      return todos.concat({
            text: input,
            id: Date.now().toString(36) + Math.random().toString(36).slice(2)
        })
    })
    setInput("") //It clean input field after function
  }

  const  removeTodo =(id) => {
    setTodos(todos => todos.filter(t => t.id !== id))
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="New todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul className="todos-list">
        {todos.map(({text, id}) => (
            <li className="todo" key={id}>
                <span>{text}</span> 
                <br />
                <span>{id}</span> 
                <br />
                <button className="close" onClick={() => removeTodo(id)}>X</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

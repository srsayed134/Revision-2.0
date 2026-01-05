import React, { useState } from "react";
import "./Style.css";

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div className="container">
      <div>
        <h1 className="number">{count}</h1>
      </div>
      <div className="btns-container">
        <div onClick={increment} className="increment">+</div>
        <div onClick={decrement} className="increment">-</div>
      </div>
    </div>
  );
}

export default CounterApp;

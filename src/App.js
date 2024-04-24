import React from "react";
import { useState } from "react";
import "./styles.css";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter((prev) => prev + 1);
  };
  const decrementHandler = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <div className="counterContainer">
      <h1>Counter App</h1>
      <p>Count : {counter}</p>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
};

export default Counter;

/*
USE STATE
* CANNOT BE USED IN A CONDITIONAL STATEMENT (IF)
* ALWAYS DEFINE USESTATE AT THE TOP OF THE FUNCTION
* prevState can be used to utilize the previous state of the State
*/

import { useState } from "react";

export default function UseStateJS() {
  const [name, setName] = useState(" ");
  const [counter, setCounter] = useState(0);
  function handleClick() {
    setName("Rachel Cleary");
    console.log(name);
  }

  function handleCounterIncrement() {
    setCounter((prevState) => prevState + 1);
  }

  function handleCounterDecrement() {
    setCounter((prevState) => prevState - 1);
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleClick}>useState</button> <br />
      <button onClick={handleCounterIncrement}>+</button>
      <button onClick={handleCounterDecrement}>-</button>
      {counter}
    </div>
  );
}

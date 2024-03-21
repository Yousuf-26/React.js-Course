import { useState } from "react";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalCmp from "./components/ConditionalCmp";

function App() {
  const [count, setCount] = useState(0);
  const seatNumbers = [15, 12, 13];
  const person = {
    name: "Javed",
    age: 35,
    occupation: "QA Engineer",
  };
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Hello name="Rahman" age="30" seatNumbers={seatNumbers} person={person} />
      <Fruits />
      <ConditionalCmp />
    </div>
  );
}

export default App;

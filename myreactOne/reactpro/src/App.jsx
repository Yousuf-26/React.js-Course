import { useContext, useState } from "react";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalCmp from "./components/ConditionalCmp";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";
import UseStateJS from "./hooks/UseStateJS";
import Timer from "./hooks/Timer";
import UserContext from "./hooks/contxtJS";
import Ref from "./hooks/ref";
function App() {
  const [count, setCount] = useState(0);
  const seatNumbers = [15, 12, 13];
  const person = {
    name: "Javed",
    age: 35,
    occupation: "QA Engineer",
  };

  const userValue = useContext(UserContext);
  return (
    <div className="App">
      {/*
        <h1>Hello World</h1>
      <Hello name="Rahman" age="30" seatNumbers={seatNumbers} person={person} />
      <Fruits />
      <ConditionalCmp /> 
      <Message />
      <Counter /> 
        */}
      <Form />
      <UseStateJS />
      {/*<Timer />*/}
      user info {userValue}
      <Ref />
    </div>
  );
}

export default App;

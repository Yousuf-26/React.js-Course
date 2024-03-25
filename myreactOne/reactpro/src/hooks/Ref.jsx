import { useRef, useState } from "react";

export default function Ref() {
  const refElement = useRef("");
  const [name, setName] = useState("Yousuf");
  console.log(refElement);

  function Reset() {
    setName("");
    refElement.current.focus();
  }
  return (
    <div>
      <h1>Hello Ref</h1>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

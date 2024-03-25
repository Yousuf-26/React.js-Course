import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: " ", lastName: " " });

  function handleChange(e) {
    setName({ ...name, firstName: e.target.value });
    console.log(e.target.value);
    console.log(name);
  }
  return (
    <form>
      {name.firstName}
      <h2>Form-Handling</h2>
      <input
        onChange={function demo(e) {
          return handleChange(e);
        }}
        type="text"
        value={name.firstName}
      />
    </form>
  );
}

import { useState } from "react";
import { useEffect } from "react";

/*
useEffect() = react hook that tells React do some code when (pick one):
    * This component re-renders
    * This component mounts
    * This state of a value
useEffect(function,[dependencies])
1. run extra code for a certain task
2. useEffect Hook allows you to perform side effects in your components
3. side effects are: fetching data, directly updating the DOM, and timers.
4.useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
ways to control -
useEffect(() => {
  //Runs on every render
});

useEffect(() => {
  //Runs only on the first render
}, []);

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);

*/
export default function Timer() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("rim");

  useEffect(() => {
    let timeout = setTimeout(() => {
      setCount((count) => count + 1);

      if (count == 5) {
        setName("Sad");
      }
    }, 1000);

    //return () => clearTimeout(timeout);
  }, [count, name]);

  return (
    <h1>
      I've rendered {count} times!, {name}
    </h1>
  );
}

//nested bracket expression {}

import Fruit from "./Fruit";

export default function Fruits() {
  const arr = ["Banana", "Apple", "Strawberry"];
  const arrOjbects = [
    { name: "Apple", price: 250, origin: "USA" },
    { name: "Banana", price: 1250, origin: "CHINA" },
    { name: "Strawberry", price: 2250, origin: "BANGLADESH" },
  ];

  return (
    <div>
      {/*
      //How to iteratre the list of array
       <ul>
       {arr.map((element) => {
         return <li>{element}</li>;
       })}
     </ul>
     */}

      {
        //we cannot render objects directly
        // need to use map and show properties one by one
        arrOjbects.map((fruitObjects) => {
          return <Fruit object={fruitObjects} />;
        })
      }
    </div>
  );
}

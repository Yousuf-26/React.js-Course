/*
Topic - React useContext Hook
React Context is a way to manage state globally,
it helps to avoid prop drilling
import { useState, createContext, useContext } from "react";

*/

//STEP 1
import { useState, createContext, useContext } from "react";

// STEP 2
export const UserContext = createContext();

export default function contxtJS() {
  const [user, setUser] = useState("Brocode");

  return (
    <>
      <UserContext.Provider value={user}>
        <h1>Hello JS</h1>
      </UserContext.Provider>
    </>
  );
}

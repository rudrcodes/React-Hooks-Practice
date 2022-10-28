import React from "react";
import { useState } from "react";

export const UseStateComp = ({ name, setName }) => {
  const [count, setCount] = useState(0);
  //1-We can use the useState function variable in a different function and then call the function.We cannot overwrite or redefine the useState function variable .
  //2-We will/should not pass the useState first variable in the parent function in which we want to call the useState function variable.
  const updateStateIncrease = () => {
    setCount(count + 1);
  };
  const updateStateDecrease = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>Rudransh Hook's Practice</h1>
      <h2>{name}</h2>
      <button onClick={() => setName("New")}>Change Name</button>
      <h1>{name}</h1>
      <h2>useState Hook</h2>
      <h3>{count}</h3>
      <button onClick={updateStateIncrease}>Increase</button>
      {/* <button onClick={()=>setCount(count+1)}>Increase</button> */}
      <br />
      <br />
      <button onClick={updateStateDecrease}>Decrease</button>
      {/* <button onClick={()=>setCount(count-1)}>Decrease</button> */}
    </>
  );
};

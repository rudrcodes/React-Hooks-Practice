import React, { useState } from "react";
import { useEffect } from "react";

export const UseEffectComp = () => {
  const [count, setCount] = useState(0);
  const [Fname, setFname] = useState("name");

  useEffect(() => {
    console.log("useEffect");
    // setCount(23);
  }, [count, Fname]);

  return (
    <>
      <div>UseEffectComp</div>
      {count}
      <br />
      <button onClick={() => setCount(count + 2)}>Change</button>
      <br />
      {Fname}
      <br />
      <button onClick={() => setFname("rudransh")}>Change</button>
    </>
  );
};

import React, { useState } from "react";
import { useRef } from "react";

export const UseRefComp = () => {
  const [newname, setnewname] = useState("Enter name here");
  const inputEl = useRef(null);
  console.log("TODO using React");
  const change = () => {
    // if (inputEl.current) {
    inputEl.current.focus();
    if (inputEl.current.value) {
      setnewname(inputEl.current.value);
      console.log(inputEl.current.value);
      inputEl.current.value = " ";
    }

    // }
  };
  return (
    <>
      <div>UseRefComp</div>
      {/* <p ref={inputEl}>name</p> */}
      <h1>{newname}</h1>
      <br />
      <input ref={inputEl} placeholder="name..." />
      <button onClick={change}>Focus</button>
    </>
  );
};

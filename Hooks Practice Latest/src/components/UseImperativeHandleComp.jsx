import React, { useRef } from "react";
import { ButtonUIHex } from "./ButtonUIHex";

export const UseImperativeHandleComp = () => {
  const buttonRef = useRef(null);
  return (
    <>
      <h1>UseImperativeHandleComp</h1>
      <button onClick={()=>{
        buttonRef.current.alterToggle();
      }} >Button from Parent</button>
      <br />
      <br />
      <ButtonUIHex ref={buttonRef}/>
    </>
  );
};

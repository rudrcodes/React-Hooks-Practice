import React, { forwardRef, useImperativeHandle, useState } from "react";

export const ButtonUIHex = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  useImperativeHandle(ref, () => ({
    //this is an object that will be passed to the function.
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button>Button from Child</button>
      {toggle && <h2>Toggle</h2>}
    </>
  );
});

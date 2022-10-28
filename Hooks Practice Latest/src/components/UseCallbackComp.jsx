import React, { useCallback, useState } from "react";
import { ChildOfuseCallback } from "../components/ChildOfuseCallback";
export const UseCallbackComp = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("YOOOOO!  ");
  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );
  return (
    <>
      {"<h1>hmjhvmj</h1>"}
      {/* <h1 className="span">
        Difference between
        <span>useCallback</span>
        <h2 style={{ display: "inline" }}>&</h2>
        <span>useMemo</span>
      </h1>
      <p>
        👉 useMemo hook memoizes the value of the function that the function
        returns and then stores it in a variable
      </p>
      <p>
        👉 WHEREAS useCallback hook stores/saves the memoized function itself
      </p> */}
      <ChildOfuseCallback returnComment={returnComment} />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <br />
      {String(toggle)}
      <br />
      {toggle && <h2>Hello</h2>}
    </>
  );
};

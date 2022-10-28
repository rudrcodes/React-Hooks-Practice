import React from "react";
import { useContext } from "react";
import { AppContext } from "./UseContextComp";
export const Login = () => {
  // let text
  const { setUser } = useContext(AppContext);
  return (
    <>
      <input style={{width:"400px"}}
        placeholder="Username...."
        onChange={(e) => setUser(e.target.value)}
      ></input>
      <br />
    </>
  );
};

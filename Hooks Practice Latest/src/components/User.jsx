import React from "react";
import { ChildComp } from "./ChildComp";
import { useContext } from "react";
import { AppContext } from "./UseContextComp";

export const User = () => {
  const { user } = useContext(AppContext);
  return (
    <>
      <div>User</div>
      <span>Inside User Comp : </span>
      {user.toUpperCase()}
      <ChildComp />
    </>
  );
};

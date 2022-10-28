import React from "react";
import { useContext } from "react";
import { AppContext } from "./UseContextComp";

export const ChildComp = () => {
  const { user } = useContext(AppContext);
  return <div>ChildComp -{user} </div>;
};

import React, { useEffect } from "react";

export const ChildOfuseCallback = ({ returnComment }) => {
  useEffect(() => {
    console.log("Function called");
  }, [returnComment]);
  return <div>ChildOfuseCallback {returnComment("rudransh")}</div>;
};

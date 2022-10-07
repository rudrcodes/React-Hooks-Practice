import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
  //useSelector is used to access the state
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of icecreams - {numOfIcecream}</h2>
      <button onClick={() => dispatch(ordered())}>Order icecream </button>
      <button onClick={() => dispatch(restocked(5))}>Restock icecreams </button>
    </div>
  );
};

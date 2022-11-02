import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";
export const IcecreamView = () => {
    const [icecream,setIcecream]=useState(0);
  //To connect react app to redux store
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  //To use the dispatch function returned by the useDispatch() function , so that we can  dispatch/call actions
  const dispatch = useDispatch();
  console.log(typeof(icecream))
  return (
    <div>
      <h2>No of Icecream : {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Icecream </button>
      <button onClick={() => dispatch(restocked(parseInt(icecream)))}>Restock Icecream </button>
      <br/>
      <input type='number' onChange={(e)=>setIcecream(e.target.value)} placeholder="enter"/>
    </div>
  );
};

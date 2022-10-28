import React from "react";
import { useReducer } from "react";
const initialState = {
  count: 0,
  Fname: "rudransh",
  showText: true,
};
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      // console.log(state);
      // break;
      return { ...state, showText: !state.showText, count: state.count + 1 };
    case "same":
      console.log("same");
      // break;
      return state;
    //always pass the default case
    default:
      console.log("Wrong case");
      return state;
  }
}

export const UseReducerComp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>useReducer Hook</h2>
      {state.count}
      <br />
      {state.showText && state.Fname}
      <br />
      {initialState.count}
      <br />
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <br />
      <button onClick={() => dispatch({ type: "j" })}>Wrong action</button>
      {/* <button onClick={() => dispatch({ type: "same" })}>same</button> */}
    </>
  );
};

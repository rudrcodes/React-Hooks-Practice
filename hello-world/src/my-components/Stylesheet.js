import React from "react";
import "./myStyle.css";

function Stylesheet(props) {
  let classname = props.isTrue ? "primary" : "";
  //   let classname = props.isTrue==='rudr' ? "primary" : "";
  return <div className='primary'>Stylesheet</div>;
//   return <div className={classname}>Stylesheet</div>;
}

export default Stylesheet;

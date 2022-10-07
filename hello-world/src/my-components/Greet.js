import React from "react"; //Always import React in your components
// import React , {Component} from "react"; //{Component} is imported if we are using named export way of exporting our components

function Greet(props) {
  // console.log(props)

  return (
    <div>
      <h1>Hello Runjhun {props.name} 🥸🥸🥸🥸 </h1>
      <h1>Hello Runjhun {props.name} 🥸🥸🥸🥸 </h1>
      {props.children}
    </div>
  );
}
// to export the Component
export default Greet;

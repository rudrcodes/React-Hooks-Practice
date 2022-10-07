// import React from "react";

// function childComponent(props) {
//   return (
//     <div>
//       <h1>Rudransh</h1>
//       <button onClick={() => props.greetParent("child")}>
//         Child Component
//       </button>
//     </div>
//   );
// }

// export default childComponent;

import React from "react";

function ChildComponent(props) {
  //   const person = {
  //     name: "John Doe",
  //     age: 999,
  //   };

  const buttonClickHandler = () => {
    props.passData("person");
  };
  const myWayToPassData = () => {
    props.greetParent("child");
  };
  return (
    <div>
      <button onClick={buttonClickHandler}>Show the info</button>
      <button onClick={myWayToPassData}>My Way to Pass Data</button>
    </div>
  );
}

export default ChildComponent;

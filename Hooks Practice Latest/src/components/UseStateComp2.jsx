import React from "react";

export const UseStateComp2 = ({ setData }) => {
  //  const changeName=(e)=>{
  //     setData({});
  //  }
  let name = " ";
  const changeName = (e) => {
    //   console.log(e.target.value);
    name = e.target.value;

    // alert(`entered name : ${name}`)
  };
  //   const checkName = () => {
  //     if (name == " ") {
  //       console.log("BSDK NAAM DAAAAL");
  //       //   name = "BSDK";
  //     }
  //   };
  return (
    <>
      <input type="text" name="myname" onChange={changeName} />
      <br></br>
      <br></br>
      <button onClick={() => setData(name)}>Change Name</button>
      {/* <button onClick={checkName}>Check Name Empty</button> */}
    </>
  );
};

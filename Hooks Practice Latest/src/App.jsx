import { useState } from "react";
import "./App.css";
import { UseCallbackComp } from "./components/UseCallbackComp";
import { UseContextComp } from "./components/UseContextComp";
import { UseEffectComp } from "./components/UseEffectComp";
import { UseImperativeHandleComp } from "./components/UseImperativeHandleComp";
import { UseLayoutEffectComp } from "./components/UseLayoutEffectComp";
import { UseMemoComp } from "./components/UseMemoComp";
import { UseReducerComp } from "./components/UseReducerComp";
import { UseRefComp } from "./components/UseRefComp";
import { UseStateComp } from "./components/UseStateComp";
import { UseStateComp2 } from "./components/UseStateComp2";

function App() {
  const [data, setData] = useState("Enter Name");
  const [name, setName] = useState("Previous");
  return (
    <div className="App">
      {/* useState example below--  */}
      {/* <UseStateComp name={name} setName={setName} />
      <UseStateComp2 setData={setData} />
      <br />
      <p>Name: {data}</p> */}
      {/* <UseReducerComp/> */}
      {/* <UseEffectComp/> */}
      {/* <UseRefComp/> */}
      {/* <UseLayoutEffectComp/> */}
      {/* <UseImperativeHandleComp/> */}
      {/* <UseContextComp/> */}
      {/* <UseMemoComp /> */}
      <UseCallbackComp />
    </div>
  );
}

export default App;

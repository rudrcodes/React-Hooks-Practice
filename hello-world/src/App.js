import logo from "./logo.svg";
import "./App.css";
import Greet from "./my-components/Greet";
import Welcome from "./my-components/Welcome"; //Defaultexport
import Counter from "./my-components/Counter";
import EventBinding from "./my-components/EventBinding";
import ParentComponent from "./my-components/ParentComponent";
import ConditionalRendering from "./my-components/ConditionalRendering";
import ListRendering from "./my-components/ListRendering";
import Stylesheet from "./my-components/Stylesheet";
import Forms from "./my-components/Forms";
import LifecycleA from "./my-components/LifecycleA";
import { Fragment } from "react";
import FragmentsDemo from "./my-components/FragmentsDemo";
import RefComp from "./my-components/RefComp";
import HoverCounter from "./HoverCounter";
import ClickCounter from "./ClickCounter";
import { UserProvider } from "./my-components/userContext";
import ComponentA from "./ComponentA";
// import {Welcome} from './my-components/Welcome'//Named export

function App() {
  return (
    <div className="App">
      {/* <EventBinding age="23" />
      <ParentComponent /> */}
      {/* <ListRendering /> */}
      {/* <Stylesheet isTrue={true} /> */}
      {/* <Forms /> */}
      {/* <Stylesheet isTrue='rudr'/> */}
      {/* <ConditionalRendering /> */}
      {/* <Greet name="rudransh" /> */}
      {/* <Greet name="aggawal" /> */}
      {/* <Greet name="pui-pui"> */}
      {/* <Counter /> */}
      {/* <p>This is chilren props</p> */}
      {/* </Greet> */}
      {/* <Greet/> */}
      {/* <Welcome haanji="kese ho"/> */}
      {/* <p>this is welcome children</p> */}
      {/* </Welcome> */}

      {/* <LifecycleA /> */}
      {/* <FragmentsDemo /> */}
      {/* <RefComp></RefComp> */}
      {/* <h4>
        Thus with the help of HOC we removed code duplication and made use of
        same code in both the below count components.
      </h4>

      <HoverCounter />
      <ClickCounter /> */}
      <UserProvider value="Rudransh">
        <ComponentA />
      </UserProvider>
    </div>
  );
}

export default App;

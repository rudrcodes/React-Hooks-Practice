import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
    this.greetHandler = this.greetHandler.bind(this);
    this.passData = this.passData.bind(this);
  }
  greetHandler(childName) {
    alert(`Hello from  ${this.state.parentName} ${childName}`);
  }
  passData(person) {
    alert(`Data ${person} ${this.state.parentName}`);
  }
  render() {
    return (
      <div>
        <ChildComponent
          greetParent={this.greetHandler}
          passData={this.passData}
        />
      </div>
    );
  }
}

export default ParentComponent;

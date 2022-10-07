import React, { Component } from "react";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "Rudransh",
    };
    console.log('constructor');
}
static getDerivedStateFromProps(props,state){
    
    console.log('getDerivedStateFromProps');
    return null;
    
}
componentDidMount(){
    
    console.log('componentDidMount');
}
  render() {
    console.log('render')
    return (
      <div>
        <h1>LifecycleA </h1>
      </div>
    );
  }
}

export default LifecycleA;

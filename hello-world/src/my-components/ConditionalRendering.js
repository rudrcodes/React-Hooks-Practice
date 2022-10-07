import React, { Component } from "react";

export class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: true,
    };
  }
  render() {
    //1-if-else way
    /*
    if (this.state.isLoggedin)
      return (
        <div>
          <h1>Welcome Rudransh</h1>
        </div>
      );
    else
      return (
        <div>
          <h1>Welcome Guest</h1>
        </div>
      );
      */
    //2-Element variable
    /*
    let message;
    if (this.state.isLoggedin) message = <h1>Hello Rudransh</h1>;
    else return (message = <h1>Hello Guest</h1>);
    return <div>{message}</div>;
    */
    //3-Ternary Conditional Rendering
    /*
    return this.state.isLoggedin ? (
      <div>
        <h1>Welcome Rudransh</h1>
      </div>
    ) : (
      <div>
        <h1>Welcome Guest</h1>
      </div>
    );
    */
   //4-Short-Circuit Operator
   return this.state.isLoggedin && <div><h1>Welcome Rudransh</h1></div>
   //it renders Welcome Rudransh when this.state.isLaggedin is true else if isLoggedin is false it will not render anything
  }
}

export default ConditionalRendering;

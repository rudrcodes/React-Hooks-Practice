import React, { Component } from "react";

class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Event Binding",
    };
    this.revertMessage = this.revertMessage.bind(this); //Most ujsed react binding method
  }
  chengeMessage() {
    this.setState({
      message: "You Clicked the button",
    });
  }
  revertMessage() {
    this.setState({
      message: "You reverted the message",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message} {this.props.age}</h1>
        <button onClick={() => this.chengeMessage()}>Click me</button>
        <button onClick={this.chengeMessage.bind(this)}>Click me second</button>

        {/* <button onClick={this.chengeMessage}>Click me second</button> */}
        {/* This ⬆️ will give error as this is undefined here */}

        {/* <button onClick={this.chengeMessage()}>Click me second</button> */}
        {/* never do this ⬆️ it generates an infinite uncaught error loop and the page becomes unresponsive ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️ */}
        <button onClick={this.revertMessage}>Revert Back</button>
      </div>
    );
  }
}

export default EventBinding;

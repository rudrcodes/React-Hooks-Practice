import React from "react";
// import React , {Component} from "react"; //{Component} is imported if we are using named export way of exporting our components

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Visitor",
    };
  }
  changeMessage() {
    this.setState({
      message: "Thank you for Subscribing",
    });
  }
  revertMessage(){
    this.setState({
      message:"Hello Visitor AGAIN"
    })
  }
  render() {
    return (
      <div>
        <h1>Hello ,From Rudransh</h1>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
        <br />
        <button onClick={() => this.revertMessage()}>Revert Text back</button>
        {/* {this.props.children} */}
        {/* {this.props.children} */}
        {this.props.haanji}
        {/* in class components we dont necessarily need to specify the props in the render function we can directly use them as  {this.props.keyName or children} */}
      </div>
    );
  }
}

//Named export
// export class Welcome extends React.Component {
//   render() {
//     return <h1>Hello ,From Rudransh</h1>;
//   }
// }
export default Welcome;

//ctrl + shift + l -  Select all same words

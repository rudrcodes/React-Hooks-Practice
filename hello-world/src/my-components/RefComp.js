import React, { Component } from "react";

class RefComp extends Component {
  constructor(props) {
    super(props);

    this.inpRef = React.createRef();
  }
  componentDidMount() {
    this.inpRef.current.focus();
    console.log(this.inpRef.current.autofocus);
    console.log(this.inpRef);
  }
  render() {
    return (
      <div>
        RefComp
        <input type="text" ref={this.inpRef} />
      </div>
    );
  }
}

export default RefComp;

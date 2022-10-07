import React, { Component } from "react";
import UpdatedContent from "./withHover";

class ClickCounter extends Component {
  render() {
    const { count ,incrementCount} = this.props;
    return (
      <div>
        <button onClick={incrementCount}>ClickCounter {count}</button>
      </div>
    );
  }
}

export default UpdatedContent(ClickCounter);

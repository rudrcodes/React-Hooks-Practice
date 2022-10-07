import React, { Component } from "react";
import UpdatedContent from "./withHover";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <h1 onMouseOver={incrementCount}>HoverCounter {count}</h1>;
  }
}

export default UpdatedContent(HoverCounter);

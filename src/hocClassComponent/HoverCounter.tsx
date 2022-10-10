import React, { Component } from "react";
import withCounter from "./WithCounter";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount }: any = this.props;
    return <h3 onMouseOver={incrementCount}>clicked {count} times </h3>;
  }
}

export default withCounter(HoverCounter, 10);

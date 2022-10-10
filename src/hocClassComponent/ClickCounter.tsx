import React, { Component } from "react";
import withCounter from "./WithCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount }: any = this.props;
    return <button onClick={incrementCount}>clicked {count} times </button>;
  }
}

export default withCounter(ClickCounter, 5);

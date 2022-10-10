import React from "react";

interface IProps {}

interface IState {
  count?: any;
}

const withCounter = (WrappedComponent: any, incrementNumber: any) => {
  class WithCounter extends React.Component<IProps, IState> {
    constructor(props: any) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState: any) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;

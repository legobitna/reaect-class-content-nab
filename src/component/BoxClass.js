import React, { Component } from "react";

export default class BoxClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.counter) {
      return {
        value: nextProps.counter,
      };
    }
    return null;
  }

  componentWillUnmount() {
    console.log("byebye");
  }

  increaseBoxState = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <div>
        <h1>Box class</h1>
        <p>state:{this.state.value}</p>
        <p>props from App :{this.props.counter}</p>
        <button onClick={this.increaseBoxState}>Increrae Box state</button>
      </div>
    );
  }
}

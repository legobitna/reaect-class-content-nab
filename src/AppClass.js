import React, { Component } from "react";
import BoxClass from "./component/BoxClass";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
    console.log("increarse function", this.state.counter);
  };
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    if (nextState.counter == 5) {
      return false;
    }
    return true;
  }
  componentDidUpdate() {
    // when state is updated
    console.log("componentDidUpdate", this.state.counter);
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>App class</h1>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increase}>increase!!</button>

        {this.state.counter < 3 && <BoxClass counter={this.state.counter} />}
      </div>
    );
  }
}

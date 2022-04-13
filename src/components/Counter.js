import React, { Component } from "react";
import { useState } from "react";
export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  render() {
    return (
      <div>
        <h1>Đếm: {this.state.count}</h1>
        <button onClick={() => this.increment()}>Click me!</button>
      </div>
    );
  }
}

export default Counter;

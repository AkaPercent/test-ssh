import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  onChange() {
    this.setState({
      year: "Xin chào Mikumi",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.year}</h1>
        <button onClick={() => this.onChange()}>Click me</button>
      </div>
    );
  }
}
export default About;

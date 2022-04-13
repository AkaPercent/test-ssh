import { Component } from "react";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Counter from "./components/Counter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
      </div>
    );
  }
}

export default App;

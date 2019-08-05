import React, { Component } from "react";
import DisplayResult from "./Components/displayResult";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: "",
      height: ""
    };
  }

  render() {
    return (
      <div className="masterDiv">
        <h1 className="header">Bmi-Calculator</h1>
        <div className="text">
          <label>Weight(kg)</label>
          <input
            className="input-field"
            name="weight"
            value={this.state.weight}
            onChange={e => this.setState({ weight: e.target.value })}
          />
        </div>

        <div className="text">
          <label>Height(cm)</label>
          <input
            className="input-field"
            name="height"
            value={this.state.height}
            onChange={e => this.setState({ height: e.target.value })}
          />
        </div>
        <div>
          <button className="result">ClickMe</button>
          <DisplayResult
            weight={this.state.weight}
            height={this.state.height}
          />
        </div>
      </div>
    );
  }
}

export default App;

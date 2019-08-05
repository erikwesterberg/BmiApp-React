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
        <div className="metric-form">
        <select id="method" value={this.state.method} onChange={(e) => this.setState({ method: e.target.value })}>
            <option value="metric">METRIC (Weight in kg / Height in cm)</option>
            <option value="imperial">IMPERIAL (Weight in pounds / Height in inches)</option>
          </select>
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
        </div>
        <div>
          {/* <button className="result">ClickMe</button> */}
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

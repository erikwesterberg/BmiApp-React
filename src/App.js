import React, { Component } from "react";
import DisplayResult from "./Components/displayResult";
import "./App.css";
import MethodSelect from "./Components/MethodSelect";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: "",
      height: "",
      method: "metric"
    };
  }

  methodChange = event => {
    this.setState({ method: event.target.value });
  };

  render() {
    return (
      <div className="masterDiv">
        <h1 className="header">Bmi-Calculator</h1>
        <MethodSelect
          method={this.state.method}
          onChangeValue={this.methodChange}
        />
        <div className="text">
          <label>Weight</label>
          <input
            className="input-field"
            name="weight"
            value={this.state.weight}
            onChange={e => this.setState({ weight: e.target.value })}
          />
        </div>

        <div className="text">
          <label>Height</label>
          <input
            className="input-field"
            name="height"
            value={this.state.height}
            onChange={e => this.setState({ height: e.target.value })}
          />
        </div>

        <div>
          <DisplayResult
            weight={this.state.weight}
            height={this.state.height}
            method={this.state.method}
          />
        </div>
      </div>
    );
  }
}

export default App;

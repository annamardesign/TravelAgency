import React, { Component } from "react";
import * as Cities from "./cities";
import "./selectCity.css";

class SelectCity extends Component {
  state = {
    selectedValue: "",
  };

  render() {
    const { selectedValue } = this.state;

    return (
      <React.Fragment>
        <section className="select-container">
          <div>{this.renderCitySelection()}</div>
        </section>
        <div>{this.renderSelectedCity()}</div>
      </React.Fragment>
    );
  }
  renderCitySelection() {
    return (
      <React.Fragment>
        <select
          className="select"
          onChange={(e) => this.setState({ selectedValue: e.target.value })}
        >
          <option value="Select your destination">
            Select your destination
          </option>
          <option value="Barcelona">Barcelona</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Madrid">Madrid</option>
        </select>
      </React.Fragment>
    );
  }

  renderSelectedCity() {
    const { selectedValue } = this.state;
    if (!selectedValue || selectedValue == "Select your destination")
      return <p className="select_dest_text">Select your destination</p>;
    const City = Cities[selectedValue];
    return <City />;
  }
}

export default SelectCity;

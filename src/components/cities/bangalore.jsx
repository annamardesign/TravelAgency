import React, { Component } from "react";
import http from "../../services/httpService";
import AddCard from "./addcard.jsx";
import "./city.css";

const ApiUrl =
  "https://test.api.amadeus.com/v1/shopping/activities/by-square?north=13.023577&west=77.536856&south=12.923210&east=77.642256";

class Bangalore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: [],
      toggleStatus: [false],
    };
  }

  handleClick(index) {
    const newToggleStatus = [...this.state.toggleStatus];
    newToggleStatus[index] = !this.state.toggleStatus[index];
    this.setState({ toggleStatus: newToggleStatus });
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const { data: deals } = await http.get(ApiUrl);
    let offersList = deals["data"];
    this.setState({ deals: offersList });
  }

  render() {
    const { deals, toggleStatus } = this.state;
    return (
      <React.Fragment>
        <div className="deals-container">
          {deals.map((deal, index) => (
            <AddCard
              key={index}
              index={index}
              toggled={toggleStatus[index]}
              handleClick={this.handleClick.bind(this)}
              deal={deal}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Bangalore;

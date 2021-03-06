import React, { Component } from "react";
import http from "../../services/httpService";
import AddCard from "./addcard.jsx";
import "./city.css";

const baseApiUrl = "https://test.api.amadeus.com/v1";
const apiEndPoint = "/shopping/activities";

class Barcelona extends Component {
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
    const { data: deals } = await http.get(baseApiUrl + apiEndPoint, {
      params: {
        latitude: 41.39715,
        longitude: 2.160873,
        radius: 1,
      },
    });
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

export default Barcelona;

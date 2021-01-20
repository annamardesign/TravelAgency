import React, { Component } from 'react';
import http from "./services/httpService";
import Select from "./select.jsx";
import { MdExpandMore } from 'react-icons/md';
import './offers.css';

const baseApiUrl = "https://test.api.amadeus.com/v1";
const apiEndPoint = "/shopping/activities";

class Offers extends Component {
    state = { 
        deals: [],
        options: ["Barcelona", "Madrid"],
        selectedCity: ""
     }
      async componentDidMount() {
    
      const { data:deals } = await http.get(baseApiUrl + apiEndPoint, {
          params: {
            latitude: 41.39715,
            longitude: 2.160873,
            radius: 1
          }, 
        })
        let offersList = deals['data'];
        this.setState({ deals: offersList });
      }

      handleChange = (e) => {
        this.setState({selectedCity: e.target.value});
      }

    render() { 
      const {options, selectedCity} = this.state

        return ( <React.Fragment>
            <div className="select-container">
            <Select className="select" options={options} onChange={this.handleChange} value={selectedCity} />
            <p>{selectedCity}</p>
            </div>
            <div className="deals-container">
            {this.state.deals.map(deal => (
              <div className="activity-wrapper">
              <div className="activity" key={deal.id}>
                <div className="details">
                  <div className="icon"><MdExpandMore/></div>
                  <div className="activity-description"><p className="more">{deal.shortDescription}</p></div>
                </div>
                 <div className="activity-img-wrap">
                  <img className="activity-image" src={deal.pictures}/>
                 </div>
                 <div className="activity-price">{deal.price.amount} {deal.price.currencyCode} 
                 <a className="activity-bookingLink" href={deal.bookingLink}>Book</a></div>
                 <div className="activity-name">{deal.name}</div>
            </div>
            </div>))} 
            </div>

        </React.Fragment> );
    }
}
 
export default Offers;



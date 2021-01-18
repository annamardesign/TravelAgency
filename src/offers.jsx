import React, { Component } from 'react';
import http from "./services/httpService";
import { MdExpandMore } from 'react-icons/md';
import Dropdown from './dropdown.jsx';
import './offers.css';

const baseApiUrl = "https://test.api.amadeus.com/v1";
const apiEndPoint = "/shopping/activities";
const cityCoordinates = [
  { 
    city: "Barcelona",
    coordinates:{
      latitude: "41.39715",
      longitude: "2.160873"
    }
  },
  { 
    city: "Madrid",
    coordinates:{
      latitude: "40.41436995",
      longitude: "3.69170868"
    }
  }
]

class Offers extends Component {
    state = { 
        options: ["Barcelona", "Madrid"],
        selectedCity: "",
        deals: [],
     }

    
    handleChange = e => {
      if(e.target.value !== "") {
        this.setState({selectedCity:e.target.value}) 
        let selectedCityCoordinates = cityCoordinates[`${this.state.selectedCity}`];
         const { data:deals } = http.get(baseApiUrl + apiEndPoint, {
           params: {
          latitude: `${selectedCityCoordinates.latitude}`,
           longitude: `${selectedCityCoordinates.longitude}`,
           radius: 1
           }, 
         })
       let offersList = deals['data'];
       this.setState({ deals: offersList, loading: true });
       
      }
     }
       handleSubmit = () => {
       this.loadData();
       }
     

    render() { 

      const{options, selectedCity} = this.state;

        return ( <React.Fragment>
          <div className="find-container">
            <div className="find-text">Find activities for your chosen destination</div>
            <div className="find-destinations">
              <h3>Destinations</h3>
                <Dropdown options={options} onChange={this.handleChange} value={selectedCity}/>
              <input type="submit" onSubmit = {this.handleSubmit} value="Go" /> 
            </div>
          
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


  
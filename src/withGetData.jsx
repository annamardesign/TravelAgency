import React, { Component } from 'react';
import http from "./services/httpService";
import Dropdown from './dropdown.jsx';
import CityOffers from './cityoffers.jsx';
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

function withGetData (CityOffers, endpoint) {
class WithGetData extends Component {
    state = { 
        options: ["Barcelona", "Madrid"],
        selectedCity: "",
        loading: false,
        deals: [],
     }

     componentDidMount() {
      if (this.state.selectedCity) {
        let asda = async (endpoint) => {
          let selectedCityCoordinates = cityCoordinates.filter(arr => arr.city)[0];
          this.setState({loading: true});
          const { data:deals } = await http.get({url: endpoint, 
          params: {
             latitude: `${selectedCityCoordinates.coordinates.latitude}`,
             longitude: `${selectedCityCoordinates.coordinates.longitude}`,
             radius: 1
           }
          })
          let offersList = deals.data;
          this.setState({ deals: offersList, loading: false });
        }
       }
     }
  
    
    handleChange = e => {
      if(e.target.value !== "") {
        this.setState({selectedCity:e.target.value});
      }
    }
    

     

    render() { 

      const {options, selectedCity, deals} = this.state;

        return ( <React.Fragment>
          <div className="find-container">
            <div className="find-text">Find activities for your chosen destination</div>
            <div className="find-destinations">
              <h3>Destinations</h3>
                <Dropdown options={options} onChange={this.handleChange} value={selectedCity}/>
              <input type="submit" value="Go" /> 
            </div>
          </div>
          <div className="deals-container">
             <CityOffers deals= {deals}/>
          </div>
        </React.Fragment> );
    }
  }
    return WithGetData;

  }
 
export default withGetData;


  
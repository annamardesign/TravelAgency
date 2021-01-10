import React, { Component } from 'react';
import http from "./services/httpService";

const baseApiUrl = "https://test.api.amadeus.com/v1";
const apiEndPoint = "/shopping/activities";

class Offers extends Component {
    state = { 
        offers: []
     }
      async componentDidMount() {
    
      const { data:offers } = await http.get(baseApiUrl + apiEndPoint, {
          params: {
            latitude: 41.39715,
            longitude: 2.160873,
            radius: 1
          }, 
        })
        let offersList = offers['data'];
        this.setState({ offers: offersList });
      }

    render() { 

        return ( <React.Fragment>
          <div>Offers</div>
            {this.state.offers.map(offer => (
              <div key={offer.id}>
             </div>))} 

        </React.Fragment> );
    }
}
 
export default Offers;



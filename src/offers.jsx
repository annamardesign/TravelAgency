import React, { Component } from 'react';
import http from "./services/httpService";

const baseApiUrl = "https://test.api.amadeus.com/v1";
const apiEndPoint = "/shopping/activities";

class Offers extends Component {
    state = { 
        deals: []
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

    render() { 

        return ( <React.Fragment>
          <div>Offers</div>
            {this.state.deals.map(deal => (
              <div key={deal.id}>
                <div className="name">{deal.name}</div>
                <div className="price">{deal.price.amount} {deal.price.currencyCode} <a className="book" href={deal.bookingLink}>Book</a></div>
                <div className="image"><img src={deal.pictures}/></div>
            </div>))} 

        </React.Fragment> );
    }
}
 
export default Offers;



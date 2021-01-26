import React, { Component } from 'react';
import http from "../../services/httpService";
import {MdExpandMore} from 'react-icons/md';
import './madrid.css';


const baseApiUrl = "https://test.api.amadeus.com/v1";
const apiEndPoint = "/shopping/activities";


class Madrid extends Component {
        state = { 
            deals: []
         }
          async componentDidMount() {
          const { data:deals } = await http.get(baseApiUrl + apiEndPoint, {
              params: {
                latitude: 40.41436995,
                longitude:-3.69170868,
                radius: 1
              }, 
            })
            let offersList = deals['data'];
            this.setState({ deals: offersList });
          }
    
        render() { 
    
            return ( <React.Fragment>
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
     
 
export default Madrid;



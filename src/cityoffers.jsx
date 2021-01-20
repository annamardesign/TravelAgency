
import React from 'react';
import { MdExpandMore } from 'react-icons/md';
import './cityoffers.css';


const CityOffers = ({deals}) => {
  return ( <React.Fragment>

      {deals.map(deal => (
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
  </React.Fragment> ); 
}
 
export default CityOffers;


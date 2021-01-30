import React, { useEffect, useState } from 'react';
import chamonie from '../images/chamonie.png';
import lake from '../images/lake.png';
import chamoniemobile from '../images/chamoniemobile.jpg';
import { offersData } from '../services/offersData.js';
import { BsChevronDoubleDown } from 'react-icons/bs';
import './home.css';

const Home = () => {

  const [offset, setOffset] = useState(0);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }
   
    
    window.addEventListener("scroll",handleScroll );

    function loadData() {
      setOffers(offersData);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

    return (<React.Fragment>
      <div className="header-wrapper">
      <div className="header-mobile" style={{ backgroundImage: `url(${chamoniemobile})`, backgroundSize: "cover" }}></div>
        <div className="mountain-back" style={{ backgroundImage: `url(${chamonie})`, backgroundSize: "cover" }}></div>
        <div className="mountain-front" 
        style={{
        transform: `translateY(${offset * 0.5}px)`, backgroundImage: `url(${chamonie})`, backgroundSize: "cover"}}></div>
        <div className="water" style={{ backgroundImage: `url(${lake})`, backgroundSize: "cover" }}>
        </div>
        
      </div>
        
        <div className="find"><h1>Find your dream destination</h1><BsChevronDoubleDown className="find-arrow"/></div>
        
        <h1 className="top" style={{transform: `translateX(${offset * -0.5}px)`}}> Top Destinations </h1>
        <div className="grid-wrap">
          {offersData.map( (offer, i) => 
            (<div className="card" style={{'--i': i}}>
              <h5 className="price">{offer.price}</h5>
              <p className="desc">{offer.description}</p>
              <a href={offer.url} className="btn-see">See itinerary</a>
            </div>)
            )}
        </div>
        </React.Fragment>);
}
 
export default Home;
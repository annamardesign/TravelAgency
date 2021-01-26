import React, { useEffect, useState } from 'react';
import sky from '../images/sky.png';
import mountain from '../images/backmountain.png';
import water from '../images/water.png';
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

    return (<div className="page">
        <div className="sky"><img src={sky} alt="sky"/></div>
        <div className="mountain"><img src={mountain} alt="mountain"/></div>
        <div className="mountain"><img src={mountain} alt="mountain" style={{
        transform: `translateY(${offset * 0.5}px)`}} /></div>
        <div className="water">
            <img src={water} alt="water"/>
            <h1 className="chamonie" style={{transform: `translateX(${offset * 1}px)`}}>
                Like what you see? Explore Chamonie, France!</h1>
        </div>
        <div className="find"><h1>Find your dream destination</h1><BsChevronDoubleDown className="find-arrow"/></div>
        
        <h1 className="top" style={{transform: `translateX(${offset * -0.5}px)`}}> Top Destinations </h1>
        <div className="grid-wrap">
          {offersData.map( offer => 
            (<div className="card">
              <img src={offer.image}  alt={offer.description} className="offer-img"/> 
              <h5 className="price">{offer.price}</h5>
              <p className="desc">{offer.description}</p>
              <a href={offer.url} className="btn-see">See itinerary</a>
            </div>)
            )}
        </div>
    </div>);
}
 
export default Home;
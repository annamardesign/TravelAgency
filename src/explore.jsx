import React, { Component } from 'react';
import mountains from './images/mountains.jpg';
import city from './images/city.jpg';
import sea from './images/sea.jpg';
import heritage from './images/heritage.jpg';
import './explore.css';

const Explore = () => {
    return (<div>
     <div className="destinations-wrapper">
         <div className="destinations">
        <div className="text">
            <p className="topline">Cost effective reservations</p>
            <h1> See our destinations </h1>
            <p className="services">Explorer takes pride in giving the customers a choice of their specific accommodation needs, no matter where – regionally, nationally, and internationally. Certain corporate discounts are available, with preferred accommodation establishments (with bill back facilities).</p>
        </div>
        <div className="text">
            <p className="topline">Private Tours and other extras</p>
            <h1> Sign up </h1>
            <p className="services"> Airline packages or any other specials are passed on to our customers. As a common practice at Explorer, Explorer communicates the “specials” to the customers whenever the specials are received from the airlines.</p>
        </div>
        <div className="destination-card">
            <p>Mountain destinations</p>
            <img src={mountains} alt="mountains" className="destination-img"/>
        </div>
        <div className="destination-card">
            <p>Sea destinations</p>
            <img src={sea} alt="sea" className="destination-img"/>
        </div>
        <div className="destination-card">
            <p>City destinations</p>
            <img src={city} alt="city" className="destination-img"/>
        </div>
        <div className="destination-card">
            <p>UNESCO heritage destinations</p>
            <img src={heritage} alt="heritage" className="destination-img"/>
        </div>
     </div>
    </div>
    </div>  );
}
 
export default Explore;
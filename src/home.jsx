import React, { useEffect, useState } from 'react';
import sky from './images/sky.png';
import mountain from './images/backmountain.png';
import water from './images/water.png';
import './home.css';

const Home = () => {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

    return (<div className="page">
        <div className="sky"><img src={sky} /></div>
        <div className="mountain"><img src={mountain}/></div>
        <div className="mountain"><img src={mountain} style={{
        transform: `translateY(${offset * 0.5}px)`}} /></div>
        <div className="water"><img src={water}/><h1>Explore</h1></div>
        <div className="find"><h1>Find your dream destination</h1></div>
    </div>  );
}
 
export default Home;
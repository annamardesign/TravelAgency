import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import chamonie from '../images/chamonie.png';
import lake from '../images/lake.png';
import chamoniemobile from '../images/chamoniemobile.jpg';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { posts, updatePosts } from '../redux/reducers.js';
import { connect } from 'react-redux';
import './home.css';


const Home = ({ posts, updatePosts }) => {
  const [offset, setOffset] = useState(0);
  

  useEffect(() => {
    
    function handleScroll() {
      setOffset(window.pageYOffset)  
    } 
    
    window.addEventListener("scroll", handleScroll );

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
    });

   

    return (<React.Fragment>
      <div className="header-wrapper">
      <div className="header-mobile" style={{ backgroundImage: `url(${chamoniemobile})`, backgroundSize: "cover" }}></div>
        <div className="mountain-back" style={{ backgroundImage: `url(${chamonie})`, backgroundSize: "cover"}}></div>
        <div className="mountain-front" 
        style={{
        transform: `translateY(${offset * 0.5}px)`, backgroundImage: `url(${chamonie})`, backgroundSize: "cover"}}></div>
        <div className="water" style={{ backgroundImage: `url(${lake})`, backgroundSize: "cover" }}>
        </div>
        
      </div>
        
        <div className="find"><h1>Find your dream tours and activities</h1><BsChevronDoubleDown className="find-arrow"/></div>
        
        <h1 className="top" style={{transform: `translateX(${offset * -0.5}px)`}}> City of the week </h1>
        <div className="grid-wrap">
          {posts}
        </div>
        </React.Fragment>);
}

 Home.propTypes = {
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
 };

function mapStateToProps(state) {
  return { updatePosts: state.updatePosts };
}
 
export default connect(mapStateToProps)(Home);
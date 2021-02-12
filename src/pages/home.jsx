import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import chamonie from '../images/chamonie.png';
import lake from '../images/lake.png';
import chamoniemobile from '../images/chamoniemobile.jpg';
import { BsChevronDoubleDown } from 'react-icons/bs';
import Post from './post.jsx';
import { connect } from 'react-redux';
import './home.css';


const Home = ({ updatedPosts }) => {
  const [offset, setOffset] = useState(0);
  const [toggleStatus, setToggleStatus] = useState([false]);

  useEffect(() => {
    
    function handleScroll() {
      setOffset(window.pageYOffset)  
    } 
    
    window.addEventListener("scroll", handleScroll );

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
    });

    function handleClick(index) {
      const newToggleStatus = [...toggleStatus]
      newToggleStatus[index] = !toggleStatus[index]
      setToggleStatus(newToggleStatus);
    };

   

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

          {updatedPosts.map(post => <Post post={post} 
           key={post.index} 
           index={post.index} 
           toggled={toggleStatus[post.index]}  
           handleClick = {handleClick}  
           />)}
           
        </div> 
        </React.Fragment>);
 }


 Home.propTypes = {
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
 };

function mapStateToProps(state) {
  return { updatedPosts: state.updatedPosts };
}
 
export default connect(mapStateToProps)(Home);
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Logo from "./logo.jsx";
import "./navbar.css";

const Navbar = () => {
    return ( <React.Fragment>
        <nav className="navbar">
         <ul className="left">
          <li><NavLink to="/home" className="home">Home</NavLink></li>
          <li><NavLink to="/explore" className="explore">Explore</NavLink></li>
        </ul>
        <ul className="center">
          <li><NavLink to="/home" className="logo"><Logo/></NavLink></li>
        </ul>
        <ul className="right">
          <li><NavLink to="/signup" className="signup">Sign up</NavLink></li>
          <li><NavLink to="/signin" className="signin">Sign in</NavLink></li>
        </ul>
        </nav>
    </React.Fragment> );
}
 
export default Navbar;
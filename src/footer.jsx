import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
    return ( <React.Fragment>
        <nav className="footer">
         <ul className="left">
          <li><Link to="" className="social"><FaFacebook/></Link></li>
          <li><Link to="" className="social"><FaInstagram/></Link></li>
        </ul>
        <ul className="right">
          <li>explore@email.com</li>
          <li>34 Avenue San Diego</li>
        </ul>
        </nav>
    </React.Fragment> );
}
 
export default Footer;
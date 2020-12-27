import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Logo from "./logo.jsx";
import { FaBars, FaTimes } from 'react-icons/fa';
import "./navbar.css";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

    return ( <React.Fragment>
        <nav className="navbar">
        <div className='mobile-container'>
        <NavLink to="/home"><Logo/></NavLink>
        </div>
          <div className="menu-icon" onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</div>
           <div className={click? 'nav-menu-active' : 'nav-menu'}>
            <ul className="left">
             <li><NavLink to="/home" className="home" onClick={closeMobileMenu}>Home</NavLink></li>
             <li><NavLink to="/explore" className="explore" onClick={closeMobileMenu}>Explore</NavLink></li>
            </ul>
            <ul className="center">
             <li><NavLink to="/home" className="logo" onClick={closeMobileMenu}><Logo/></NavLink></li>
            </ul>
            <ul className="right">
             <li><NavLink to="/signup" className="signup" onClick={closeMobileMenu}>Sign up</NavLink></li>
             <li><NavLink to="/signin" className="signin" onClick={closeMobileMenu}>Sign in</NavLink></li>
            </ul>
         </div>
        </nav>
    </React.Fragment> );
}
 
export default Navbar;
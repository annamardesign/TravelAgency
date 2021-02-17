import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/logo.jsx";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="mobile-container">
          <NavLink to="/home">
            <Logo />
          </NavLink>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <div className={click ? "nav-menu-active" : "nav-menu"}>
          <div className="left">
            <NavLink
              exact
              activeClassName="active"
              to="/home"
              className="navli"
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/explore"
              className="navli"
              onClick={closeMobileMenu}
            >
              Explore
            </NavLink>
          </div>
          <div className="center" onClick={handleClick}>
            <li>
              <NavLink to="/home" className="logo" onClick={closeMobileMenu}>
                <Logo />
              </NavLink>
            </li>
          </div>
          <div className="right">
            <NavLink
              exact
              activeClassName="active"
              to="/signup"
              className="navli"
              onClick={closeMobileMenu}
            >
              Sign up
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/book"
              className="navli"
              onClick={closeMobileMenu}
            >
              Book
            </NavLink>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

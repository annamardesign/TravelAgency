import React from 'react';
import logo from '../images/logo_transparent_crop.png';

const Logo = () => {
    return ( <div><img src={logo} className="logo" style={{ width: "20%", padding:"1rem", margin: "0 auto"}}/></div> );
}
 
export default Logo;
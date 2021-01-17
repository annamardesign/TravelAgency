import React, { useState, useEffect } from 'react';
import './dropdown.css';


const Dropdown = ({value, onSelect, selectedCity}) => {

    return (
        <React.Fragment>
        
            <select name="select" onSelect={(e) => (e.currentTarget.value)}>
            <option value="" />
              {value.map(option => (
               <option key={option} value={option}>
               {option}
             </option>))}
            </select>

                        {/* // <li key={index}>
                        //     <Link className={item.name} to={item.path} latitude={item.latitude} longitud={item.longitud} onChange={handleOnChange} onClick={() => setClick(false)}>
                        //         {item.title}
                        //     </Link>
                        // </li> */}
                    
        
               
        
        

        </React.Fragment>
    )
}

export default Dropdown;


import React, { useState, useEffect } from 'react';
import './dropdown.css';


function Dropdown () {

    const [options, setOptions] = useState("Barcelona");

    const handleChange = event => {
        if(event.target.value !== "") {
        setOptions(event.target.value)
        }
  }
   

    return (
        <React.Fragment>
        
            <select value={options}  onChange={handleChange}>
             <option value="Barcelona">Barcelona</option>
             <option value="Madrid">Madrid</option>
            </select>

                        {/* // <li key={index}>
                        //     <Link className={item.name} to={item.path} latitude={item.latitude} longitud={item.longitud} onChange={handleOnChange} onClick={() => setClick(false)}>
                        //         {item.title}
                        //     </Link>
                        // </li> */}
                    
        
               
                <input type="submit" value="Go" />
        

        </React.Fragment>
    )
}

export default Dropdown;


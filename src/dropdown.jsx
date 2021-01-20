import React from 'react';
import './dropdown.css';


const Dropdown = ({options, onChange}) => {

    return (
        <React.Fragment>
        
            <select onChange={onChange}>
            <option value="">Select a city</option>
              {options.map(option => (
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


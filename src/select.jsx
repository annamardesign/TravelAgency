import React from 'react';

const Select = ({options, onChange}) => {

    return (
        <React.Fragment>
        
            <select name="select" onClick={onChange}>
            <option value="Select your destination">Select your destination</option>
              {options.map(option => (
               <option key={option.key} value={option.value}>
               {option.text}
             </option>))}
            </select>

        </React.Fragment>)
}

export default Select;




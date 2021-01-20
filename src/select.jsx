import React from 'react';

const Select = ({options, onChange}) => {

    return (
        <React.Fragment>
        
            <select name="select" onChange={onChange}>
            <option value="Select your destination" />
              {options.map(option => (
               <option key={option} value={option}>
               {option}
             </option>))}
            </select>

        </React.Fragment>)
}

export default Select;




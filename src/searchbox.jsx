import React from 'react';

const SearchBox = ({ value, onChange }) => {
    return ( <React.Fragment>
        
        <input 
         type="text"
         name="lat"
         className="search-box"
         placeholder="latitude e.g 41.39715"
         value={value}
         onChange={e => onChange(e.currentTarget.value)}
         style={{width:"10rem",background:"#F2F1F9", border:"none", padding:"0.5rem"}}
        />

        <input 
         type="text"
         name="long"
         className="search-box"
         placeholder="longitude e.g 2.160873"
         value={value}
         onChange={e => onChange(e.currentTarget.value)}
         style={{width:"10rem",background:"#F2F1F9", border:"none", padding:"0.5rem"}}
        />
        </React.Fragment>
    );
};

export default SearchBox;
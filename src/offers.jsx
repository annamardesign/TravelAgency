import React, { Component } from 'react';
import { connect } from 'react-redux';
import http from "./services/httpService";
import { setSelect } from './actions';
import * as Cities from './cities';
import './offers.css';

// const baseApiUrl = "https://test.api.amadeus.com/v1";
// const apiEndPoint = "/shopping/activities";

// const mapStateToProps = state => {
//   return {
//     options: state.optionsReducer.options,
//     selectedValue: state.selectedValueReducer.selectedValue
//   };
// };

//  const mapDispatchToProps = (dispatch) => {
//    return {
//     onChange: (event) =>  dispatch(setSelect(event.target.value))
//      };
// };
  class Offers extends Component {
    state = { 
        selectedValue:""
    }

    render () {
      console.log(Cities)
      const { selectedValue } = this.state
     return ( 
     <React.Fragment>
       <section className="select-container">
         <div>
           {this.renderCitySelection()}
        </div>
       </section>
       <div>
       {this.renderSelectedCity(selectedValue)}
       </div>
      </React.Fragment>
     )
    }
    renderCitySelection() { 
        return ( <React.Fragment>
          <select className="select" onChange={(e) => this.setState({selectedValue: e.target.value})} >
            <option value="Select your destination">Select your destination</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Madrid">Madrid</option>
            </select>
        </React.Fragment> );
    }

    renderSelectedCity() {
      const { selectedValue } = this.state
      if(!selectedValue) 
      return <p>Select your destination</p>;
      const City = Cities[selectedValue];
      return <City/>;
    }

}
 
 
export default Offers;



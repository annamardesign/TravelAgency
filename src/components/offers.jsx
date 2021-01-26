import React, { Component } from 'react';
import { connect } from 'react-redux';
import http from "../services/httpService";
import { setSelect } from '../redux_test/actions';
import * as Cities from './cities';
import './offers.css';


  class Offers extends Component {
    state = { 
        selectedValue:"",
        loading: false
    }
    if(selectedValue){
      this.setState({loading:true})
    }

    render () {
      const { selectedValue, loading } = this.state
     
     return ( 
     <React.Fragment>
       <section className="select-container">
         <div>
           {this.renderCitySelection()}
        </div>
       </section>
       <div>
           {loading? "Your destination activities are loading..." : this.renderSelectedCity()}
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
      return <p className="select_dest_text">Select your destination</p>;
      const City = Cities[selectedValue];
      return <City/>;
    
    }

}
 
 
export default Offers;



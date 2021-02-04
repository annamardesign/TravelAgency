import React, { Component } from 'react';
import http from "../../services/httpService";
import AddCard from './addcard.jsx';
import './city.css';


const baseApiUrl = "https://test.api.amadeus.com/v1";
const apiEndPoint = "/shopping/activities";


class Barcelona extends Component {
        state = { 
            deals: [],
            isClicked: false
         }

        handleClick = () => {
        const { currentState } = this.state.isClicked;
        this.setState({ isClicked: !currentState });
         }
        
  
          async componentDidMount() {
           this.setState({loading: true});
           const { data:deals } = await http.get(baseApiUrl + apiEndPoint, {
              params: {
                latitude: 41.39715,
                longitude: 2.160873,
                radius: 1
              }, 
            })
            let offersList = deals['data'];
            this.setState({ deals: offersList });
           }

          
    
        render() { 
         const {deals, isClicked} = this.state
            return ( <React.Fragment>
              <div className="deals-container">

              {deals.map(deal => <AddCard isCardClicked={isClicked}  onClick = {this.handleCallback}  deal={deal}/>)}
            
            </div>
    
            </React.Fragment> );
        }
    }
     
 
export default Barcelona;



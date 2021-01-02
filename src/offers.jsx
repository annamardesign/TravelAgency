import React, { Component } from 'react';
import http from "./services/httpService";
import axios from "axios";


const baseApiUrl = "https://test.api.amadeus.com/v1"
const apiEndPoint = "/shopping/activities";

class Offers extends Component {
    state = { 
        data: []
     }
     async componentDidMount() {
      const { data: data } = await http.get(baseApiUrl + apiEndPoint, {
          params: {
            latitude: 41.39715,
            longitude: 2.160873,
            radius: 1
          }
        });
        this.setState({ data });
      }

    render() { 

        return ( <React.Fragment>
          <div>Offers</div>
            {this.state.data.map(data => (
              <div key={data.id}>
             </div>))}

        </React.Fragment> );
    }
}
 
export default Offers;



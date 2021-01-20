import React, { useState, useEffect } from 'react';
import http from "./services/httpService";
import './dropdown.css';

const baseApiUrl = "https://test.api.amadeus.com/v1";
const apiEndPoint = "/shopping/activities";

class CitySelect extends Component {
    state = {}

    ComponentDisMount() {
    
        async function getCityData() {
            const { data:deals } = await http.get(baseApiUrl + apiEndPoint, {
                params: {
                  latitude: `${this.item.latitude}`,
                  longitude: `${this.item.longitude}`,
                  radius: 1
                }, 
              })
              let offersList = deals['data'];
              this.setDeals(offersList);
            } 
    }
    render() {
        const {deals} = this.state;
        return (
          <div>
            <DynamicSelect deals={deals} />
          </div>
        );
      }
}
 
export default CitySelect;

    const [clicked, setClick] = useState(false);
    const [deals, setDeals] = useState([]);
    const [cities, setCity] = useState(["Barcelona", "Zagreb", "Nice", "London"]);

    const handleClick = () => setClick(!clicked);

    React.useEffect(() => {
    async function getCityData() {
        const { data:deals } = await http.get(baseApiUrl + apiEndPoint, {
            params: {
              latitude: `${this.item.latitude}`,
              longitude: `${this.item.longitude}`,
              radius: 1
            }, 
          })
          let offersList = deals['data'];
          this.setDeals(offersList);
        }
    })

    const handleOnChange = (e) => {
        this.setCity(e.target.value);
        this.getCityData();
    }

    return (
        <React.Fragment>
             <ul onClick={handleClick} className={clicked? 'dropdown-menu-clicked' : 'dropdown-menu'}> 
            <select onChange={handleOnChange}>
                {DestinationItems.map((item, index) => 
                        <option value={item.title}>{item.title}</option>

                        // <li key={index}>
                        //     <Link className={item.name} to={item.path} latitude={item.latitude} longitud={item.longitud} onChange={handleOnChange} onClick={() => setClick(false)}>
                        //         {item.title}
                        //     </Link>
                        // </li>
                )}
                </select>
            </ul>
            <div></div>
        </React.Fragment>
    )
}

export default Dropdown;


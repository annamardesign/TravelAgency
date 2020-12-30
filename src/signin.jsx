import React, { Component } from 'react';
import './signin.css';
import Offers from './offers.jsx';

class SignIn extends Component {
    state = {  }
    render() { 
        return (<React.Fragment>
            <div className="email-sign-in">
                <div className="email-container-sign-in">
                    <h1>Book your trip now</h1>
                    <form action="#">
                        <div className="form-wrap-sign-in">
                            <label for="email">
                                <input type="email" placeholder="Enter your email" id="email"></input>
                            </label>
                            <label for="password">
                                <input type="password" placeholder="Choose your password" id="password"></input>
                            </label>
                            <button className="button-sign-in" type="submit">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
    
        </React.Fragment> 

        );
    }
}
 
export default SignIn;


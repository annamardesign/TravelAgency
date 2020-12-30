import React, { Component } from 'react';
import './signin.css';
import Offers from './offers.jsx';

class SignIn extends Component {
    state = {
     account: {email:'', password:''},
     errors: {}
    };

    handleSubmit = e => {
        e.preventDefault();
       //call the server   
    }
    handleChange = ({ currentTarget: input }) => {
       const account = {...this.state.account};
       account[input.name] = input.value;
       this.setState({ account });
    }

    render() { 
        const { account } = this.state;

        return (<React.Fragment>
            <div className="email-sign-in">
                <div className="email-container-sign-in">
                    <h1>Book your trip now</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-wrap-sign-in">
                            <label htmlFor="email">
                                <input 
                                 value = {account.email}
                                 name = "email"
                                 onChange ={this.handleChange}
                                 autoFocus 
                                 type ="email" 
                                 placeholder ="Enter your email" 
                                 id ="email"></input>
                            </label>
                            <label htmlFor="password">
                                <input 
                                 value = {account.password} 
                                 name = "password"
                                 onChange = {this.handleChange}
                                 autoFocus 
                                 type ="password" 
                                 placeholder="Choose your password" 
                                 id ="password"></input>
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


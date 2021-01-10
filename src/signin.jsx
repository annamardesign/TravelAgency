import React, { Component } from 'react';
import Joi from 'joi-browser';
import * as userService from './services/userService';
import './signin.css';
import Offers from './offers.jsx';

class SignIn extends Component {
    state = {
     account: {email:'', password:''},
     errors: {}
    };

    schema = {
        email: Joi.string().email().required(),
        password: Joi.string().min(5).required()
    };

    validate = () => {
     const options = { abortEarly: false }
     const result = Joi.validate(this.state.account, options);
     if (!result.error) return null;
     const errors = {};
     for (let item of result.error.details)
     errors[item.path[0]] = item.message;
      return errors;
    }

    validateProperty = ({ name, value }) => {
     const obj = { [name]: value };
     const schema = { [name]: this.schema[name]};
     const {error} = Joi.validate(obj, schema);
     return error? error.details[0].message : null;
    };

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
        this.doSubmit();
    }

    handleChange = ({ currentTarget: input }) => {
       const account = {...this.state.account};
       account[input.name] = input.value;
       this.setState({ account });
    }

    doSubmit = async () => {
        try {
         await userService.register(this.state.data);
        }
      catch(ex) {
          if(ex.response && ex.response.status === 400) {
              const errors = {...this.state.errors};
              errors.email = ex.response.data;
              this.setState({ errors });
          }

      }
    };

    render() { 
        const { account } = this.state;

        return (<React.Fragment>
            <Offers/>
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
                                 placeholder="Enter your password" 
                                 id ="password"></input>
                            </label>
                            <button  className="button-sign-in" type="submit">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
    
        </React.Fragment> 

        );
    }
}
 
export default SignIn;


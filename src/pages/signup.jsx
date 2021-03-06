import React, { Component } from "react";
import Joi from "joi-browser";
import { register } from "../services/userService";
import "./signup.css";

class SignUp extends Component {
  state = {
    account: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.account, options);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  doSubmit = async () => {
    await register(this.state.account);
  };

  render() {
    const { account } = this.state;

    return (
      <React.Fragment>
        <div className="email">
          <div className="email-container">
            <h1>Get members-only discounts</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-wrap">
                <label htmlFor="email">
                  <input
                    value={account.email}
                    name="email"
                    onChange={this.handleChange}
                    autoFocus
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                  ></input>
                </label>
                <label htmlFor="password">
                  <input
                    value={account.password}
                    name="password"
                    onChange={this.handleChange}
                    autoFocus
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                  ></input>
                </label>
                <button className="button" type="submit">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;

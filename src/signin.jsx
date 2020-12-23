import React, { Component } from 'react';

const SignIn = () => {
    return ( <React.Fragment>
        <div className="email">
            <div className="email-container">
                <h1>Get members-only discounts</h1>
                <form action="#">
                    <div className="form-wrap">
                        <label for="email">
                            <input type="email" placeholder="Enter your email" id="email"></input>
                        </label>
                        <button className="button" type="submit">Sign up</button>
                    </div>
                </form>
            </div>
        </div>

    </React.Fragment> );
}
 
export default SignIn;
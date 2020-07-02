import React, { Component } from 'react';
// import {SignUpRoute} from 'react-router-dom';

export class SignUp extends Component {
    render() {
        return (
           
<div className="main-top-intro">
  <div className="bg-layer">
    {/* header */}
    <div className="wrapper">
      <header>
        <div className="login-logo-float">
          <h1>
            <a className="logo" href="index.html">
              <img src="images/UBA-logo.svg" alt="Logo of the United Bank for Africa" /> 
            </a>
          </h1>
        </div>            
        <div className="clear" />
      </header>
      {/* //header */}
      <div className="row">
        <div className="col-md-6">
          <div className="content-inner-info">
            <div className="content-Expo-main">
              <h1>Welcome to UBA Expo</h1>
              <p>Introducing our brand New UBA app. Download and experience for yourself.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="content-inner-info">
            <div className="content-login-right-main">
              <h3>Sign up</h3>
              <div className="form-w3ls-left-info">
                <form action="/home#" method="post">
                  <input type="email" placeholder="Email Address" required />
                  <input type="password" placeholder="Create Password" required />
                  <input type="password" placeholder="Retype Password" required />
                  <div className="bottom">
                    <button className="btn" type="submit">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        )
    }
}

export default SignUp

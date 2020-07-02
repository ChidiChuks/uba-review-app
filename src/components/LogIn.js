import React, { Component } from 'react';

export class LogIn extends Component {
    render() {
        return (
            <div>
                <div className="main-top-intro">
  <div className="bg-layer">
    {/* header */}
    <div className="wrapper">
      <header>
        <div className="login-logo-float">
          <h1>
            <a className="logo" href="index.html">
              <img src="images/UBA-logo.svg" /> 
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
              <h3>Sign in</h3>
              <div className="form-w3ls-left-info">
                <form action="#" method="post">
                  <input type="email" placeholder="Email Address" required />
                  <input type="password" placeholder="Password" required />
                  <label className="form-check-label">
                    <input id="inputAddList" type="checkbox" />
                    <span> Remember </span>
                  </label>
                  <div className="bottom">
                    <button className="btn" type="submit">Login</button>
                  </div>
                </form>
                
              </div>
              
            </div>
            
          </div>
          <br />
          <p style={{color: 'white'}} >Don't have an account? <b>SignUp</b></p>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
        )
    }
}

export default LogIn

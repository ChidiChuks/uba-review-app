import React, { Component } from 'react';

export class Feedback extends Component {
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
        <div className="col-md-4">
          <div className="content-inner-info">
            <div className="content-Expo-main">
              <h1>Hi there, let's know your thoughts</h1>
              <p>Introducing our brand New UBA app. Download and experience for yourself.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="content-inner-info">
            <div className="content-login-right-main">
              <h3>Feedback Form</h3>
              <div className="form-w3ls-left-info">
                <form action="#" method="post">
                  <input type="email" placeholder="Email Address" required />
                  <select id="themes" name="Themes" className="uba-feed-options">
                    <option value="SelectTheme">Select Viewed Theme</option>
                    <option value="MidnightRed">Midnight Red</option>
                    <option value="White">White</option>
                    <option value="DarkKnight">Dark Knight</option>
                  </select>
                  <select id="featue" name="Features" className="uba-feed-options">
                    <option value="Dashboard">Dashboard</option>
                    <option value="Dashboard">Feature</option>
                    <option value="Services">Services</option>
                    <option value="Settings">Settings</option>
                    <option value="Accounts">Accounts</option>
                  </select>
                  <div className="uba-feed-message">
                    <textarea rows={3} className="form-control" placeholder="Message" defaultValue={""} />
                  </div>
                  <label className="form-check-label">
                    <input id="inputAddList" type="checkbox" />
                    <span> Remember </span>
                  </label>
                  <div className="bottom">
                    <button className="btn" type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="content-inner-info">
            <div className="content-Expo-app">
              <img src="images/feed-back-Img01.png" alt="UBA App" />
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

export default Feedback

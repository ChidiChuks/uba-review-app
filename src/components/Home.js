import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Home extends Component {
    render() {
        return (
            <div>
  <div className="banner">
    <div className="container">
      <div className="header">
        <div className="top-menu">
          <span className="menu" />
          <ul>
            <li className="active"><a href="index.html">Home</a></li>
            <li><a className="scroll" href="#features">Features</a></li>
            <li><a className="scroll" href="#overview">Overview</a></li>
            <li><a className="scroll" href="#how-it-works">How it works</a></li>
            <li><a className="scroll" href="#media">Media</a></li>
            <Link className="view hvr-bounce-to-left" to="/">LOG OUT</Link>	 
          </ul>
        </div>
        {/* script-for-menu */}
        {/* script-for-menu */}	  	
        <div className="logo wow fadeInLeft" data-wow-delay="0.5s">
          <Link to="/feedback"><img src="images/UBA-Logo.svg" alt="United Bank for Africa Logo" /></Link>
        </div>
        <div className="clearfix" />
      </div>
      <div className="banner-info">
        <div className="col-md-1" />
        <div className="col-md-5 banner-text wow fadeInRight" data-wow-delay="0.5s">
          <h1>Banking Experience just got better!</h1>
          <p>Introducing our brand New UBA app. Download and experience for yourself.</p>
          <a className="google-play" href=" "><img src="images/google-play.svg" alt="Google Play store" /></a>
          <a className="apple-store" href=" "><img src="images/apple-store.svg" alt="App store" /></a>
        </div>
        <div className="col-md-6 banner-pic wow fadeInLeft" data-wow-delay="0.5s">
          <img src="images/uba-phone-app.png" alt="UBA App" />
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </div>
  {/**/}
  <div id="features" className="features">
    <div className="container">
      <div className="features-head">
        <h4>Amazing Features</h4>
        <h3>A simple, proven way to boost your team performance.</h3>			 
      </div>
      {/* Text grid starts */}
      {/* // Test Grid Ends */}
      <div className="container">				
        <div className="features-section wow fadeInRight" data-wow-delay="0.5s">  
          <div className="row">
            <div className="col-md-3 feature-grid">
              <div className="feature-grid-border">
                <img className="wow bounceIn uba-movie-roll" data-wow-delay="0.4s" src="images/movie-roll.svg" alt="" />	
                <p>Savings Account</p>
                <div className="movie-roll-spacer" />
              </div>
            </div>
            <div className="col-md-3 feature-grid">
              <div className="feature-grid-border">
                <img className="wow bounceIn uba-movie-roll" data-wow-delay="0.4s" src="images/movie-roll.svg" alt="" />	
                <p>Business Account</p>
                <div className="movie-roll-spacer" />
              </div>
            </div>
            <div className="col-md-3 feature-grid">
              <div className="feature-grid-border">
                <img className="wow bounceIn uba-movie-roll" data-wow-delay="0.4s" src="images/movie-roll.svg" alt="" />	
                <p>UBA Account-Leo</p>
                <div className="movie-roll-spacer" />
              </div>
            </div>
            <div className="col-md-3 feature-grid">
              <div className="feature-grid-border">
                <img className="wow bounceIn uba-movie-roll" data-wow-delay="0.4s" src="images/movie-roll.svg" alt="" />	
                <p>Magic Banking</p>
                <div className="movie-roll-spacer" />
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>
  </div>
  {/**/}
  <div id="overview" className="about">
    <div className="container">
      <div className="about-top">
        <div className="col-md-6 about-device wow fadeInLeft" data-wow-delay="0.5s">
          <img src="images/phnDouble1.png" alt="" />
        </div>
        <div className="col-md-6 about-device-info wow fadeInRight" data-wow-delay="0.5s">
          <div className="device-text">
            <h4>Great Banking App</h4>
            <h3>Smart and Secure Mobile Banking</h3>					 
            <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
              Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. </p>
          </div>
          <div className="about-list">
            <ul>
              <li><span className="abt1" />Top-notch Security</li>
              <li><span className="abt2" />Personal Financial Manager</li>
              <li><span className="abt3" />Lifestyle</li>
              <li><span className="abt4" />4 Themes Variance</li>
            </ul>
          </div>
        </div>
        <div className="clearfix" />
      </div>		
    </div>
  </div>
  {/**/}
  {/*-- video import Starts --*/}
  <div id="how-it-works" className="video">
    <img src="images/playVideoIcon.png" alt="A corporate ad video playing at the background" />
    <h1 className="spacer">See How It Works</h1>
    <h3 className="spacer">Watch 60 seconds Video of how it works</h3>
  </div>
  {/* Import Ends*/}
  {/* Media*/}
  <div id="media" className="pricing-bottom">
    <div className="container">
      <div className="pricing-text-bottom">
        <h4>Latest News</h4>
        <h3>Find out what's happening on Open Banking</h3>	
      </div>
      <div className="price-section-grids wow fadeInRight" data-wow-delay="0.5s">
        <div className="tabbable-panel">
          <div className="tabbable-line">				
            <ul className="nav nav-tabs">
              <li className="active">
                <a href="#tab_news" data-toggle="tab">
                  News </a>
              </li>
              <li>
                <a href="#tab_photos" data-toggle="tab">
                  Photos </a>
              </li>
              <li>
                <a href="#tab_videos" data-toggle="tab">
                  Videos </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="tab_news">
                <div className="row uba-card-group">
                  <div className="col-md-4">
                    <div className="uba-card">
                      <img className="card-img-top" src="images/blog-image.jpg" alt="Blog" />
                      <div className="card-body">
                        <p className="blog-para-1">
                          <span><small className="text-muted">June 16, 2020</small></span>
                          <span> 
                            <small className="text-muted cat uba-blog-icon">
                              <i className="fa fa-comment-o" /> 22
                              <span id="uba-blog-icon-spacer" />
                              <i className="fa fa-heart-o" /> 211
                            </small>
                          </span>
                        </p>
                        <h5 className="card-title">Keep it simple and beautiful, fun and functional</h5>
                        <p className="card-text"> Introducing our brand New UBA app. Download and experience for yourself.. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a className="view-blog hvr-bounce-to-left" href=".">READ MORE</a>	 
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="uba-card">
                      <img className="card-img-top" src="images/blog-image.jpg" alt="Blog" />
                      <div className="card-body">
                        <p className="blog-para-1">
                          <span><small className="text-muted">June 16, 2020</small></span>
                          <span> 
                            <small className="text-muted cat uba-blog-icon">
                              <i className="fa fa-comment-o" /> 22
                              <span id="uba-blog-icon-spacer" />
                              <i className="fa fa-heart-o" /> 211
                            </small>
                          </span>
                        </p>
                        <h5 className="card-title">Keep it simple and beautiful, fun and functional</h5>
                        <p className="card-text"> Introducing our brand New UBA app. Download and experience for yourself.. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a className="view-blog hvr-bounce-to-left" href=".">READ MORE</a>	 
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="uba-card">
                      <img className="card-img-top" src="images/blog-image.jpg" alt="Blog" />
                      <div className="card-body">
                        <p className="blog-para-1">
                          <span><small className="text-muted">June 16, 2020</small></span>
                          <span> 
                            <small className="text-muted cat uba-blog-icon">
                              <i className="fa fa-comment-o" /> 22
                              <span id="uba-blog-icon-spacer" />
                              <i className="fa fa-heart-o" /> 211
                            </small>
                          </span>
                        </p>
                        <h5 className="card-title">Keep it simple and beautiful, fun and functional</h5>
                        <p className="card-text"> Introducing our brand New UBA app. Download and experience for yourself.. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a className="view-blog hvr-bounce-to-left" href=".">READ MORE</a>	 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab_photos">
                <p>
                  Howdy, I'm in Tab 2. Wating for Photos
                </p>
                <p>
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
                </p>
              </div>
              <div className="tab-pane" id="tab_videos">
                <p>
                  Howdy, I'm in Tab 3. Wating for videos
                </p>
                <p>
                  Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  {/*Media*/}
  {/**/}
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-10">
          <h1>Get it now</h1>
          <p>Available on both App Store and Play Store.</p>
          <div className="wow fadeInRight" data-wow-delay="0.5s">
            <a className="google-play" href=" "><img src="images/google-play.svg" alt="" /></a>
            <a className="apple-store" href=" "><img src="images/apple-store.svg" alt="" /></a>
          </div>
        </div>
        <div className="col-md-1" />
      </div>
    </div>
  </div>
</div>

        )
    }
}

export default Home

import React, { Component } from 'react';

export class Blog extends Component {
    render() {
        return (
            <div>
  <div className="banner-blog">
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
            <a className="view hvr-bounce-to-left" href="login.html">LOG OUT</a>	 
          </ul>
        </div>
        {/* script-for-menu */}
        {/* script-for-menu */}	  	
        <div className="logo wow fadeInLeft" data-wow-delay="0.5s">
          <a href="index.html"><img src="images/UBA-Logo.svg" alt="UBA Logo" /></a>
        </div>
        <div className="clearfix" />
      </div>
      <div className="blog-banner-info">
        <div className="col-md-1" />
        <div className="col-md-7 banner-text wow fadeInRight" data-wow-delay="0.5s">
          <h3>Latest News</h3>
          <h1>Keep it simple and beautiful, fun and functional </h1>
        </div>
        <div className="col-md-4 banner-pic wow fadeInLeft" data-wow-delay="0.5s">
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </div>
  {/**/}
  {/*Main Blog Starts*/}
  <div className="row uba-card-group00 uba-big-card-group">
    <div className="col-md-2">
    </div>
    <div className="col-md-5">
      <div className="uba-big-card">
        <img className="card-img-top" src="images/blog-image.jpg" alt="Blog" />
        <div className="card-body00 big-card-body">
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
          <p className="card-text"> Introducing our brand New UBA app. Download and experience for yourself.. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p className="card-text"> Introducing our brand New UBA app. Download and experience for yourself.. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="blog-card-dark">
            <span className="blog-quote"><i className="fa fa-quote-left" aria-hidden="true" /></span>
            <h4>Keep it simple and beautiful, fun and functional, simple and beautiful, fun and functional</h4>
          </div>
          <p className="card-text"> Introducing our brand New UBA app. Download and experience for yourself.. Some quick example text to build on the card title and make up the bulk of the card's content.
            Introducing our brand New UBA app. Download and experience for yourself.. Some quick example text to build on the card title and make up the bulk of the card's content.
            Introducing our brand New UBA app. Download and experience for yourself.. Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <div className="blog-bottom-spacer" />
        </div>
      </div>
    </div>
    <div className="col-md-1" />
    <div className="col-md-2 blog-left-top-spacer">
      <div className="blog-left-head">
        <h4>Most Popular</h4>
      </div>
      <div className="blog-left-articles">
        <h4>All site communication and data transfer are secured and </h4>
        <p className="blog-para-1">
          <span><small className="text-muted">June 16, 2020</small></span>
        </p>
      </div>
      <div className="blog-left-articles">
        <h4>All site communication and data transfer are secured and </h4>
        <p className="blog-para-1">
          <span><small className="text-muted">June 16, 2020</small></span>
        </p>
      </div>
    </div>
  </div>
  {/*Main Blog Ends*/}
  {/**/}
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-10">
          <h1>Get it now</h1>
          <p>Available on both App Store and Play Store.</p>
          <div className="wow fadeInRight" data-wow-delay="0.5s">
            <a className="google-play" href=" "><img src="images/google-play.svg" alt="Google play store" /></a>
            <a className="apple-store" href=" "><img src="images/apple-store.svg" alt="App store" /></a>
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

export default Blog

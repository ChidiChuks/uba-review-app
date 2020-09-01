import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

export class Feedback extends Component {

  state = {
    themes: [],
    features: [],
    reviews: [],
    replies: {},
    message: [],
  }

  componentDidMount () {
    const userToken = localStorage.getItem( "userToken" );

    // First Axios call for Features
    axios({
      method: "get",
      url:
        "http://invtestsrv00.northcentralus.cloudapp.azure.com/ubareviewapp.service/api/Features/Search?page=0",
      headers: {
        "Authorization": `bearer ${userToken}`,
      },
    }).then((res) => {
      console.log(res.data.Data);

      this.setState({features: res.data.Data.records})
      
    }).catch((error) => {

      console.log(error);

    });

    // Second Axios call for Themes
    axios({
      method: "get",
      url:
        "http://invtestsrv00.northcentralus.cloudapp.azure.com/ubareviewapp.service/api/Themes/Search?page=0",
      headers: {
        "Authorization": `bearer ${userToken}`,
      },
    }).then((res) => {
      console.log(res.data.Data);

      this.setState({themes: res.data.Data.records})
      
    }).catch((error) => {

      console.log(error);

    });

    // Third Axios call for Reviews
    axios({
      method: "get",
      url:
        "http://invtestsrv00.northcentralus.cloudapp.azure.com/ubareviewapp.service/api/Reviews/Search",
      headers: {
        "Authorization": `bearer ${userToken}`,
      },
    }).then((res) => {
      console.log(res.data.Data);

      this.setState({reviews: res.data.Data.records})
      
    }).catch((error) => {

      console.log(error);

    });
  }

  getReplies = (reviewId) => {

    const userToken = localStorage.getItem( "userToken" );

    axios({
      method: "get",
      url:
        `http://invtestsrv00.northcentralus.cloudapp.azure.com/ubareviewapp.service/api/Replies/Search?reviewId=${reviewId}`,
      headers: {
        "Authorization": `bearer ${userToken}`,
      },
    }).then((res) => {
     
      if (res.data.Data.records.length > 0) {

        this.setState({replies: {...this.state.replies, [reviewId]: [...res.data.Data.records]}});

      }

      console.log(this.state.replies);
      
    }).catch((error) => {

      console.log(error);

    });
  }

  createMessage = (AppClientId) => {
    const userToken = localStorage.getItem( "userToken" );

    axios({
      method: "post",
      url:
        `http://invtestsrv00.northcentralus.cloudapp.azure.com/ubareviewapp.service/api/Reviews/Create`,
      headers: {
        "Authorization": `bearer ${userToken}`,
      },
    }).then((res) => {
     
      if (res.data.Data.records.length > 0) {

        console.log(res.data.Data.Comment);

        this.setState({message: {...this.state.replies, [AppClientId]: [...res.data.Data.records]}});

      }
      
    }).catch((error) => {

      console.log(error);

    });

  }

    render() {
        return (
    <div>
      <div className="main-top-intro">
        <div className="bg-layer">
          {/* header */}
          <div className="wrapper">
            <header>
            <div className="top-menu">
                <span className="menu" />
                <ul>
                  <li className="active"><Link to="/home">Home</Link></li>
                  {/* <li><a className="scroll" href="#features">Features</a></li>
                  <li><a className="scroll" href="#overview">Overview</a></li>
                  <li><a className="scroll" href="#how-it-works">How it works</a></li>
                  <li><a className="scroll" href="#media">Media</a></li> */}
                  <Link className="view hvr-bounce-to-left" to="/">LOG OUT</Link>	 
                </ul>
              </div>
              <div className="login-logo-float">
                <h1>
                  <Link to="/home"> <div className="logo" >
                    <img src="images/UBA-logo.svg" alt="United Bank for Africa Logo" /> 
                  </div> </Link>
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
                        {/* <input type="email" placeholder="Email Address" required /> */}
                        <select id="themes" name="Themes" className="uba-feed-options">
                          <option value="SelectTheme">Select Viewed Theme</option>
                          {this.state.themes.map(theme => {
                            return (<option key={theme.id} value={theme.id}>{theme.name}</option>);
                          })}
                          {/* <option value="MidnightRed">Midnight Red</option>
                          <option value="White">White</option>
                          <option value="DarkKnight">Dark Knight</option> */}
                        </select>
                        <select id="featue" name="Features" className="uba-feed-options">
                        <option value="">Select a Feature</option>
                          {this.state.features.map(feature => {
                            return (<option key={feature.id} value={feature.id}>{feature.name}</option>);
                          })}
                          {/* <option value="Dashboard">Dashboard</option>
                          <option value="Dashboard">Feature</option>
                          <option value="Services">Services</option>
                          <option value="Settings">Settings</option>
                          <option value="Accounts">Accounts</option> */}
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


              {/* Testing the review feedback for already registered users */}
              <div className="content-inner-info">
                {this.state.reviews.map(review => {
                  return(<div className="content-Expo-main"  key={review.id}>
                    <p>App Feature: {review.AppFeature}</p>
                    <p>Comment: {review.Comment}</p>
                    <br />
                    {review.ImageUrl && <img src={review.ImageUrl} alt="Images of feedback from App" />}

                    <br />

                    <button className="btn" onClick={() => this.getReplies(review.id)}>View Replies</button>

                    {this.state.replies[review.id] && <div className="content-Expo-main" >
                    <h3>Replies:</h3>
                    {this.state.replies[review.id].map(reply => {
                      return(<p>Comment: {reply.Comment}</p>);
                    })}
                    </div> }

                    <hr />

                  </div>);
                })}
                
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

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import {SignUpRoute} from 'react-router-dom';

export class SignUp extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    const {
      firstname,
      lastname,
      email,
      password,
      confirmpassword,
    } = this.state;
    if (password !== confirmpassword) {
      alert("Password does not match");
      return;
    }
    const user = { firstname, lastname, email, password };
    return axios({
      method: "post",
      url:
        "http://invtestsrv00.northcentralus.cloudapp.azure.com/newums.service/api/Account/SignUp",
      data: user,
      headers: {
        "X-ClientSecret": "/2vINOzySVTPjwae1UmxBouWH4g6/euBnNrBFmMoGyo=",
      },
    })
      .then((res) => {
        localStorage.setItem("userToken", res.data.Data.Token);
        history.push("/pending");
      })
      .catch((error) => {
        console.log(error.response.data.ResponseMessage);
        alert(error.response.data.ResponseMessage);
      });
  };

  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      confirmpassword,
    } = this.state;
    return (
      <div className="main-top-intro">
        <div className="bg-layer">
          {/* header */}
          <div className="wrapper">
            <header>
              <div className="login-logo-float">
                <h1>
                  <Link className="logo" to="/home">
                    <img
                      src="images/UBA-logo.svg"
                      alt="Logo of the United Bank for Africa"
                    />
                  </Link>
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
                    <p>
                      Introducing our brand New UBA app. Download and experience
                      for yourself.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="content-inner-info">
                  <div className="content-login-right-main">
                    <h3>Sign up</h3>
                    <div className="form-w3ls-left-info">
                      <form
                        onSubmit={this.handleSubmit}
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                      >
                        <input
                          type="email"
                          placeholder="First Name"
                          required
                          value={firstname}
                          name="firstname"
                          onChange={this.handleChange}
                        />
                        <input
                          type="email"
                          placeholder="Last Name"
                          value={lastname}
                          name="lastname"
                          onChange={this.handleChange}
                          required
                        />
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={email}
                          name="email"
                          onChange={this.handleChange}
                          required
                        />
                        <input
                          type="password"
                          placeholder="Create Password"
                          value={password}
                          name="password"
                          onChange={this.handleChange}
                          required
                        />
                        <input
                          type="password"
                          placeholder="Retype Password"
                          value={confirmpassword}
                          name="confirmpassword"
                          onChange={this.handleChange}
                          required
                        />
                        <div className="bottom">
                          <button className="btn" type="submit">
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <br />
                <p style={{ color: "white" }}>
                  Have an account?{" "}
                  <Link to="/" style={{ color: "white", fontWeight: "bold" }}>
                    SignIn
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;

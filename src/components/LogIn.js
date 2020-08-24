import React, { Component } from "react";
import axios from "axios";

export class LogIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Function to authenticate user with UMS
  login = () => {
    const { email, password } = this.state;
    const user = { email, password };
    return axios({
      method: "post",
      url:
        "http://invtestsrv00.northcentralus.cloudapp.azure.com/newums.service/api/Account/SignIn",
      data: user,
      headers: {
        "X-ClientSecret": "/2vINOzySVTPjwae1UmxBouWH4g6/euBnNrBFmMoGyo=",
      },
    });
  };

  // Function to check if the user has been approved
  checkValidUser = async (userId) => {
    let result = false;
    await axios({
      method: "get",
      url: `http://invtestsrv00.northcentralus.cloudapp.azure.com/ubareviewapp.service/api/Users/Detail?id=${userId}`,
    })
      .then((res) => {
        result = res.data.Data.userstatustext === "approved" ? true : false;
      })
      .catch((err) => {
        console.log(err);
        result = false;
      });

    return result;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { history } = this.props;
    try {
      const loginUser = await this.login();
      localStorage.setItem("userToken", loginUser.data.Data.Token); // Successful Login data, you can get the token with loginUser.data.Data.Token
      const validUser = await this.checkValidUser(loginUser.data.Data.User.Id); // Returns true or false to check if user has been approved to know which page to redirect
      if (validUser) {
        console.log("valid user, redirect to feedback page", this.props);
        history.push("/feedback");
      } else {
        console.log("invalid user redirect to Pending page");
        history.push("/pending");
      }
    } catch (error) {
      console.log(error.response.data.ResponseMessage);
      alert(error.response.data.ResponseMessage);
    }
  };

  render() {
    const { email, password } = this.state;
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
                      <p>
                        Introducing our brand New UBA app. Download and
                        experience for yourself.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="content-inner-info">
                    <div className="content-login-right-main">
                      <h3>Sign in</h3>
                      <div className="form-w3ls-left-info">
                        <form onSubmit={this.handleSubmit}>
                          <input
                            value={email}
                            name="email"
                            onChange={this.handleChange}
                            type="email"
                            placeholder="Email Address"
                            required
                          />
                          <input
                            value={password}
                            name="password"
                            onChange={this.handleChange}
                            type="password"
                            placeholder="Password"
                            required
                          />
                          <label className="form-check-label">
                            <input id="inputAddList" type="checkbox" />
                            <span> Remember </span>
                          </label>
                          <div className="bottom">
                            <button className="btn" type="submit">
                              Login
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <br />
                  <p style={{ color: "white" }}>
                    Don't have an account? <b>SignUp</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;

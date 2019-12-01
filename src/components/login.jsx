import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: false
  };

  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };

    axios.post("/login", user).then(res => {
      // sending req to verify login
      const data = res.data;
      if (data.username) {
        console.log(data.username, "Login Data");
        this.props.history.push("/home");
      }
    });

    this.setState({
      username: "",
      password: "",
      error: true
    });
  };

  render() {
    console.log(this.state.error);

    return (
      <div>
        <div className="login-view">
          <div className="container col-md-4 mt-5 bg-light rounded shadow p-4">
            <h3>Login</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Username: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="form-group">
                <label>Password: </label>
                <input
                  type="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
              <Link to="/signup" className="btn btn-light">
                Sign up here..
              </Link>
            </form>
            {this.state.error === true && (
              <div className="alert alert-danger" role="alert">
                Wrong Credentials! try again or SignUp for New one
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

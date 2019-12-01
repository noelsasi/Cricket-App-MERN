import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    fullname: "",
    email: ""
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

  onChangeFullname = e => {
    this.setState({
      fullname: e.target.value
    });
  };

  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
      fullname: this.state.fullname,
      email: this.state.email
    };

    axios.post("/register", user).then(res => {
      console.log(res.data.list);
      const data = res.data.list;
      console.log(data.length);
      if (data.length > 0) {
        this.props.history.push("/");
        window.location.href = "/";
      } else {
        this.props.history.push("/signup");
      }
    });

    this.setState({
      username: "",
      password: "",
      fullname: "",
      email: ""
    });
  };

  render() {
    return (
      <div className="container col-md-4 mt-5 bg-light rounded shadow p-4">
        <h3>Sign Up</h3>
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
            <label>FullName: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.fullname}
              onChange={this.onChangeFullname}
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
            <label>Email: </label>
            <input
              type="email"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Singup" className="btn btn-primary" />
          </div>
          <Link to="/" className="btn btn-light">
            Login here..
          </Link>
        </form>
      </div>
    );
  }
}

export default SignUp;

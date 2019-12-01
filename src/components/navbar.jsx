import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function navbar(props) {
  function handleLogout() {
    axios
      .get("/logout")
      .then(response => {
        console.log(response.data, "userData Data");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary d-flex justify-space-around">
        <Link to="/home">
          <div className="navbar-brand brand-text">Indian Cricket League</div>
        </Link>
        <div className="d-flex align-items-center ">
          <h6 className="mr-3 text-light mt-3">
            Hello <kbd>{props.userData.username}!</kbd>
          </h6>
          <Link to="/">
            <button className="btn btn-light btn-md" onClick={handleLogout}>
              Logout
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default navbar;

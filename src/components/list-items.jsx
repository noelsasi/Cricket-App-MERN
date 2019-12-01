import React, { Component } from "react";
import { Link } from "react-router-dom";

// importing images
import srh from "../logos/srh.png";
import rcb from "../logos/rcb.png";
import dd from "../logos/dd.png";
import gl from "../logos/gl.png";
import kkr from "../logos/kkr.png";
import kp from "../logos/kp.png";
import mi from "../logos/mi.png";
import rps from "../logos/rps.png";
import csk from "../logos/csk.png";
import dc from "../logos/dc.png";
import rr from "../logos/rr.png";
import kt from "../logos/kt.png";
import pw from "../logos/pw.png";

class ListItem extends Component {
  render() {
    const match = this.props.match;

    return (
      <div className="card card-size mr-3 mb-2">
        <div className="card-body">
          <div className="img-handler">
            <div className="img1 text-center">
              <img
                className="team-logo"
                src={this.logosetter(match.team1)}
                alt=""
              />
              <p className="text-small">{match.team1}</p>
            </div>

            <span className="badge badge-warning">vs</span>
            <div className="img2 text-center">
              <img
                className="team-logo"
                src={this.logosetter(match.team2)}
                alt=""
              />
              <p className="text-small">{match.team2}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="float-left">
            <span className="badge badge-info mr-2 fa fa-calendar text-dark">
              <span className="myfonts ml-1">{match.season}</span>
            </span>
            <span className="badge badge-secondary text-light fa fa-map-marker">
              <span className="myfonts ml-1">{match.city}</span>
            </span>
          </div>
          <div className="float-right">
            <Link to={`/match/${match._id}`}>
              <button className="btn btn-primary btn-sm-custom">View</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  // function to get team matched logos
  logosetter(team) {
    let image = "";
    if (team === "Sunrisers Hyderabad") {
      image = srh;
    }
    if (team === "Royal Challengers Bangalore") {
      image = rcb;
    }
    if (team === "Mumbai Indians") {
      image = mi;
    }
    if (team === "Rising Pune Supergiant") {
      image = rps;
    }
    if (team === "Rising Pune Supergiants") {
      image = rps;
    }
    if (team === "Gujarat Lions") {
      image = gl;
    }
    if (team === "Kolkata Knight Riders") {
      image = kkr;
    }
    if (team === "Kings XI Punjab") {
      image = kp;
    }
    if (team === "Delhi Daredevils") {
      image = dd;
    }
    if (team === "Deccan Chargers") {
      image = dc;
    }
    if (team === "Rajasthan Royals") {
      image = rr;
    }
    if (team === "Chennai Super Kings") {
      image = csk;
    }
    if (team === "Kochi Tuskers Kerala") {
      image = kt;
    }
    if (team === "Pune Warriors") {
      image = pw;
    }
    if (team === "Delhi Capitals") {
      image = dd;
    }

    return image;
  }
}

export default ListItem;

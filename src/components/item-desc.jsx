import React, { Component } from "react";
import axios from "axios";
import Navbar from "./navbar";

class MatchDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matchData: {},
      userData: {}
    };
  }

  componentDidMount() {
    axios // api call to get all matches data
      .get(`/matches/${this.props.match.params.id}`)
      .then(response => {
        console.log(response.data, "Each Match Data");
        this.setState({ matchData: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
    axios // api call to get users data
      .get("/user")
      .then(response => {
        console.log(response.data, "userData Data");
        this.setState({
          userData: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    const match = this.state.matchData;
    return (
      <div>
        <Navbar userData={this.state.userData} />

        <div className="container mt-5">
          <div className="card">
            <h5 className="card-header text-md-center">
              {match.team1} vs {match.team2}
            </h5>
            <div className="card-body ">
              <h5 className="card-title mt-3 text-center">
                <span className="bg-success p-2 rounded text-light">
                  {match.winner} won the match by {match.win_by_runs} runs
                </span>
              </h5>
              <div className="card-inside p-2 text-light">
                <div className="card-left bg-info rounded p-3 mr-2">
                  <p className="card-text">
                    <span>Player of Match : </span> {match.player_of_match}
                  </p>
                  <p className="card-text">
                    <span>Toss winner : </span> {match.toss_winner}
                  </p>
                  <p className="card-text">
                    <span>Toss Decision : </span> {match.toss_decision}
                  </p>
                  <p className="card-text">
                    <span>Umpire 1 : </span> {match.umpire1}
                  </p>
                  <p className="card-text">
                    <span>Umpire 2 : </span> {match.umpire2}
                  </p>
                  <p className="card-text">
                    <span>Umpire 3 : </span> {match.umpire3}
                  </p>
                </div>
                <div className="card-right bg-info rounded p-3">
                  <p className="card-text">
                    <span>Team 1 : </span> {match.team1}
                  </p>
                  <p className="card-text">
                    <span>Team 2 : </span> {match.team2}
                  </p>
                  <p className="card-text">
                    <span>Venue : </span> {match.venue}
                  </p>
                  <p className="card-text">
                    <span>City : </span> {match.city}
                  </p>
                  <p className="card-text">
                    <span>Date : </span> {match.date}
                  </p>
                  <p className="card-text">
                    <span>Season : </span> {match.season}
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

export default MatchDescription;

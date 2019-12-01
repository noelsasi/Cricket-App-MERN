import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

class prediction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team1: "",
      team2: "",
      venue: "",
      batting: "",
      winner: "",
      counts: {}
    };
    this.handleTeam1 = this.handleTeam1.bind(this);
    this.handleTeam2 = this.handleTeam2.bind(this);
    this.handleVenue = this.handleVenue.bind(this);
    this.handleBatting = this.handleBatting.bind(this);
    this.handlePredict = this.handlePredict.bind(this);
  }

  handleTeam1(e) {
    this.setState({ team1: e.value });
  }
  handleTeam2(e) {
    this.setState({ team2: e.value });
  }
  handleVenue(e) {
    this.setState({ venue: e.value });
  }
  handleBatting(e) {
    this.setState({ batting: e.value });
  }

  handlePredict(e) {
    const data = {
      team1: this.state.team1,
      team2: this.state.team2
    };
    axios
      .post("/result", data)
      .then(response => {
        console.log(response.data, "Prediction Data");
        this.setState({
          winner: response.data.winner,
          counts: response.data.counts
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.team1, "teams");
    const teams = this.props.matches.map(s => s.team1);
    const venues = this.props.matches.map(s => s.city);
    const teamsList = [...new Set(teams)];
    const venuesList = [...new Set(venues)];
    let batarray = [this.state.team1, this.state.team2];
    const res = array => {
      return array.map(team => {
        return {
          value: team,
          label: team
        };
      });
    };
    const options = res(teamsList);
    const venueOptions = res(venuesList);
    const battingOptions = res(batarray);
    console.log(this.state.counts, "counts");

    return (
      <div className="text-center">
        <b>Predictions</b>
        <div className="pred-wrapper mt-2">
          <div className="team-1">
            <Select
              className="dropdown"
              options={options}
              onChange={this.handleTeam1}
              placeholder="Team 1"
            />
          </div>
          <h6 className="mt-3">
            <span className="badge badge-danger">VS</span>
          </h6>
          <div className="team-2 mt-3">
            <Select
              className="dropdown"
              options={options}
              onChange={this.handleTeam2}
              placeholder="Team 2"
            />
          </div>
          <h6 className="mt-3">
            <span className="badge badge-danger">and</span>
          </h6>
          <div className="venue mt-3">
            <Select
              className="dropdown"
              options={venueOptions}
              onChange={this.handleVenue}
              placeholder="Venue"
            />
          </div>
          <h6 className="mt-3">
            <span className="badge badge-danger">and</span>
          </h6>
          <div className="choice mt-3">
            <Select
              className="dropdown"
              options={battingOptions}
              onChange={this.handleBatting}
              placeholder="First Batting"
            />
          </div>
          <div className="predict mt-4">
            <button
              className="btn btn-sm btn-primary"
              onClick={this.handlePredict}
            >
              Predict...
            </button>
          </div>
          <div className="result mt-3">
            {this.state.winner.length > 0 && (
              <div>
                <div className="bg-success rounded p-2 fa fa-thumbs-up">
                  <span className="myfonts text-light">
                    <b> {this.state.winner} </b>
                  </span>
                </div>
                <div className="ratio mt-3">
                  <p>ratio :</p>
                  <span className="text-light">
                    <b> {JSON.stringify(this.state.counts)} </b>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default prediction;

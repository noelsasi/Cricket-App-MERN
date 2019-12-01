import React, { Component } from "react";
import ListItems from "./list-items";
import Pagination from "./pagination";
import axios from "axios";
import loader from "../logos/loading.svg";
import Search from "./search";
import Dropdown from "./dropdown";
import FavouriteTeam from "./favouriteTeam";
import Navbar from "./navbar";
import Prediction from "./prediction";

class listContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: [],
      currentPage: 1,
      matchesPerPage: 40,
      searchData: [],
      userData: {},
      bgClass: ""
    };

    this.searchResults = this.searchResults.bind(this);
    this.favTeam = this.favTeam.bind(this);
  }

  componentDidMount() {
    axios
      .get("/matches")
      .then(response => {
        console.log(response.data, "Matches Data");
        this.setState({
          matches: response.data.list,
          searchData: response.data.list
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get("/user")
      .then(response => {
        console.log(response.data, "userData Data");
        this.setState({
          userData: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
        window.location.href = "/";
      });
  }

  searchResults(searchText, type) {
    const regex = new RegExp(searchText, "gi");
    const matches = this.state.matches;
    const searchMatch = matches.filter(match => {
      if (type === "searchFilter") {
        return match.team1.match(regex);
      } else {
        return match.season.match(regex);
      }
    });

    this.setState({
      searchData: searchMatch
    });
  }

  favTeam(value) {
    // const favteam = this.state.userData.favTeam;
    let classes = "row view-container col-md-12";
    if (value === "Sunrisers Hyderabad") {
      this.setState({ bgClass: "srh" });
    }
    if (value === "Royal Challengers Bangalore") {
      this.setState({ bgClass: "rcb" });
    }
    if (value === "Chennai Super Kings") {
      this.setState({ bgClass: "csk" });
    }
    if (value === "Mumbai Indians") {
      this.setState({ bgClass: "mi" });
    }
    if (value === "Gujarat Lions") {
      this.setState({ bgClass: "gl" });
    }
    if (value === "Rising Pune Supergiant") {
      this.setState({ bgClass: "rps" });
    }
    if (value === "Kolkata Knight Riders") {
      this.setState({ bgClass: "kkr" });
    }

    classes = `row view-container col-md-12 ${this.state.bgClass}`;
    return classes;
  }

  render() {
    const indexOfLastMatch = this.state.currentPage * this.state.matchesPerPage;
    const indexOfFirstMatch = indexOfLastMatch - this.state.matchesPerPage;
    const currentMatch = this.state.searchData.slice(
      indexOfFirstMatch,
      indexOfLastMatch
    );

    const paginate = pageNumber => this.setState({ currentPage: pageNumber });

    return (
      <div>
        <div>
          <Navbar userData={this.state.userData} />
          <div className={this.favTeam()}>
            <div className="list-container col-md-10">
              <div className="search-container">
                <Search searchResults={this.searchResults} />
              </div>
              <div className="list-wrapper row">
                {currentMatch.length > 0 ? (
                  currentMatch.map(match => (
                    <ListItems
                      userData={this.props.userData}
                      key={match.id}
                      match={match}
                      matches={this.state.matches}
                    />
                  ))
                ) : (
                  <div className="img-container">
                    <img
                      className="loader col-md-12"
                      src={loader}
                      alt="Loader"
                    />
                  </div>
                )}
              </div>
              <div className="pagination">
                <Pagination
                  matchesPerPage={this.state.matchesPerPage}
                  totalMatches={this.state.searchData.length}
                  paginate={paginate}
                />
              </div>
            </div>
            <div className="col-md-2 p-0">
              <div className="top-wrapper col-md-12">
                <Dropdown
                  matches={this.state.matches}
                  searchResults={this.searchResults}
                />
                <FavouriteTeam
                  matches={this.state.matches}
                  favTeam={this.favTeam}
                />
              </div>
              <div className="second-wrapper col-md-12">
                <Prediction matches={this.state.matches} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default listContainer;

import React from "react";
import Select from "react-select";
import axios from "axios";

function favouriteTeam(props) {
  const teams = props.matches.map(s => s.team1);
  const teamList = [...new Set(teams)];

  // Pure function to generate options from an array
  const optionValues = array => {
    return array.map(item => {
      return {
        value: item,
        label: item
      };
    });
  };
  const options = optionValues(teamList);

  function handleChange(e) {
    props.favTeam(e.value);
    const newList = {
      favTeam: e.value
    };

    axios.post("/user/updateTeam", newList).then(res => console.log(res.data)); // api req to update favTeam
  }

  return (
    <div>
      <p className="m-0 p-0">
        Select Fav team <span className="fa fa-users"></span>
      </p>
      <Select
        className="fav-team"
        options={options}
        onChange={handleChange}
        placeholder="Fav team"
      />
    </div>
  );
}
export default favouriteTeam;

import React from "react";
import Select from "react-select";

function dropdown(props) {
  const seasons = props.matches.map(s => s.season);
  const seasonsList = [...new Set(seasons)];
  // console.log(seasonsList, "seasonsList");

  // Pure function to generate options from an array
  const optionValues = array => {
    return array.map(item => {
      return {
        value: item,
        label: item
      };
    });
  };
  const options = optionValues(seasonsList);

  function handleChange(e) {
    props.searchResults(e.value, "filter");
    console.log(e.value, "selectedOption");
  }

  return (
    <div className="dropdown-container">
      <p className="m-0 p-0">
        Filter <span className="fa fa-filter"></span>
      </p>
      <Select
        className="dropdown"
        options={options}
        onChange={handleChange}
        placeholder="Season"
      />
    </div>
  );
}

export default dropdown;

import React from "react";

function search(props) {
  const { searchResults } = props;

  function handleChange(e) {
    const value = e.target.value;
    searchResults(value, "searchFilter");
  }
  return (
    <div className="search">
      <span role="img" aria-label="search-icon">
        🔍
      </span>
      <input placeholder="Search for a Match" onChange={handleChange} />
    </div>
  );
}

export default search;

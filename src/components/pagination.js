import React from "react";

const Pagination = ({ matchesPerPage, totalMatches, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMatches / matchesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item mt-3">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

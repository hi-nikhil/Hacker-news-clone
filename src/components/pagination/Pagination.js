import "./Pagination.css";

import React, { useState } from "react";

const Pagination = ({ totalStories, storiesPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalStories / storiesPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const maxPageNumbersToShow = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1}>
        Previous
      </button>

      {pageNumbers.map((page) => (
        <button key={page} onClick={() => handlePageChange(page)} className={page == currentPage ? "active" : ""}>
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

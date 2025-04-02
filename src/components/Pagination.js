import React from 'react';

function Pagination({ currentPage, onPageChange, hasNextPage }) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (hasNextPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <button disabled={currentPage === 1} onClick={handlePrevious}>
        Previous
      </button>
      <span style={{ margin: '0 1rem' }}>Page {currentPage}</span>
      <button disabled={!hasNextPage} onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default Pagination;

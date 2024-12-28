import "./Pagination.css";

const Pagination = ({
  totalRecords,
  recordsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  function handlePrev() {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }

  function handleNext() {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }

  return (
    <div className="pagination-container">
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

import React from "react";
import "./Pagination.css";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(currentPage);

  return (
    <div>
      <div className="pagination">
        {pageNumbers.map(pageNum => {
          let classes =
            currentPage === pageNum ? "page-item-active" : "page-item";
          return (
            <span key={pageNum} className={classes}>
              <a className="p-link" onClick={() => paginate(pageNum)}>
                {pageNum}
              </a>
            </span>
          );
        })}

        {/* <span>&laquo;</span> */}
      </div>
    </div>
  );
};

export default Pagination;

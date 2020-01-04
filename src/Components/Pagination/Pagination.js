import React from "react";
import "./Pagination.css";

function Pagination(props) {
  return (
    <div>
      <div className="pagination">
        <span>&laquo;</span>
        <span className="active">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
    </div>
  );
}

export default Pagination;

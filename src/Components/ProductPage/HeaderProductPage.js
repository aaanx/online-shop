import React from "react";

function HeaderProductPage(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 titleSection">
          <h2>{props.title} </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <img className="productImg" src={props.image.url} />
        </div>
        <div className="col-lg-6">
          <h2>{props.price} zł </h2>
          <p>Tagi: {props.tags.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderProductPage;

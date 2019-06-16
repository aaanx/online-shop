import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Product.css";
import ButtonAdd from "./ButtonAdd.js";

function Product(props) {
  return (
    <div className="col-lg-4 col-md-4 col-sm-12 box">
      <div className="boxContent">
        <img src={props.image.url} />
        <div className="productDescription" style={productDescriptionStyle}>
          <Link to={`/${props.id}`} style={{ color: "rgba(211, 84, 0, 1)" }}>
            <p className="productTitle">{props.title}</p>
          </Link>
          <p className="productPrice">{props.price} zł</p>
          <ButtonAdd {...props} />
        </div>
      </div>
    </div>
  );
}

const productDescriptionStyle = {
  marginTop: "15px"
};

export default Product;

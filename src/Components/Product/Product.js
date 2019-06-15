import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './productBox.css';
import ButtonAdd from './ButtonAdd.js';


function ProductBox(props) {


    return (
        <div className="col-lg-4 col-md-4 col-sm-12 box">
            <div className="boxContent">
                <img src={props.image.url} />
                <Link to={`/${props.id}`}><p className="productTitle">{props.title}</p></Link>
                <p className="productPrice">{props.price} zł</p>
                <ButtonAdd {...props} />
            </div>
        </div>

    )
}

export default ProductBox;
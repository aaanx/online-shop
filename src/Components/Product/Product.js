import React from 'react';
import './productBox.css';

function ProductBox(props) {
    return (
        <div className="col-lg-4 col-md-4 col-sm-12 box">
            <div class="boxContent">
                <img src={props.image.url} />
                <p className="productTitle">{props.title}</p>
                <p className="productPrice">{props.price} zł</p>
            </div>
        </div>
    )
}

export default ProductBox;
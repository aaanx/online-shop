import React from 'react';
import HeaderProductPage from './HeaderProductPage.js';
import BodyProductPage from './BodyProductPage.js';


function SingleProduct(props) {
    return (
        <div>
            <HeaderProductPage {...props}></HeaderProductPage>
            <BodyProductPage {...props}></BodyProductPage>
        </div>
    )
}

export default SingleProduct;
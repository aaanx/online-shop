import React from 'react';
import ProductsData from '../productsData.js';
import SingleProduct from '../Components/ProductPage/SingleProduct.js';

function ProductPage({ match }) {
    let addProduct = ProductsData.find(function (product) {
        return product.id == match.params.id;
    });

    return (
        <SingleProduct key={addProduct.id} {...addProduct} />
    )
}

export default ProductPage;

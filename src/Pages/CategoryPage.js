import React from 'react';
import Products from '../productsData.js';
import ProductBox from '../Components/Product/Product.js';


function Category(props) {
    return (
        <div className="container">
            <div className="row">
                {Products.map(product => {
                    return <ProductBox key={product.id} {...product} addToBasket={props.addToBasket} />
                })}
            </div>
        </div>
    )
}

export default Category;
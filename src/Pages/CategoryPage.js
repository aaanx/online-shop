import React from 'react';
import Products from '../productsData.js';
import ProductBox from '../Components/Product/Product.js';


function Category() {
    return (

        <div className="container">
            <div className="row">
                {Products.map(product => {
                    return <ProductBox key={product.id} {...product} />
                })}
            </div>
        </div>
    )
}

export default Category;
import React from "react";
import Products from "../productsData.js";
import Product from "../Components/Product/Product.js";

function Category(props) {
  return (
    <div className="container">
      <div className="row">
        {Products.map(product => {
          return (
            <Product
              key={product.id}
              {...product}
              clickAddProduct={props.clickAddProduct}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Category;

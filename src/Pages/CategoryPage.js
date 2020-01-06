import React, { useState } from "react";
import Products from "../productsData.js";
import Product from "../Components/Product/Product.js";
import Pagination from "../Components/Pagination/Pagination.js";

function Category(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  const products = { Products };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Object.values(products)[0].slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="container">
      <div className="row">
        {currentProducts.map(product => {
          return (
            <Product
              key={product.id}
              {...product}
              clickAddProduct={props.clickAddProduct}
            />
          );
        })}
      </div>
      <Pagination />
    </div>
  );
}

export default Category;

import React from 'react';
import ProductData from '../productsData.js';
import SingleProduct from '../Components/ProductPage/SingleProduct';

let element;

function PorductPage(props) {
    console.log(props)
    ProductData.find((item)=>{
        if(item.id === props){
             element = item;
            console.log(element)
             return element
        }
        else{
            return(<h1>error</h1>)
        }
    })
    
    return (
        <SingleProduct key={element.id} {...element} />
    )
}

export default PorductPage;
import React from "react";
import ProductName from "./BasketItem/ProductName";
import ProductQuantity from "./BasketItem/ProductQuantity";
import ProductPrice from "./BasketItem/ProductPrice";
import ProductDelBtn from "./BasketItem/ProductDelBtn";

class BasketItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.basketItems.map(item => {
          return (
            <div className="basketItem" style={basketItemStyle}>
              <ProductName name={item.name} />
              <ProductQuantity
                quantity={item.quantity}
                updateQuantity={this.props.updateQuantity}
                id={item.id}
              />
              <ProductPrice price={item.price} quantity={item.quantity} />
              <ProductDelBtn delBasketItem={this.props.delBasketItem} />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

const basketItemStyle = {
  margin: "20px 0",
  padding: "5px",
  background: "rgba(245, 171, 53, .1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

export default BasketItem;

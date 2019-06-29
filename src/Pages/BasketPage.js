import React from "react";
import BasketItem from "../Components/Basket/BasketItem";
import BasketSum from "../Components/Basket/BasketSum";
import NextBtn from "../Components/Basket/NextBtn";

class BasketPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <BasketItem
          delBasketItem={this.props.delBasketItem}
          basketItems={this.props.basketItems}
          updateQuantity={this.props.updateQuantity}
          updatePrice={this.updatePrice}
        />

        <div className="basketNav" style={basketNavStyle}>
          <BasketSum basketItems={this.props.basketItems} />
          <NextBtn />
        </div>
      </React.Fragment>
    );
  }
}

const basketNavStyle = {
  margin: "20px 5px",
  padding: "5px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "space-between"
};

export default BasketPage;

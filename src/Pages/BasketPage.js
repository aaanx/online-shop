import React from "react";
import BasketItem from "../Components/Basket/BasketItem";
import BasketSum from "../Components/Basket/BasketSum";
import NextBtn from "../Components/Basket/NextBtn";

class BasketPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basketItems: [
        {
          id: 2,
          name: "Browar dodany do koszyka",
          quantity: 17,
          price: 12.99
        },
        {
          id: 3,
          name: "Browar vvvv do koszyka",
          quantity: 1,
          price: 15.99
        },
        {
          id: 4,
          name: "Browar vvvv do koszyka",
          quantity: 1,
          price: 15.99
        }
      ]
    };
  }

  // sum basket products prices
  // sumBasket = () => {
  //   this.state.basketItems.map((basketItem) => {
  //     reduce(currentValue, accumulator)
  //   })
  // };

  // update
  updateQuantity = (quantity, id) => {
    const item = this.state.basketItems.find(item => {
      return item.id == id;
    });
    item.quantity = quantity;
    this.setState({ basketItems: this.state.basketItems });
  };

  // delete product from basket
  delBasketItem = id => {
    const delItem = this.state.basketItems.find(item => {
      return item.id === id;
    });

    const idToDel = this.state.basketItems.indexOf(delItem);
    this.state.basketItems.splice(idToDel, 1);
    this.setState({ basketItems: [...this.state.basketItems] });
  };

  render() {
    return (
      <React.Fragment>
        <BasketItem
          delBasketItem={this.delBasketItem.bind(this)}
          basketItems={this.state.basketItems}
          updateQuantity={this.updateQuantity}
          updatePrice={this.updatePrice}
        />
        ;
        <div className="basketNav" style={basketNavStyle}>
          <BasketSum basketItems={this.state.basketItems} />
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

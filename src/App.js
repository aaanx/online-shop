import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Category from "./Pages/CategoryPage.js";
import "./App.css";
import ProductPage from "./Pages/ProductPage.js";
import BasketPage from "./Pages/BasketPage";

class App extends React.Component {
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
  addToBasket = (el) => {
    let nowyObiekt = {
      id: el.id,
      name: el.title,
      quantity: 1,
      price: el.price
    }
    this.setState({
      basketItems: [
        ...this.state.basketItems,
        nowyObiekt
      ]
    })
    console.log([
      ...this.state.basketItems,
      nowyObiekt
    ])
  }
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={() => <Category
              addToBasket={this.addToBasket.bind(this)} />} />
            <Route exact
              path="/Basket"
              component={() => <BasketPage
                updateQuantity={this.updateQuantity.bind(this)}
                delBasketItem={this.delBasketItem.bind(this)}
                basketItems={this.state.basketItems} />} />
            <Route exact path="/:id" component={ProductPage} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Category from "./Pages/CategoryPage.js";
import "./App.css";
import ProductPage from "./Pages/ProductPage.js";
import BasketPage from "./Pages/BasketPage";
import Header from "./Layout/Header.js";
import Footer from "./Layout/Footer.js";
import AuthPage from "./Pages/AuthPage.js";
import AddToBasketAlert from "./Components/Basket/AddToBasketAlert.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basketItems: [],
      isClicked: false
    };
  }

  // update product quantity
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

  // add product to basket
  addToBasket = el => {
    let foundBasketItem = this.state.basketItems.find(basketItem => {
      return basketItem.id === el.id;
    });
    if (foundBasketItem) {
      this.updateQuantity(foundBasketItem.quantity + 1, foundBasketItem.id);
    } else {
      let newBasketItem = {
        id: el.id,
        name: el.title,
        quantity: 1,
        price: el.price
      };
      this.setState({
        basketItems: [...this.state.basketItems, newBasketItem]
      });
    }
  };

  addToBasketAlert = () => {
    this.setState({
      isClicked: true
    });
    setTimeout(() => {
      this.setState({
        isClicked: false
      });
    }, 1000);
  };

  clickAddProduct = el => {
    this.addToBasket(el);
    this.addToBasketAlert();
  };

  render() {
    return (
      <Router>
        <div className="pageWrapper" style={pageWrapperStyle}>
          <Header />
          {this.state.isClicked === true ? (
            <AddToBasketAlert showAlert={this.props} />
          ) : null}
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Category clickAddProduct={this.clickAddProduct.bind(this)} />
              )}
            />
            <Route
              exact
              path="/basket"
              component={() => (
                <BasketPage
                  updateQuantity={this.updateQuantity.bind(this)}
                  delBasketItem={this.delBasketItem.bind(this)}
                  basketItems={this.state.basketItems}
                />
              )}
            />
            <Route exact path="/auth" component={AuthPage} />
            <Route exact path="/:id" component={ProductPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const pageWrapperStyle = {
  position: "relative",
  display: "block",
  width: "100%",
  minHeight: "100%"
};

export default App;

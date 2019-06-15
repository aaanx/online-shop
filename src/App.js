
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Category from "./Pages/CategoryPage.js";
import "./App.css";
import ProductPage from "./Pages/ProductPage.js";
import BasketPage from "./Pages/BasketPage";
import Header from './Layout/Header.js';

function App() {
  return (
    <Router>
      <>
      <Header />
      <Switch>
          <Route exact path="/" component={Category} />
          <Route exact path="/Basket" component={BasketPage} />
          <Route exact path="/:id" component={ProductPage} />
        </Switch>
      </>
    </Router>

  );
}

export default App;

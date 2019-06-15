import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Category from './Pages/CategoryPage.js';
import productPage from './Pages/ProductPage.js';

import './App.css';
import ProductPage from './Pages/ProductPage.js'


function App() {
  return (
    <Router>
      <>
        <Category />

        <Route exact path="/:id" component={productPage} />
      </>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Category from './Pages/CategoryPage.js';
import './App.css';
import ProductPage from './Pages/ProductPage.js'


function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Category} />
          <Route exact path="/:id" component={ProductPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

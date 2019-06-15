import React from "react";
import FaBeer from 'react-icons/lib/fa/beer';
import { BrowserRouter as Router } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <div style={{ paddingLeft: "97%" }}>
        <button  onClick={this.basket}><Router><link to="/Pages/BasktePages/"><FaBeer /></link></Router></button>
      </div>
    );
  }
}

export default Header;

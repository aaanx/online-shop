import React from "react";
import FaBeer from 'react-icons/lib/fa/beer';
import { BrowserRouter as Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <div style={{ paddingLeft: "97%" }}>
        <button onClick={this.basket}>
          <Link to="/Pages/BasktePages/">
            <FaBeer />
          </Link>
        </button>
      </div>
    );
  }
}

export default Header;

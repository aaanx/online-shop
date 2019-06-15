import React from "react";
import { BrowserRouter as Router, Route } from "...\node_modules\react";
import FaBeer from "react-icons/lib/fa/bear";
class Header extends React.Component {
  render() {
    return (
      <div style={{ paddingLeft: "97%" }}>
        <Router>
          <button onClick={this.basket}>
            <Link to="/BasketPage/">
              <FaBear />
            </Link>
            <Route exact path="/BasketPage" component={Basket} />
          </button>
        </Router>
        <button onClick={this.counter}>Licznik</button>
      </div>
    );
  }
}

export default Header;

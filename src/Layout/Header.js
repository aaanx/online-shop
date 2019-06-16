import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header" style={headerStyle}>
        <i className="fa fa-beer beerIcon" style={beerIconStyle} />
        <p className="headerTitle" style={headerTitleStyle}>
          Online Beer Shop
        </p>
        <button
          onClick={this.basket}
          className="basketBtn"
          style={basketBtnStyle}
        >
          <Link to="/Basket/" style={{ float: "right" }}>
            <i
              className="fa fa-shopping-cart basketIcon"
              style={basketIconStyle}
            />
          </Link>
        </button>
      </div>
    );
  }
}

const headerStyle = {
  background: "rgba(245, 171, 53, .6)",
  width: "100%",
  height: "10vh",
  minHeight: "50px",
  marginBottom: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

const beerIconStyle = {
  fontSize: "30px",
  display: "block",
  padding: "5px 30px"
};

const headerTitleStyle = {
  fontSize: "25px",
  fontFamily: "'Open Sans', sans-serif",
  margin: "0",
  marginLeft: "30px",
  letterSpacing: "10px"
};

const basketBtnStyle = {
  border: "none",
  outline: "none",
  background: "transparent",
  padding: "5px 30px"
};

const basketIconStyle = {
  display: "block",
  fontSize: "30px"
};

export default Header;

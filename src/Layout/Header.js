import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header" style={headerStyle}>
        <i className="fa fa-beer beerIcon" style={beerIconStyle} />
        <p className="headerTitle" style={headerTitleStyle}>
          Online Beer Shop
        </p>
        <Link to="/basket" style={basketBtnStyle}>
          <i
            className="fa fa-shopping-cart basketIcon"
            style={basketIconStyle}
          />
        </Link>
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
  padding: "5px 30px",
  float: "right"
};

const basketIconStyle = {
  display: "block",
  fontSize: "30px",
  color: '#000'
};

export default Header;

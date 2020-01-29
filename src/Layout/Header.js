import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-md navbar-light d-flex"
        style={headerStyle}
      >
        <i className="fa fa-beer" style={iconStyle}></i>
        <Link to="/" style={{ textDecoration: "none" }} className="mr-auto p-2">
          <a
            href="#"
            className="navbar-brand mr-auto p-2 headerTitle"
            style={headerTitleStyle}
          >
            Beer Corner
          </a>
        </Link>
        <Link to="/about" className="nav navbar-nav p-2" style={linkStyle}>
          <a href="#" className="nav-link">
            About
          </a>
        </Link>
        <Link to="/contact" className="nav navbar-nav p-2" style={linkStyle}>
          <a href="#" className="nav-link">
            Contact
          </a>
        </Link>
        <form className="form-inline my-2 my-lg-0 p-2">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <Link
          to="/basket"
          style={basketBtnStyle}
          className="nav navbar-nav navbar-right p-2"
        >
          <i className="fa fa-shopping-cart basketIcon" style={iconStyle} />
        </Link>
      </nav>
    );
  }
}

const headerStyle = {
  background: "#F5F5F5",
  width: "100%",
  height: "10vh",
  minHeight: "50px",
  display: "flex",
  alignItems: "center"
};

const headerTitleStyle = {
  fontSize: "25px",
  fontFamily: "'Open Sans', sans-serif",
  margin: "0",
  marginLeft: "10px",
  letterSpacing: "4px",
  color: "#000"
};

const basketBtnStyle = {
  border: "none",
  outline: "none",
  background: "transparent",
  padding: "5px 30px",
  textDecoration: "none"
};

const iconStyle = {
  display: "block",
  fontSize: "30px",
  color: "#000"
};

const linkStyle = {
  textDecoration: "none"
};

export default Header;

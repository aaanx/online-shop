import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import Header from "./Layout/Header.js";
import Footer from "./Layout/Footer.js";


render() {
  class Blog extends React.Component { }
  return (
    <div className="fa fa-beer beerIcon" style={beerIconStyle} >
      <i style={beerIconStyle}>
        <Link to="/mainPage" >
        </Link>
      </i>
    </div>
    <div className="TitleStyle" style={TitleStyle}>
      <h1>Blog o piwach</h1>
    </div>
    <div className="TextStyle" style={TextStyle}>
      <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitn</p>
    </div>
    );
};

class ShowPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TextStyle">
        <a className="TextStyle">
          <h4 className="TitleStyle">Miłosław</h4>
          <p className="Textstyle">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        </a>
        <a className="TextStyle">
          <h4 className="TitleStyle">Fortuna</h4>
          <p className="TextStyle">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        </a>
      </div>
    )
  }
};

const beerIconStyle = {
  fontSize: "30px",
  display: "block",
  padding: "5px 30px"
};

const TitleStyle = {
  fontSize: "25px",
  fontFamily: "'Open Sans', sans-serif",
  margin: "0",
  marginLeft: "30px",
  letterSpacing: "10px"
};

const TextStyle = {
  fontSize: "10px",
  fontFamilly: "'Open Sans', sans-serif",
  marginRight: "10px",
  marginLeft: "15px",
  leterSpacing: "5px"
};

export default Blog;
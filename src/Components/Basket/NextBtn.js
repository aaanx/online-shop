import React from "react";
import { Link } from "react-router-dom";

class NextBtn extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button style={nextBtnStyle}>
          <span style={nextTextStyle}>Shipping</span>
          <Link to="/auth">
            <i
              class="fa fa-arrow-circle-right iconNext"
              style={iconNextStyle}
            />
          </Link>
        </button>
      </React.Fragment>
    );
  }
}

const nextBtnStyle = {
  marginTop: "100px",
  border: "none",
  outline: "none",
  background: "transparent",
  fontSize: "20px",
  display: "flex",
  alignItems: "center"
};

const nextTextStyle = {
  display: "inline-block",
  marginTop: "-3px"
};

const iconNextStyle = {
  paddingLeft: "10px",
  fontSize: "25px",
  width: "100%",
  height: "100%"
};

export default NextBtn;

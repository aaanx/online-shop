import React from "react";

class NextBtn extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button style={nextBtnStyle}>
          <span style={nextTextStyle}>Shipping</span>
          <i className="fa fa-arrow-circle-right iconNext" style={iconNextStyle} />
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

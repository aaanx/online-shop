import React from "react";

class ButtonAdd extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={this.props.addToBasket.bind(this, this.props)}
        style={buttonAddStyle}
      >
        <i className="fa fa-plus-circle" />
      </button>
    );
  }
}

const buttonAddStyle = {
  display: "inline-block",
  border: "none",
  backgroundColor: "transparent",
  color: "rgba(211, 84, 0, 1)",
  margin: "0",
  padding: "0",
  fontWeight: "700",
  fontSize: "22px",
  cursor: "pointer"
};

export default ButtonAdd;

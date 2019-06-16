import React from "react";
import "../BasketItem.css";

class ProductQuantity extends React.Component {
  constructor(props) {
    super(props);
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  add = () => {
    this.changeQuantity(this.props.quantity + 1);
  };

  substract = () => {
    if (this.props.quantity > 0) {
      this.changeQuantity(this.props.quantity - 1);
    }
  };

  changeQuantity = quantity => {
    this.props.updateQuantity(quantity, this.props.id);
  };

  render() {
    return (
      <div>
        <button onClick={this.substract} style={minusBtnStyle}>
          <i class="fa fa-minus" style={iconMinusStyle} />
        </button>
        <input
          type="number"
          style={inputQuantityStyle}
          value={this.props.quantity}
        />
        <button onClick={this.add} style={plusBtnStyle}>
          <i class="fa fa-plus" style={iconPlusStyle} />
        </button>
      </div>
    );
  }
}

const inputQuantityStyle = {
  width: "40px",
  textAlign: "center",
  border: "none",
  outline: "none",
  fontSize: "16px"
};

const minusBtnStyle = {
  border: "none",
  outline: "none",
  background: "transparent",
  paddingRight: "10px"
};

const plusBtnStyle = {
  border: "none",
  outline: "none",
  background: "transparent",
  paddingLeft: "10px"
};

const iconMinusStyle = {};

const iconPlusStyle = {};

export default ProductQuantity;

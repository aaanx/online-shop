import React from "react";

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
        <button onClick={this.substract}>-</button>
        <input
          type="number"
          style={inputQuantityStyle}
          value={this.props.quantity}
        />
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}

const inputQuantityStyle = {
  width: "50px"
};

export default ProductQuantity;

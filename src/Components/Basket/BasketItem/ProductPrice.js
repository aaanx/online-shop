import React from "react";

class ProductPrice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>{(this.props.price * this.props.quantity).toFixed(2)}</span>
      </div>
    );
  }
}

export default ProductPrice;

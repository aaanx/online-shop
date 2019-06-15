import React from "react";

class ProductName extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p style={productNameStyle}>{this.props.name}</p>
      </React.Fragment>
    );
  }
}

const productNameStyle = {
  margin: "0"
};

export default ProductName;

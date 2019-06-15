import React from "react";

class ProductDelBtn extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button
          className="delBtn"
          style={delBtnStyle}
          onClick={this.props.delBasketItem}
        >
          X
        </button>
      </React.Fragment>
    );
  }
}

const delBtnStyle = {
  fontWeight: "600",
  border: "none",
  background: "#000",
  color: "#fff"
};

export default ProductDelBtn;

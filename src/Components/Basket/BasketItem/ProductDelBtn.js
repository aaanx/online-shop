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
          <i class="fa fa-times-circle" />
        </button>
      </React.Fragment>
    );
  }
}

const delBtnStyle = {
  fontWeight: "600",
  fontSize: "25px",
  border: "none",
  background: "transparent",
  color: "#000",
  paddingRight: "20px"
};

export default ProductDelBtn;

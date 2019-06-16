import React from "react";

class BasketSum extends React.Component {
  render() {
    return (
      <div>
        <span style={basketSumStyle}>
          {`${this.props.basketItems
            .reduce((accumulator, actualValue) => {
              return actualValue.quantity * actualValue.price + accumulator;
            }, 0)
            .toFixed(2)} zł`}
        </span>
      </div>
    );
  }
}

const basketSumStyle = {
  fontSize: "30px",
  fontWeight: "600"
};

export default BasketSum;

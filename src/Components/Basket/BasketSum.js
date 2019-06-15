import React from "react";

class BasketSum extends React.Component {
  render() {
    return (
      <div>
        <span>
          {this.props.basketItems
            .reduce((accumulator, actualValue) => {
              return actualValue.quantity * actualValue.price + accumulator;
            }, 0)
            .toFixed(2)}
        </span>
      </div>
    );
  }
}

export default BasketSum;

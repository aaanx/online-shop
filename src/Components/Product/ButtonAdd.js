import React from 'react';

class ButtonAdd extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button onClick={this.props.addToBasket.bind(this, this.props)}>+</button>
        )
    }
}

export default ButtonAdd;
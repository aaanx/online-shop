import React from "react";

function AddToBasketAlert(props) {
    return (
        <React.Fragment>
            <div style={addToBasketAlert}>
                <p>Dodano produkt do koszyka</p>
            </div>
        </React.Fragment>
    );
}

const addToBasketAlert = {
    position: 'absolute',
    padding: '10px 20px 0px',
    width: '250px',
    left: 'calc(50% - 100px)',
    top: '5%',
    zIndex: '2',
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '5px'
}

export default AddToBasketAlert;
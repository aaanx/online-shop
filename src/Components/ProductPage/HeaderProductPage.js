import React from 'react';


function HeaderProductPage(props) {
    return (
        <div className='container' style={{
            background: 'rgba(0,0,0,.5)',
            textAlign:'center'
        }}>
            <div className='row'>
                <div className='col-10'>
                    <h2>{props.title} </h2>
                </div>
                <div className='col'>
                    <h2>{props.price}PLN </h2>
                </div>
            </div>
        </div>
    )
}

export default HeaderProductPage;
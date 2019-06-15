import React from 'react';


function BodyProductPage(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 productBoxDescription'>
                    <h4>Opis produktu</h4>
                    <p>{props.shortDescription}</p>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default BodyProductPage;
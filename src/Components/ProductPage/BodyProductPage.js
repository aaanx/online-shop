import React from 'react';


function BodyProductPage(props) {
    return (
        <div>
            <p style={{
                margin: '16px'
            }}>{props.shortDescription}</p>
            <p style={{
                margin: '16px'
            }}>{props.text}</p>
        </div>
    )
}

export default BodyProductPage;
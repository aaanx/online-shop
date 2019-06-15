import React from 'react';


function BodyProductPage(props) {
    return (
        <div style={{
            maxWidth:'1024px',
            margin:'0 auto',
            paddingTop:'32px'
        }}>
            <p style={{
                margin: '16px'
            }}>{props.shortDescription}</p>
            <img src={props.image.url} alt={props.image.url} style={{
                display:"block",
                width:'250px',
                margin:'0 auto'
            }} />
            <p style={{
                margin: '16px'
            }}>{props.text}</p>
        </div>
    )
}

export default BodyProductPage;
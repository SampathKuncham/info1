import React from 'react';
const header = (props) =>(
    
    <div className="heade">
        <div className="container" >
<p className="titl"> {props.title} </p>
        </div>
    </div>
    
)
    header.defaultProps={
        title: 'Copyright © Sampath Kuncham @2020',
        
    }
export default header;

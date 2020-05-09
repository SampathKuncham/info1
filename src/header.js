import React from 'react';
const header = (props) =>(
    
    <div className="header">
        <div className="container" >
<h1 className="title"> {props.title} </h1>
        <h2 className="sub_title">{props.subtitle}</h2>
        </div>
    </div>
    
)
    header.defaultProps={
        title: 'Indecision',
        
    }
export default header;
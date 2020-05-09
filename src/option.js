import React from 'react';

const option=(props) =>(
    <div className="option">
    <p className="option-text">
        {props.count}. {props.optionText}</p>
    <button className="button--link"
    
    onClick={(e)=> (
        props.handleDeleteOption(props.optionText)
    )}>
        Remove
    </button>
    </div>
)
export default option;
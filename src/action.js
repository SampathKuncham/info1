import React from 'react';

const action =(props)=>(
    <div>
        <button className="big_button"
                onClick={props.handlePick} 
                disabled={!props.hasOptions} >
                 Decision   
        </button>
    </div>
)
export default action; 
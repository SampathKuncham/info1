import React from "react";
import Option from './option';

const options =(props) =>(
    <div>
        <div className="widget">
            <h3 className="widget--title">Your Options</h3>
            
        <button className="button--link"
       
       onClick={props.handleDeleteOptions}>Remove All</button>
       </div>

        {props.handleDeleteOptions.length===0 &&
         <p className="widget-M">Add to Another option</p>}

        {props.options.map((option,index)=>(
            
            <Option 
                key={option}
                optionText={option}
                count={index + 1}
                handleDeleteOption={props.handleDeleteOption}/>
        )

        )}
    
    </div>
    
)
export default options;
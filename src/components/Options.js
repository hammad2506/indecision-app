import React from 'react';
import Option from './Option'

const Options = (props) => {
    return(
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button 
                className="button button--link" 
                onClick = {props.removeAllOptions}> 
                Remove All
                </button>
            </div>    
            {props.options.length === 0 && <p className="widget__message"> Please add an option first</p>}
            {props.options.map((option, i) => (
                <Option key={i} option={option}
                count={i+1} removeOption={props.removeOption} /> ))
            }
        </div>
    );
}

export default Options;
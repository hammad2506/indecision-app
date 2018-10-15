import React from 'react';

const Action = (props) => {
    return(
        <div>
            <button 
            className="big-button"
            onClick={props.onActionButton}
            disabled={!props.disabled}>
            What should I do?
            </button>
        </div>
    );
}

export default Action;
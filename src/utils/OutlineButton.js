import React from 'react';

import '../assets/css/outline-button.css';

const OutlineButton = props => {
    const {onClick, className } = props;
    return (
        <button onClick={onClick} 
         className={className ? className : 'btn-outline'} {...props}>{props.children}</button>
    )
}

export default OutlineButton;
import React from 'react';

import '../assets/css/outline-button.css';

const OutlineButton = props => {
    return (
        <button className='btn outline'>{props.children}</button>
    )
}

export default OutlineButton;
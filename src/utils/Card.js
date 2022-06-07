import React from 'react';

import '../assets/css/card.css';

const Card = props => {
    return (
        <div className='card-container'>{props.children}</div>
    )
}

export default Card;
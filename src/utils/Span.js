import React from 'react';
import '../assets/css/span.css';

const Span = (props) => {

    return(
        <span className='span-text' {...props}>{props.children}</span>
    )
}
export default Span;
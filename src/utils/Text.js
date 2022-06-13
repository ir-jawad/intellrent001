import React from 'react';
import '../assets/css/text.css';

const Text = (props) => {
    const {className} = props;
    return(
        <p className={`${className ? className : 'default-text'}`} {...props}>{props.children}</p>
    )
}
export default Text;
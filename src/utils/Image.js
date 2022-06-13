import React from 'react';
import { Image } from 'react-bootstrap';

import "../assets/css/image.css";

const Img = (props) => {
    const {onClick} = props;
    return(
        <Image onClick={onClick} className={props.class} src={props.src} {...props}>{props.children}</Image>
    )
}
export default Img;
import React from "react";
import { Row, Col } from "react-bootstrap";
import Img from "../utils/Image";
import MenuIcon from '../assets/images/MenuIcon.png';
import QA from '../assets/images/QA.png';

const Menu = () => {
    
    return(
        <Row className="w-100" >
            <Col  className='d-flex justify-content-end w-75'>
           <div className='d-flex justify-content-around w-25'> <div className='cursor-pointer min-fq'><Img src={QA}/></div>
             <div className="cursor-pointer min-icon"><Img src={MenuIcon}/></div></div>
            </Col>
        </Row>
    )
}

export default Menu;
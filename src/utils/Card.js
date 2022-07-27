import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import '../assets/css/card.css';

const CardContainer = props => {
    return (
         <Card className='mob-container' >
            <Row>
                <Col className='d-flex flex-column align-items-start w-100'>
                    {props.children}
                </Col>
            </Row>
        </Card>   
        )
}

export default CardContainer;
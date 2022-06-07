import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import '../assets/css/mini-header.css';

const MiniHeader = () => {
    return (
        <Container fluid>
            <Row>
                <Col className='text-start py-3'><h2 className='mini__header-brand'>Intelli<span className='mini__header-special'>rent</span></h2></Col>
            </Row>
        </Container>
    )
}

export default MiniHeader;
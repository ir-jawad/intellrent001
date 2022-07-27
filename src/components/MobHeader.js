import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "./Menu";
import Img from "../utils/Image";
import IntellLogo from '../assets/images/IntellLogo.png';
const MobHeader = () => {
  return (
    <React.Fragment>
      <Container className='mob-header' >
        <Row >
          <Col className="d-flex flex-row justify-content-between">
          <div className="">
            <Img src={IntellLogo} />
          </div>
           <Col className="d-flex justify-content-end"> <Menu/></Col>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default MobHeader;

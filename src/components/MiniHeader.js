import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import MinPropertyCard from "./MiniCard";
import Menu from "./Menu";

import Img from "../utils/Image";
import Resize from "../utils/Resize";
import MiniCard from "../utils/MinCard";

import IntellLogo from "../assets/images/IntellLogo.png";

import "../assets/css/mini-header.css";


const MiniHeader = (props) => {

  const { screenSize } = Resize();
  const { miniCheck, path } = props;
 
  return (
    <React.Fragment>
      {path === '/register' || path === '/login' || path === '/forget-password' ? 
      <>
       {screenSize.dynamicWidth > 375 ? 
           <Container fluid className="mini-head">
           <Row>
             <Col className="p-4">
               <div className="nav-expand-lg">
                 <Img src={IntellLogo} />
               </div>
             </Col>
             {screenSize.dynamicWidth < 768 ? null : (
               <Col className="d-flex justify-content-center pt-2" xs={6}>
                 {miniCheck && <MinPropertyCard />}
               </Col>
             )}
             <Col className="d-flex justify-content-end align-items-center">
               <Menu />
             </Col>
           </Row>
         </Container>:
         <>
            <div className="container h-100 mt-1 text-center d-flex align-items-center justify-content-center " >
                  <MiniCard className='w-50  container p-3  h-50 border-1'>
                    <Img src={IntellLogo}/>
                  </MiniCard>
            </div>
         </> 
      }
      </>:
       <Container fluid className="mini-head">
       <Row>
         <Col className="p-4">
           <div className="nav-expand-lg">
             <Img src={IntellLogo} />
           </div>
         </Col>
         {screenSize.dynamicWidth < 768 ? null : (
           <Col className="d-flex justify-content-center pt-2" xs={6}>
             {miniCheck && <MinPropertyCard />}
           </Col>
         )}
         <Col className="d-flex justify-content-end align-items-center">
           <Menu />
         </Col>
       </Row>
     </Container>
    
    }
    </React.Fragment>
  );
};

export default MiniHeader;

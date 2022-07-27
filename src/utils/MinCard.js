import React from "react";
import { Card } from "react-bootstrap";

import '../assets/css/card.css';

const MiniCard = (props) => {
    const {className, background } = props;
    
  return (
    <React.Fragment>
      <Card className={className ? `${className} + min-card` : 'min-card'} style={{backGround:background}} {...props}>
          {props.children}
        </Card>
    </React.Fragment>
  );
};

export default MiniCard;

import React from "react";
import { Button } from "react-bootstrap";

const OutlineButton = (props) => {
  const { top, left, background, outline, size, fontSize, width } = props;

  return (
    <React.Fragment>
      <style type="text/css">
        {`
    .btn {
      line-height:0.5; 
      box-shadow :none !important ;
    }
    .btn-primary-outline {
      border: 1px solid #17ADBC;
      border-radius: 4px;
      background: #FFFFFF !important;
      color: #1496A2 !important;
    }
    .btn-secondary-outline {
      background: #FFFFFF;
      border: 1px solid #E1EAEB;
      border-radius: 4px;
      color: #1496A2 !important;
    }
    .btn-sm {
      height: 20px;
      border: 1px solid #1496A2 !important;
      background: #FFFFFF !important;
    }
    .btn-mdx {
      background:#FFFFFF !important;
      color:#1496A2 !important;
      height:32px;
      font-size:15px;
      border: 1px solid #17ADBC !important;
      line-height: 2px;
    }
    .btn-lg {
      height: 32px;
      background: #FFFFFF !important;
      border: 1px solid #17ADBC !important;
      color: #1496A2 !important;
      font-size: 14px;
      line-height: 2px;
    }
    .btn-xs {
      height: 20px;
      border: 1px solid #AEBBBD !important;
      background: #FFFFFF !important;
    }
    .btn-md {
      font-size:15px;
      color: #AEBBBD !important;
      border: 1px solid #AEBBBD !important;
      background: #FFFFFF !important;
    }
    .btn-xl {
      height: 32px;
      border: 1px solid #1496A2 !important;
      border-radius: 4px;
      color: #1496A2 !important;
      box-shadow:none !important;
      background: #FFFFFF !important;
    }
    .btn-xxl {
      height: 32px;
      border: 1px solid #AEBBBD !important;
      color: #AEBBBD !important;
      background: #FFFFFF !important;
    }
    .btn-xm {
      height: 32px;
      border: 1px solid #A4B1B3 !important;
      color: #A4B1B3 !important;
      background: #FFFFFF !important;
    }
     
    `}
      </style>
      <Button
        variant={outline}
        size={size}
        {...props}
        style={{
          position: "relative",
          top: `${top}px`,
          left: `${left}px`,
          background: background,
          fontSize: fontSize,
          width:`${width}px`
        }}
      >
        {props.children}
      </Button>
    </React.Fragment>
  );
};

export default OutlineButton;

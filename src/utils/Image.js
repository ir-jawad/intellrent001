import React from "react";
import { Image } from "react-bootstrap";

const Img = (props) => {
  const {
    onClick,
    className,
    top,
    left,
    width,
    height,
    position,
    zIndex,
    mt,
    customwidth,
    customHeight,
  } = props;
  return (
    <div style={{ width: customwidth , height:customHeight}}>
      <Image
        onClick={onClick}
        className={className}
        style={
          position
            ? {
                position: position,
                left: `${left}%`,
                top: `${mt}px` || `${top}%`,
                zIndex: zIndex,
              }
            : {
                marginLeft: `${left}px`,
                marginTop: `${top}px`,
                width: `${width}px`,
                height: `${height}px`,
              }
        }
        src={props.src}
        {...props}
      >
        {props.children}
      </Image>
     </div>
  );
};
export default Img;

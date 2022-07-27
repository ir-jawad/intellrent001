import React from "react";
import "../assets/css/text.css";

const Text = (props) => {
  const {
    width,
    height,
    left,
    top,
    fontSize,
    lineheight,
    color,
    id,
    maxWidth,
    fontWeight,
    background,
    fontfamily
  } = props;
  return ( 
    <p
      id={id}
      className="default-text"
      style={{
        position: "relative",
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`,
        fontSize: `${fontSize}px`,
        lineHeight: `${lineheight}px`,
        color: `${color}`,
        maxwidth: `${maxWidth}px`,
        fontWeight: fontWeight,
        background:background,
        fontFamily:fontfamily
      }}
      {...props}
    >
      {props.children}
    </p>
  );
};
export default Text;

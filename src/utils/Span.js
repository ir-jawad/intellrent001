import React from "react";
import "../assets/css/span.css";

const Span = (props) => {
  const { color, fontSize, minwidth, fontWeight, className} = props;
  return (
    <span
      className={className ? className : "span-text"}
      style={{
        color: `${color}`,
        fontSize: `${fontSize}px`,
        minWidth: `${minwidth}px`,
        fontWeight: fontWeight,
      }}
      {...props}
    >
      {props.children}
    </span>
  );
};
export default Span;

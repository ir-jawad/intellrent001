import React from "react";

import "../assets/css/checkbox.css";

export default function CheckBox({ id, className, ...restProps }) {
  return (
    <label className="container-1">
      <input type="checkbox" id={id} {...restProps} />
      <span className="checkmark"></span>
    </label>
  );
}

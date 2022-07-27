import React from "react";
import { Form } from "react-bootstrap";
import { ErrorMessage, useField } from "formik";

import "../assets/css/text-field.css";

const TextField = ({ ...props }) => {
  const [field, meta, className, background, marginBottom] = useField(props);
  const {position, left, top, fontSize, width, height, rows,textarea, type} = props;
 
  return (
   <Form.Group className={`${className ? className : "mb-3"}`}>
      <Form.Control as={textarea} rows={rows} 
        className={`form-control form-field shadow-none ${
          meta.touched && meta.error && "is-invalid"
        } ${className}`}
        {...field}
        {...props}
        style={{
          position:position || 'relative',
          top:`${top}px`,
          left:`${left}px`,
          width:`${width}px`,
          fontSize:`${fontSize}px`,
          backgroundColor:background,
          marginBottom:`${marginBottom}px`,
          height:`${height}px`
        }}
      />
      <ErrorMessage
        component="small"
        name={field.name}
        className="text-danger"
      />
    </Form.Group>
  );
};

export default TextField;

import React, { useState } from "react";

import { Formik, Form } from "formik";
import StringMask from "string-mask";
import { Field } from "formik";

import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";
import Text from "../utils/Text";
import Img from "../utils/Image";
import TextField from "../utils/TextField";
import Span from "../utils/Span";

import Group10 from "../assets/images/Group10.png";
import path14 from "../assets/images/path14.png";

import "../assets/css/security.css";

const AddSecurityNumber = (props) => {
  const [checkLength, setLength] = useState(0);
  const { show, text, handleState } = props;
  const DELIMITER = "-";
  const MASK = "000-00-0000";

  const removeTrailingCharIfFound = (str, char) => {
    return str
      .split(char)
      .filter((segment) => segment !== "")
      .join(char);
  };

  const formatValue = (str) => {
    setLength(str.length);
    const unmaskedValue = str.split(DELIMITER).join("");
    const formatted = StringMask.process(unmaskedValue, MASK);
    return removeTrailingCharIfFound(formatted.result, DELIMITER);
  };

  return (
    <div>
      <Intro
        text={text}
        show={show}
        btnTxt="Edit phone number"
        className="custom-intro-container"
      />
      <div className="d-flex flex-column ssnumber-container">
        <div className="img-container-social">
          <Img src={Group10} />
          <Formik initialValues={{ ssn: "" }}>
            <Form noValidate>
              <Field name="ssn">
                {(fieldProps) => (
                  <TextField
                    className="ssn-field"
                    placeholder={MASK}
                    {...fieldProps.field}
                    onChange={(event) => {
                      fieldProps.field.onChange(event.target.name)(
                        formatValue(event.target.value)
                      );
                    }}
                  />
                )}
              </Field>
            </Form>
          </Formik>
        </div>
        <div className="d-flex flex-row user-info-container">
          <Img src={path14} />
          <Text style={{ color: "#5E6566" }}>
            Your data is only shared with <Span>your agent</Span> and{" "}
            <Span>TransUnion.</Span> You can read more details in our{" "}
            <Span style={{ color: "skyBlue" }}>privacy policy.</Span>
          </Text>
        </div>
        {checkLength >= 11 && (
          <div className="mt-4 d-flex flex-row custom-save-btn">
            <OutlineButton
              onClick={() => handleState("photoId")}
              style={{ position: "relative", left: "18rem", width: "10rem" }}
            >
              Save and continue
            </OutlineButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddSecurityNumber;

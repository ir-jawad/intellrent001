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
import ScrollAble from "../utils/Scroll";

import path14 from "../assets/images/path14.png";

const AddSecurityNumber = (props) => {
  const [checkLength, setLength] = useState(0);
  const { show, text, handleState, setState, screenSize } = props;
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
    <React.Fragment>
      <ScrollAble mobStyle={checkLength >= 11 ? 130 : 200}>
        <Intro
          onClick={() => setState(show - 1)}
          text={text}
          show={show}
          btnTxt="Edit phone number"
          outline="outline-primary"
          size="xxl"
          screenSize={screenSize}
        />
        <div className="w-100 container d-flex flex-column">
          <div>
            <div className="container d-flex justify-content-center align-items-center bg-special">
              <div className="w-100 h-25">
                <Formik initialValues={{ ssn: "" }}>
                  <Form noValidate>
                    <Field name="ssn">
                      {(fieldProps) => (
                        <TextField
                          top={14}
                          left={-4}
                          className="input-set h-25 text-center"
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
            </div>
          </div>
        </div>
        <div className="container p-0 w-100">
          <div className="container p-1 h-auto w-100 border-1 info-form">
            <div className="w-100 d-flex flex-row align-items-center ">
              <Img src={path14} left={10} />
              <div className="w-100 pl-1 w-75 p-2">
                {" "}
                <Text className='' color="#5E6566" fontSize={10} height={15}>
                  Your data is only shared with <Span>your agent</Span> and{" "}
                  <Span>TransUnion.</Span> You can read more details in our{" "}
                  <Span color="skyBlue">privacy policy.</Span>
                </Text>
              </div>
            </div>
          </div>
        </div>
        {checkLength >= 11 && (
          <div className="container mt-2 p-0 mt-1 w-100 d-flex flex-row justify-content-end">
            <OutlineButton
              outline="outline-secondary"
              size="xl"
              onClick={() => handleState("photoId")}
            >
              Save and continue
            </OutlineButton>
          </div>
        )}
      </ScrollAble>
    </React.Fragment>
  );
};

export default AddSecurityNumber;

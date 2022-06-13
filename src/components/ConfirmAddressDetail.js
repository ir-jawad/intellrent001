import React from "react";
import { Formik, Form } from "formik";

import Intro from "../utils/Intro";
import Text from "../utils/Text";
import OutlineButton from "../utils/OutlineButton";

import "../assets/css/editInfo.css";

const ConfirmAddress = (props) => {
  const { show, text, setState } = props;

  const validValues = {
    name: "",
    date: "",
    idType: "",
    idNumber: "",
  };

  return (
    <div>
      <Intro
        text={text}
        show={show}
        btnTxt="Edit ID type"
        className="custom-intro-container"
      />
      <Formik initialValues={validValues}>
        {(formik) => (
          <React.Fragment>
            <Form>
              <div className="d-flex flex-column align-content-start edit-info-container">
                <div className="d-flex flex-column align-content-start edit-important">
                  <Text>Street</Text>
                  <Text className="confirm-address-btn">434 2nd Ave</Text>
                </div>
                <div className="d-flex flex-column align-content-start edit-important">
                  <Text>Apt #</Text>
                </div>
                <div className="d-flex flex-column align-content-start edit-important">
                  <Text>City</Text>
                  <Text className="confirm-address-btn">San Francisco</Text>
                </div>
                <div className="d-flex flex-column align-content-start edit-important">
                  <Text>State</Text>
                  <Text className="confirm-address-btn">CA</Text>
                </div>
                <div className="d-flex flex-column align-content-start edit-important">
                  <Text>Zip</Text>
                  <Text className="confirm-address-btn">94188</Text>
                </div>
              </div>
            </Form>
          </React.Fragment>
        )}
      </Formik>
      <OutlineButton
        onClick={() => {
          setState(show + 1);
        }}
        style={{ margin: "0px 0px 0px 213px" }}
      >
        Confirm and continue
      </OutlineButton>
    </div>
  );
};

export default ConfirmAddress;

import React from "react";
import { Formik, Form } from "formik";

import Intro from "../utils/Intro";
import Img from "../utils/Image";
import Text from "../utils/Text";
import Span from "../utils/Span";
import TextField from "../utils/TextField";
import OutlineButton from "../utils/OutlineButton";

import profilePicBlur from "../assets/images/profilePicBlur.png";

import "../assets/css/editInfo.css";

const EditInfo = (props) => {
  const { show, text, setState, setEdit } = props;
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
                <div className=" img-upload">
                  <div>
                    <Img src={profilePicBlur} />
                  </div>
                  <div className="d-flex flex-column align-content-start">
                    <Text>
                      <Span style={{ color: "#1496A2" }}>Upload</Span> another
                      photo of yourself
                    </Text>
                    <Text style={{ fontSize: "10px" }}>
                      Accepted formats: JPEG, PNG, JPG
                    </Text>
                  </div>
                </div>
                <div className="d-flex flex-column align-content-start edit-important">
                  <Text>Name</Text>
                  <TextField
                    className="info-form"
                    label="text"
                    name="name"
                    type="text"
                    placeholder="Jennifer Bianca Roberts"
                  />
                </div>
                <div className="d-flex flex-column align-content-start edit-important">
                  <Text>Date of birth</Text>
                  <TextField
                    className="info-form"
                    label="text"
                    name="date"
                    type="text"
                    placeholder="12 Dec 1985"
                  />
                </div>
                <div className="d-flex flex-column align-content-start edit-important">
                  <Text>Id Type</Text>
                  <TextField
                    className="info-form"
                    label="text"
                    name="idType"
                    type="text"
                    placeholder="Driver's Lisence"
                  />
                </div>
                <div className="d-flex flex-column align-content-start edit-important">
                  <Text>ID number</Text>
                  <TextField
                    className="info-form"
                    label="text"
                    name="idNumber"
                    type="text"
                    placeholder="3140593"
                  />
                </div>
              </div>
            </Form>
          </React.Fragment>
        )}
      </Formik>
      <OutlineButton
        onClick={() => {
          setState(show + 1);
          setEdit(false);
        }}
        style={{ margin: "22px 0px 0px 213px" }}
      >
        Confirm and continue
      </OutlineButton>
    </div>
  );
};

export default EditInfo;

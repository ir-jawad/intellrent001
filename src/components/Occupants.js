import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";

import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";
import Text from "../utils/Text";
import Img from "../utils/Image";
import TextField from "../utils/TextField";

import Vector22 from "../assets/images/Vector22.png";
import Vector23 from "../assets/images/Vector23.png";
import Vector24 from "../assets/images/Vector24.png";

import "../assets/css/adult.css";
import "../assets/css/create-account.css";

const Occupants = (props) => {
  const { show, text, handleState, occupant } = props;

  const validValues = {
    email: "",
    password: "",
  };

  const errorSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const registrationHandler = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Intro
        text={text}
        show={show}
        btnTxt={`${
          show === 5 ? "View acceptance criteria" : "Edit my information"
        }`}
        className="custom-intro-container"
      />
      <div className="d-flex flex-column gap-2">
        <div className="adult-container">
          <div className="">
            <Text> Older than 18 years </Text>
          </div>
          <div className=" d-flex flex-row age-container">
            <Text className="bold-text">Adults</Text>
            <div className="age-section">
              <Img
                onClick={() => handleState("removeOccupant")}
                src={Vector22}
              />
              <Text className="plus-text">{occupant}</Text>
              <Img onClick={() => handleState("addOccupant")} src={Vector23} />
            </div>
          </div>
        </div>
        {occupant > 0 && (
          <div className="adult-container">
            <Formik
              initialValues={validValues}
              validationSchema={errorSchema}
              onSubmit={registrationHandler}
            >
              {(formik) => (
                <React.Fragment>
                  {
                    <Form>
                      <Text>Occupant {occupant}</Text>
                      <div className="d-flex flex-row justify-content-between custom-field">
                        <TextField
                          className="fix-text"
                          label="Email"
                          name="email"
                          type="email"
                          placeholder="Email address"
                        />
                        <Img src={Vector24} />
                      </div>
                    </Form>
                  }
                </React.Fragment>
              )}
            </Formik>
          </div>
        )}
      </div>
      <OutlineButton
        onClick={() => handleState("adult-check")}
        className="confirm-btn"
      >
        Continue
      </OutlineButton>
    </div>
  );
};

export default Occupants;

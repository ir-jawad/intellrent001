import React from "react";
import { Formik, Form } from "formik";

import TextField from "../utils/TextField";
import Text from "../utils/Text";
import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";

import Apple from "../assets/images/Apple.png";

import "../assets/css/property-detail.css";

const EmploymentDetail = (props) => {
  const { setState, show, text } = props;

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
        className="custom-intro-container"
        btnTxt="Edit Current address"
      />
      <div className="position-relative">
        <div
          className="d-flex detail-container"
          style={{ width: "439px", height: "97px" }}
        >
          <div className="">
            <img
              src={Apple}
              alt="Profile"
              className="img-fluid"
              loading="lazy"
              style={{ height: "81px" }}
            />
          </div>
          <div className="">
            <p className="heading-top">
              Apple In. <br></br>
              <span className="heading-below">Technology</span>
            </p>
            <div className="d-flex flex-column align-content-start right-content">
              <div className="d-flex flex-row align-content-start most-info">
                <div className="d-flex flex-column align-content-start first-text">
                  <Text
                    style={{
                      fontSize: "11px",
                      color: "#303333",
                    }}
                  >
                    Sr. Product Manager
                  </Text>
                  <Text
                    style={{
                      fontSize: "10px",
                      position: "relative",
                      top: "-13px",
                    }}
                  >
                    Position
                  </Text>
                </div>
                <div className="d-flex flex-column align-content-start second-text">
                  <Text
                    style={{
                      fontSize: "11px",
                      color: "#303333",
                    }}
                  >
                    12/12/2020
                  </Text>
                  <Text
                    style={{
                      fontSize: "10px",
                      position: "relative",
                      top: "-13px",
                    }}
                  >
                    Started
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Formik initialValues={validValues}>
          {(formik) => (
            <React.Fragment>
              <Form>
                <div className="d-flex flex-column align-content-start edit-info-container mt-3">
                  <div className="d-flex flex-column align-content-start edit-important">
                    <Text>Name of Supervisor</Text>
                    <TextField
                      style={{ background: "#f7fafa" }}
                      className="info-form"
                      label="text"
                      name="name"
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="d-flex flex-column align-content-start edit-important">
                    <Text>Phone of Supervisor</Text>
                    <TextField
                      style={{ background: "#f7fafa" }}
                      className="info-form"
                      label="text"
                      name="date"
                      type="text"
                      placeholder="(000) 000-0000"
                    />
                  </div>
                  <div className="d-flex flex-column align-content-start edit-important">
                    <Text>Email of Supervisor</Text>
                    <TextField
                      style={{ background: "#f7fafa" }}
                      className="info-form"
                      label="text"
                      name="idType"
                      type="text"
                      placeholder="example@supervisor.com"
                    />
                  </div>
                  <div className="d-flex flex-column align-content-start edit-important">
                    <Text>Monthly Gross income</Text>
                    <TextField
                      style={{ background: "#f7fafa" }}
                      className="info-form"
                      label="text"
                      name="idNumber"
                      type="text"
                      placeholder="$ 00 000.00"
                    />
                  </div>
                  <div className="mt-3 d-flex flex-column justify-content-between custom-bottom-btn">
                    <OutlineButton
                      onClick={() => setState(show + 1)}
                      style={{ width: "185px", height: "32px" }}
                    >
                      <div className="btn-flex">
                        <Text className="group-text-btn">
                          Confirm and continue
                        </Text>
                      </div>
                    </OutlineButton>
                    <OutlineButton
                      onClick={() => setState(show + 1)}
                      style={{
                        width: "218px",
                        height: "32px",
                        border: "1px solid #A4B1B3",
                      }}
                    >
                      <div className="btn-flex">
                        {" "}
                        <Text
                          style={{ color: "#A4B1B3" }}
                          className="group-text-btn"
                        >
                          Edit company information
                        </Text>
                      </div>
                    </OutlineButton>
                  </div>
                </div>
              </Form>
            </React.Fragment>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EmploymentDetail;

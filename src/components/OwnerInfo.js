import React from "react";
import { Formik, Form } from "formik";
import { HiOutlineLocationMarker } from "react-icons/hi";

import TextField from "../utils/TextField";
import Text from "../utils/Text";
import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";

import house from "../assets/images/house.png";

import "../assets/css/property-detail.css";

const OwnerInfo = (props) => {
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
      <div className="d-flex detail-container" style={{ width: "439px" }}>
        <div className="">
          <img
            src={house}
            alt="Profile"
            className="img-fluid"
            loading="lazy"
            style={{ height: "81px" }}
          />
        </div>
        <div className="">
          <HiOutlineLocationMarker className="mx-2 icon" />
        </div>
        <div className="">
          <p className="heading-top">
            73 Noriega St <br></br>
            <span className="heading-below">San Francisco, CA 94118</span>
          </p>
        </div>
      </div>

      <Formik initialValues={validValues}>
        {(formik) => (
          <React.Fragment>
            <Form>
              <div className="d-flex flex-column align-content-start edit-info-container mt-3">
                <div className="d-flex flex-column align-content-start edit-important">
                  <Text>Owner/Manager</Text>
                  <TextField
                    style={{ background: "#f7fafa" }}
                    className="info-form"
                    label="text"
                    name="name"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="d-flex flex-column align-content-start edit-important">
                  <Text>Rent amount</Text>
                  <TextField
                    style={{ background: "#f7fafa" }}
                    className="info-form"
                    label="text"
                    name="date"
                    type="text"
                    placeholder="$ 000"
                  />
                </div>
                <div className="d-flex flex-column align-content-start edit-important">
                  <Text>Phone</Text>
                  <TextField
                    style={{ background: "#f7fafa" }}
                    className="info-form"
                    label="text"
                    name="idType"
                    type="text"
                    placeholder="(000) 000-0000"
                  />
                </div>
                <div className="d-flex flex-column align-content-start edit-important">
                  <Text>Email</Text>
                  <TextField
                    style={{ background: "#f7fafa" }}
                    className="info-form"
                    label="text"
                    name="idNumber"
                    type="text"
                    placeholder="ex@manager.com"
                  />
                </div>
              </div>
            </Form>
          </React.Fragment>
        )}
      </Formik>
      <div className="social-container" style={{ top: "-8rem" }}>
        <OutlineButton
          style={{ width: "53px" }}
          onClick={() => setState(show + 1)}
          className="y-btn"
        >
          Save
        </OutlineButton>
      </div>
    </div>
  );
};

export default OwnerInfo;

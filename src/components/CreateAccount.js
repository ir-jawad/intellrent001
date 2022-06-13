import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import { GrGoogle } from "react-icons/gr";

import TextField from "../utils/TextField";
import CustomButton from "../utils/CustomButton";

import "../assets/css/create-account.css";

const CreateAccount = () => {
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
    <div className="register">
      <Container className="py-4">
        <Row className="d-flex align-items-center justify-content-center">
          <Col
            xs="12"
            md="6"
            className="d-flex align-items-center justify-content-center"
          >
            <div className="welcome-sec">
              <h2 className="register-heading">Welcome</h2>
              <p className="register-content">
                You have been invited by{" "}
                <span className="fw-bold">"Agent name"</span> to begin your
                rental application
              </p>
            </div>
          </Col>
          <Col xs="12" md="6" className="text-center">
            <div className="reg-form">
              <div className="d-flex align-items-center justify-content-center google-btn">
                <GrGoogle className="me-4" />{" "}
                <p className="m-0">Continue with Google</p>
              </div>
              <p className="divider-text my-5">
                <span>or</span>
              </p>
              <Formik
                initialValues={validValues}
                validationSchema={errorSchema}
                onSubmit={registrationHandler}
              >
                {(formik) => (
                  <React.Fragment>
                    <Form>
                      <TextField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Email"
                      />
                      <TextField
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Password"
                      />
                      <p className="signup-condition">
                        By signing up, I agree to the{" "}
                        <span className="terms">terms & conditions</span>
                      </p>
                      <div className="mt-4">
                        <CustomButton type="submit">Sign up</CustomButton>
                      </div>
                    </Form>
                    <p className="bottom-text mt-4">
                      Already have an account?{" "}
                      <span className="bottom-special">Log in</span>
                    </p>
                  </React.Fragment>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateAccount;

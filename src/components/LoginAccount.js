import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { GrGoogle } from "react-icons/gr";

import TextField from "../utils/TextField";
import CustomButton from "../utils/CustomButton";

import "../assets/css/login-account.css";

const LoginAccount = () => {
  const validValues = {
    email: "",
    password: "",
  };

  const errorSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const loginHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="register">
      <Container className="py-4">
        <Row>
          <Col
            xs="12"
            className="d-flex align-items-center justify-content-center"
          >
            <div className="login-form">
              <h1 className="login-heading py-3">Log in</h1>
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
                onSubmit={loginHandler}
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
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="remember-me">Remember me</p>
                        <p className="forget-password">Forget password?</p>
                      </div>
                      <div className="mt-2 text-center">
                        <CustomButton type="submit">Log in</CustomButton>
                      </div>
                      <div className="text-center">
                        <p className="bottom-text mt-4">
                          Dont have an account?{" "}
                          <span className="bottom-special">Get invited</span>
                        </p>
                      </div>
                    </Form>
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

export default LoginAccount;

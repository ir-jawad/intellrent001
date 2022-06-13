import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { GrGoogle } from "react-icons/gr";

import TextField from "../utils/TextField";
import CustomButton from "../utils/CustomButton";

const ForgetPasswordForm = () => {
  const validValues = {
    email: "",
  };

  const errorSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
  });

  const forgetPasswordHandler = (data) => {
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
              <h1 className="login-heading py-3">Forgot password</h1>
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
                onSubmit={forgetPasswordHandler}
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
                      <div className="mt-5 text-center">
                        <CustomButton type="submit">
                          Send reset link
                        </CustomButton>
                      </div>
                      <div className="text-center">
                        <p className="bottom-text mt-4">
                          Suddenly remember your password?{" "}
                          <span className="bottom-special">Sign in</span>
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

export default ForgetPasswordForm;

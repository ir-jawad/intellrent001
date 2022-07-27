import React from "react";

import * as Yup from "yup";
import { Formik, Form } from "formik";
import { GrGoogle } from "react-icons/gr";

import TextField from "../utils/TextField";
import CustomButton from "../utils/CustomButton";
import Text from "../utils/Text";
import Resize from "../utils/Resize";
import Span from "../utils/Span";
import Img from "../utils/Image";

import BackTriangle from "../assets/images/BackTriangle.png";

import "../assets/css/create-account.css";

const CreateAccount = () => {
  const { screenSize } = Resize();

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
    <React.Fragment>
     <div className="main-container bg-back-1">
     <div className="container w-100">
           <div className="p-5 d-flex justify-content-around align-items-center register-container" >
                 <div className="contianer p-0 reg-text">
                  <Text className='' color='#303333' fontSize={28}>Welcome Adeel</Text>
                  <Text className={window.innerWidth > 990 ? 'w-75': 'w-100'} fontWeight={300} fontSize={14} >You have been invited by <Span className='' fontSize={14} fontWeight={500}>Robin Allen</Span> to create an account on Intellirent</Text>
                 </div>
                 <div className="reg-form text-center">
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
                            marginBottom={20}
                            fontSize={14}
                            height={40}
                          />
                          <TextField
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            fontSize={14}
                            position='relative' top={20}
                            height={40}
                          />
                         <div className="pt-1">
                         <Text className="mt-4" fontSize={14} fontWeight={200}>
                            By signing up, I agree to the{" "}
                            <Span className="terms" fontWeight={400}>terms & conditions</Span>
                          </Text>
                         </div>
                          <div className="mt-5">
                            <CustomButton type="submit">Sign up</CustomButton>
                          </div>
                        </Form> 
                        <div className="w-100 mt-5">
                        <Text className='w-100' fontWeight={200} fontSize={14} > Already have an account?{" "}<Span className='' fontSize={14} fontWeight={500} color='#54BDC7'>Log in</Span></Text>
                        </div>
                      </React.Fragment>
                    )}
                  </Formik>
                </div>
           </div>
      </div>
     </div>
    </React.Fragment>
  );
};

export default CreateAccount;

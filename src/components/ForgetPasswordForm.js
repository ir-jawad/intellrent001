import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { GrGoogle } from "react-icons/gr";

import TextField from "../utils/TextField";
import CustomButton from "../utils/CustomButton";
import Img from "../utils/Image";
import Resize from "../utils/Resize";
import Text from "../utils/Text";
import Span from "../utils/Span";

import BackTriangle from "../assets/images/BackTriangle.png";

const ForgetPasswordForm = () => {
  const { screenSize } = Resize();
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
    <React.Fragment>
      <div className="main-container">
     <Container className="py-4">
       <Img src={BackTriangle} position="relative" left={46.3}/>
       <div className="overflow-hidden">
         <Img src={BackTriangle} position="relative" mt={200} left={21} zIndex={22}/>
       </div>
       <Row><Col xs="12" className="d-flex align-items-center justify-content-center">
           <div className="login-form">
             <Text className="login-heading py-3">Forgot Password</Text>
             <div className="d-flex align-items-center justify-content-center google-btn">
               <GrGoogle className="me-4" />{" "}
               <Text className="m-0">Continue with Google</Text>
             </div>
             <Text className="divider-text my-5">
               <Span fontSize={14}>or</Span>
             </Text>
             <Formik
               initialValues={validValues}
               validationSchema={errorSchema}
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
                       height={40}
                     />
                     
                     <div className="mt-5 text-center">
                       <CustomButton type="submit">Send reset link</CustomButton>
                     </div>
                     <div className="w-100 mt-5 text-center">
                        <Text className='w-100' fontWeight={200} fontSize={15} > Suddenly remember your password? {" "}<Span className='' fontSize={16} fontWeight={500} color='#54BDC7'>Sign in</Span></Text>
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
    </React.Fragment>
  );
};

export default ForgetPasswordForm;

import React from "react";
import { Formik, Form } from "formik";

import Img from "../utils/Image";
import Intro from "../utils/Intro";
import TextField from "../utils/TextField";

import search from "../assets/images/search.png";
import { bankData } from "./dummy";

import "../assets/css/bank.css";

const BankAccount = (props) => {
  const { show, text, handleState } = props;
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
        btnTxt="Edit current address"
        className="custom-intro-container"
      />
      <div className="position-relative address-container">
        <div className="d-flex align-content-start g-1 h-10 border-rounded search-sec">
          <div>
            <Img src={search} />
          </div>
          <Formik initialValues={validValues}>
            {(formik) => (
              <React.Fragment>
                <Form className="mt-1">
                  <div className="mt-4">
                    <TextField
                      className="info-form"
                      label="text"
                      name="name"
                      type="text"
                      placeholder="Search for your bank"
                    />
                  </div>
                </Form>
              </React.Fragment>
            )}
          </Formik>
        </div>
        <div className="image-container">
          {/* {bankData?.map((image, index)=> {
                 return(
                     <ul className="list-unstyled" key={index}>
                         <li className="d-flex"><Img src={image}/></li>
                     </ul>
                 )
             })} */}
        </div>
      </div>
    </div>
  );
};

export default BankAccount;

import React from "react";
import { Formik, Form } from "formik";

import TextField from "../utils/TextField";
import Text from "../utils/Text";
import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";
import Img from "../utils/Image";
import MiniCard from "../utils/MinCard";
import Span from "../utils/Span";
import ScrollAble from "../utils/Scroll";

import Apple from "../assets/images/Apple.png";

const EmploymentDetail = (props) => {
  const { setState, show, text, screenSize, setBankActive } = props;

  const validValues = {
    name: "",
    date: "",
    idType: "",
    idNumber: "",
  };
  return (
    <React.Fragment>
      <ScrollAble mobStyle={75}>
        <Intro
          onClick={() => setState(show - 1)}
          text={text}
          show={show}
          btnTxt="Edit Current address"
          outline="outline-primary"
          size="xxl"
          screenSize={screenSize}
        />
        <div className="w-100 p-0">
          <div className="w-100 d-flex ">
            <MiniCard className="h-50 p-2 d-flex flex-row w-100 border-1">
              <Img
                src={Apple}
                alt="Profile"
                className="img-fluid"
                loading="lazy"
                style={{ height: "81px" }}
              />
              <div className="h-25">
                <Text height={0} className="">
                  Apple In. <br></br>
                  <Span>Technology</Span>
                </Text>
                <div className="d-flex flex-column align-content-start">
                  <div className="d-flex flex-row align-content-start">
                    <div className="w-75 d-flex flex-column ">
                      <Text className="" top={35} fontSize={11} color="#303333">
                        Sr. Product Manager
                      </Text>
                      <Text className="" top={20} color="#8D9899" fontSize={10}>
                        Position
                      </Text>
                    </div>
                    <div className="d-flex flex-column align-content-start">
                      <Text
                        className=""
                        left={10}
                        top={35}
                        fontSize={11}
                        color="#303333"
                      >
                        12/12/2020
                      </Text>
                      <Text
                        className=""
                        left={10}
                        top={20}
                        color="#8D9899"
                        fontSize={10}
                      >
                        Started
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </MiniCard>
          </div>
          <div className="p-0 w-100 container">
            <Formik initialValues={validValues}>
              {(formik) => (
                <React.Fragment>
                  <Form>
                    <div className="p-0 w-100">
                      <div className=" w-100 d-flex flex-column align-content-start">
                        <div className="w-100 d-flex flex-column input-label">
                          <div className="">
                            <Text height={8} lineheight={26} left={14}>
                              Name of Supervisor
                            </Text>
                          </div>
                          <div>
                            {" "}
                            <TextField
                              className="info-form border-0"
                              name="name"
                              type="text"
                              placeholder="Full Name"
                              background="#f7fafa"
                            />
                          </div>
                        </div>
                        <div className="w-100 d-flex flex-column  input-label">
                          <div className="">
                            {" "}
                            <Text height={8} lineheight={26} left={14}>
                              Phone of Supervisor
                            </Text>
                          </div>
                          <TextField
                            className="info-form border-0"
                            label="text"
                            name="date"
                            type="text"
                            placeholder="(000) 000-0000"
                            background="#f7fafa"
                          />
                        </div>
                        <div className="w-100 d-flex flex-column  input-label">
                          <div className="">
                            {" "}
                            <Text height={8} lineheight={26} left={14}>
                              Email of Supervisor
                            </Text>
                          </div>
                          <TextField
                            className="info-form border-0"
                            label="text"
                            name="idType"
                            type="text"
                            placeholder="example@supervisor.com"
                            background="#f7fafa"
                          />
                        </div>
                        <div className="w-100 d-flex flex-column  input-label">
                          <div className="">
                            <Text height={8} lineheight={26} left={14}>
                              Monthly Gross income
                            </Text>
                          </div>
                          <TextField
                            className="info-form border-0"
                            label="text"
                            name="idNumber"
                            type="text"
                            placeholder="$ 00 000.00"
                            background="#f7fafa"
                          />
                        </div>
                      </div>
                      <div className="container w-100 mt-3 d-flex flex-column align-items-end p-0">
                        <OutlineButton
                          outline="secondary-outline"
                          size="xl"
                          onClick={() => {
                            setBankActive(true);
                            setState(show + 1);
                          }}
                        >
                          <div>
                            <Text fontSize={16} color="#1496A2">
                              Confirm and continue
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
      </ScrollAble>
    </React.Fragment>
  );
};

export default EmploymentDetail;

import React from "react";
import { Formik, Form } from "formik";

import Intro from "../utils/Intro";
import Img from "../utils/Image";
import Text from "../utils/Text";
import Span from "../utils/Span";
import TextField from "../utils/TextField";
import OutlineButton from "../utils/OutlineButton";
import ScrollAble from "../utils/Scroll";

import profilePicBlur from "../assets/images/profilePicBlur.png";

const EditInfo = (props) => {
  const { show, text, setState, setEdit, spanIndex, screenSize } = props;

  const validValues = {
    name: "",
    date: "",
    idType: "",
    idNumber: "",
  };
  return (
    <React.Fragment>
      <ScrollAble mobStyle={35}>
        <Intro
          onClick={() => setEdit(false)}
          text={text}
          show={show}
          btnTxt="Edit ID type"
          spanIndex={spanIndex}
          outline="outline-primary"
          size="xxl"
          screenSize={screenSize}
        />
        <div className="p-0 w-100 container">
          <Formik initialValues={validValues}>
            {(formik) => (
              <React.Fragment>
                <Form>
                  <div className="p-0 mt-3 w-100">
                    <div className=" w-100 d-flex flex-column align-content-start">
                      <div className="p-3 w-100 d-flex justify-content-around img-upload">
                        <div>
                          <Img src={profilePicBlur} />
                        </div>
                        <div className="w-100">
                          <div className="w-100 h-auto d-flex flex-column mt-2">
                            <Text
                              className="container p-0 "
                              color="#A4B1B3"
                              fontSize={14}
                              left={10}
                              height={12}
                              lineheight={14}
                            >
                              <Span color="#1496A2" fontweight={600}>
                                Upload
                              </Span>{" "}
                              another photo of yourself
                            </Text>
                            <Text
                              className=""
                              color="#A4B1B3"
                              fontSize={10}
                              left={10}
                            >
                              Accepted formats: JPEG, PNG, JPG
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="w-100 d-flex flex-column input-label">
                        <div className="">
                          <Text height={8} lineheight={26} left={14}>
                            Name
                          </Text>
                        </div>
                        <div>
                          {" "}
                          <TextField
                            className="info-form border-0"
                            name="name"
                            type="text"
                            placeholder="Jennifer Bianca Roberts"
                            background="#f7fafa"
                          />
                        </div>
                      </div>
                      <div className="w-100 d-flex flex-column  input-label">
                        <div className="">
                          {" "}
                          <Text height={8} lineheight={26} left={14}>
                            Date of birth
                          </Text>
                        </div>
                        <TextField
                          className="info-form border-0"
                          label="text"
                          name="date"
                          type="text"
                          placeholder="12 Dec 1985"
                          background="#f7fafa"
                        />
                      </div>
                      <div className="w-100 d-flex flex-column  input-label">
                        <div className="">
                          {" "}
                          <Text height={8} lineheight={26} left={14}>
                            Id Type
                          </Text>
                        </div>
                        <TextField
                          className="info-form border-0"
                          label="text"
                          name="idType"
                          type="text"
                          placeholder="Driver's Lisence"
                          background="#f7fafa"
                        />
                      </div>
                      <div className="w-100 d-flex flex-column  input-label">
                        <div className="">
                          <Text height={8} lineheight={26} left={14}>
                            ID number
                          </Text>
                        </div>
                        <TextField
                          className="info-form border-0"
                          label="text"
                          name="idNumber"
                          type="text"
                          placeholder="3140593"
                          background="#f7fafa"
                        />
                      </div>
                    </div>
                  </div>
                </Form>
              </React.Fragment>
            )}
          </Formik>
        </div>
        <div className="container w-100 mt-2 text-end p-0">
          <OutlineButton
            outline="outline-secondary"
            size="xl"
            onClick={() => {
              setState(show + 1);
              setEdit(false);
            }}
          >
            Confirm and continue
          </OutlineButton>
        </div>
      </ScrollAble>
    </React.Fragment>
  );
};

export default EditInfo;

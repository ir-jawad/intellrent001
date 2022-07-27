import React from "react";
import { Formik, Form } from "formik";
import { HiOutlineLocationMarker } from "react-icons/hi";

import TextField from "../utils/TextField";
import Text from "../utils/Text";
import Span from "../utils/Span";
import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";
import MiniCard from "../utils/MinCard";
import Img from "../utils/Image";
import ScrollAble from "../utils/Scroll";

import house from "../assets/images/house.png";

const OwnerInfo = (props) => {
  const { setState, show, text, spanIndex, screenSize } = props;

  const validValues = {
    name: "",
    date: "",
    idType: "",
    idNumber: "",
  };
  return (
    <React.Fragment>
      <ScrollAble mobStyle={50}>
        <Intro
          onClick={() => setState(show - 1)}
          text={text}
          show={show}
          spanIndex={spanIndex}
          outline="outline-primary"
          size="xxl"
          btnTxt="Edit Current address"
          screenSize={screenSize}
        />
        <MiniCard className="d-flex h-auto p-2 w-100 flex-row border-1">
          <div className="">
            <Img
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
            <Text className="">
              73 Noriega St <br></br>
              <Span color="#A4B1B3">San Francisco, CA 94118</Span>
            </Text>
          </div>
        </MiniCard>
        <div className="container w-100 p-0">
          <Formik initialValues={validValues}>
            {(formik) => (
              <React.Fragment>
                <Form>
                  <div className="w-100 d-flex flex-column justify-content-start">
                    <div className="w-100 d-flex flex-column input-label">
                      <div className="">
                        <Text height={8} lineheight={26} left={12}>
                          Owner/Manager
                        </Text>
                      </div>
                      <div>
                        {" "}
                        <TextField
                          className="info-form border-0"
                          name="name"
                          type="email"
                          placeholder="Email"
                          background="#f7fafa"
                        />
                      </div>
                    </div>
                    <div className="w-100 d-flex flex-column input-label">
                      <div className="">
                        <Text height={8} lineheight={26} left={14}>
                          Owner/Manager
                        </Text>
                      </div>
                      <div>
                        {" "}
                        <TextField
                          className="info-form border-0"
                          name="name"
                          type="email"
                          placeholder="$ 000"
                          background="#f7fafa"
                        />
                      </div>
                    </div>
                    <div className="w-100 d-flex flex-column input-label">
                      <div className="">
                        <Text height={8} lineheight={26} left={14}>
                          Owner/Manager
                        </Text>
                      </div>
                      <div>
                        {" "}
                        <TextField
                          className="info-form border-0"
                          name="name"
                          type="email"
                          placeholder="(000) 000-0000"
                          background="#f7fafa"
                        />
                      </div>
                    </div>
                    <div className="w-100 d-flex flex-column input-label">
                      <div className="">
                        <Text height={8} lineheight={26} left={14}>
                          Owner/Manager
                        </Text>
                      </div>
                      <div>
                        {" "}
                        <TextField
                          className="info-form border-0"
                          name="name"
                          type="email"
                          placeholder="ex@manager.com"
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
        <div className="container w-100 text-end p-0 mt-3">
          <OutlineButton
            outline="outline-secondary"
            size="xl"
            onClick={() => setState(show + 1)}
          >
            Save
          </OutlineButton>
        </div>
      </ScrollAble>
    </React.Fragment>
  );
};

export default OwnerInfo;

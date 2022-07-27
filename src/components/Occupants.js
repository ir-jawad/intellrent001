import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";

import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";
import Text from "../utils/Text";
import Img from "../utils/Image";
import TextField from "../utils/TextField";
import MiniCard from "../utils/MinCard";
import ScrollAble from "../utils/Scroll";

import Vector22 from "../assets/images/Vector22.png";
import Vector23 from "../assets/images/Vector23.png";
import Vector24 from "../assets/images/Vector24.png";

import "../assets/css/create-account.css";

const Occupants = (props) => {
  const [occupant, setOccupant] = useState(0);

  const {
    show,
    text,
    handleState,
    spanIndex,
    setState,
    setAdult,
    handleBlock,
    setBlockActive,
    activeBlock,
    screenSize,
  } = props;

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

  const handleOccupant = (event) => {
    event.stopPropagation();
  };

  return (
    <React.Fragment>
      <ScrollAble mobStyle={show === 6 ? 220 : 320}>
        <Intro
          text={text}
          show={show}
          onClick={
            show === 5
              ? () => {
                  setState(show - 1);
                  setAdult(false);
                }
              : () => {
                  setState(show - 1);
                  setBlockActive(false);
                }
          }
          btnTxt={`${
            show === 5 ? "View acceptance criteria" : "Edit my information"
          }`}
          spanIndex={spanIndex}
          screenSize={screenSize}
          outline="outline-primary"
          size="xxl"
        />
        <MiniCard className="container p-1 w-100 h-auto border-1 cursor-pointer">
          <div onClick={(e) => handleBlock(e)}>
            <Text height={5} left={6}>
              {" "}
              Older than 18 years{" "}
            </Text>
            <div className="h-auto d-flex justify-content-center ">
              <Text fontSize={16} color="#303333" width={311} height={0}>
                {" "}
                Adults
              </Text>
              <div
                onClick={(e) => e.stopPropagation()}
                className="w-25 d-flex justify-content-around align-items-center"
              >
                {" "}
                <div
                  onClick={() =>
                    occupant === 0 ? null : setOccupant(occupant - 1)
                  }
                >
                  {" "}
                  <Img src={Vector22} />
                </div>
                <Text fontSize={14} height={4} lineheight={19} color="#303333">
                  {occupant}
                </Text>
                <div
                  onClick={() =>
                    occupant >= 0 ? setOccupant(occupant + 1) : null
                  }
                >
                  <Img src={Vector23} />
                </div>
              </div>
            </div>
          </div>
        </MiniCard>
        {activeBlock && (
          <div className="w-100 h-auto">
            <Formik
              initialValues={validValues}
              validationSchema={errorSchema}
              onSubmit={registrationHandler}
            >
              {(formik) => (
                <React.Fragment>
                  {
                    <Form>
                      <div className="w-100 d-flex flex-column input-label">
                        <div className="">
                          <Text height={10} lineheight={26} left={13}>
                            Occupant {occupant}
                          </Text>
                        </div>
                        <div>
                          {" "}
                          <TextField
                            className="info-form border-0"
                            name="name"
                            type="email"
                            placeholder="Email address"
                            background="#f7fafa"
                          />
                        </div>
                      </div>
                      {!formik.errors.email && formik.touched.email ? (
                        <Img src={Vector24} />
                      ) : null}
                    </Form>
                  }
                </React.Fragment>
              )}
            </Formik>
          </div>
        )}
        <div className="mt-2 container d-flex align-items-end justify-content-end p-0">
          <OutlineButton
            outline="outline-secondary"
            size="mdx"
            onClick={() => {activeBlock && handleState("adult-check")}}
          >
            {" "}
            Continue
          </OutlineButton>
        </div>
      </ScrollAble>
    </React.Fragment>
  );
};

export default Occupants;

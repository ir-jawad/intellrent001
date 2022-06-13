import React, { useState } from "react";

import PhoneInput from "react-phone-number-input";

import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";
import Text from "../utils/Text";

import "react-phone-number-input/style.css";
import "../assets/css/create-account.css";

const Phone = (props) => {
  const [value, setValue] = useState();
  const { show, text, handleState } = props;

  return (
    <div>
      <Intro
        text={text}
        show={show}
        btnTxt="Edit co-occupants"
        className="custom-intro-container"
      />
      <div className="d-flex flex-column gap-2">
        <div className="adult-container">
          <div className="">
            <Text> Mobile Number</Text>
          </div>
          <div className=" d-flex flex-row age-container">
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
            />
            <div className="age-section">
              <OutlineButton className="add-more-btn">+ Add more</OutlineButton>
            </div>
          </div>
        </div>
      </div>
      <OutlineButton
        onClick={() => handleState("security")}
        className="confirm-btn"
      >
        Continue
      </OutlineButton>
    </div>
  );
};

export default Phone;

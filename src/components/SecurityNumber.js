import React from "react";

import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";

import "../assets/css/security.css";

const SecurityNumber = (props) => {
  const { show, text, handleState } = props;

  return (
    <div>
      <Intro
        text={text}
        show={show}
        btnTxt="Edit phone number"
        className="custom-intro-container"
      />
      <div className="social-container">
        <OutlineButton
          onClick={() => handleState("socialNext")}
          className="y-btn"
        >
          Yes
        </OutlineButton>
        <OutlineButton onClick={() => handleState("")} className="n-btn">
          No
        </OutlineButton>
      </div>
    </div>
  );
};

export default SecurityNumber;

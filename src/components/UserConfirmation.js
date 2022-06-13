import React from "react";

import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";
import Img from "../utils/Image";

import user from "../assets/images/user.png";
import Vector17 from "../assets/images/Vector17.png";

import "../assets/css/userConfirmation.css";

const Confirmation = (props) => {
  const { handleState, show, text } = props;
  return (
    <div>
      <Intro
        text={text}
        show={show}
        btnTxt="View acceptance criteria"
        className="custom-intro-container"
      />
      <div className="d-flex confirmation-container">
        <div className="">
          <Img src={user} />
        </div>
        <div className=""></div>
        <div className="d-flex flex-column justify-content-around user-card">
          <p className="text-head">Jennifer Roberts </p>
          <p className="text-small">jroberts@renter.com </p>
        </div>
        <div>
          <Img src={Vector17} />
        </div>
      </div>
      <div className="mt-3 d-flex flex-column align-content-end justify-content-between access-container">
        <OutlineButton
          onClick={() => handleState("ocupant")}
          className="btn-access"
        >
          Yes, That’s me
        </OutlineButton>
        <OutlineButton className="btn-process">
          I want to edit this information
        </OutlineButton>
      </div>
    </div>
  );
};

export default Confirmation;

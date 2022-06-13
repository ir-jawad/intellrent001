import React from "react";
import { historyFLag } from "./dummy";

import Img from "../utils/Image";
import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";
import Text from "../utils/Text";
import Span from "../utils/Span";

import Group22 from "../assets/images/Group22.png";
import Vector26 from "../assets/images/Vector26.png";

import "../assets/css/history.css";

const CreditHistory = (props) => {
  const { handleState, show, text } = props;
  return (
    <div>
      <Intro
        text={text}
        show={show}
        btnTxt="Edit phone number"
        className="custom-intro-container"
      />
      <div className="d-flex">
        <div className="d-flex flex-wrap">
          {historyFLag?.map((flag, index) => {
            return (
              <ul key={index}>
                <li className="d-flex list-unstyled list-style">{flag}</li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="d-flex flex-row privacy-container">
        <Img src={Group22} />
        <Text style={{ color: "#5E6566" }}>
          We use <Span>Nova Credit</Span> as our international credit score
          verification partner. You can read more details in our{" "}
          <Span style={{ color: "skyBlue" }}>privacy policy.</Span>
        </Text>
      </div>
      <div className="d-flex flex-column justify-content-between credit-container">
        <OutlineButton>
          Yes & Import Credit Rating <Img src={Vector26} />
        </OutlineButton>
        <OutlineButton
          onClick={() => handleState("addSsNumber")}
          style={{
            width: "327px",
            color: "#A4B1B3",
            border: "1px solid #A4B1B3",
          }}
        >
          I don’t have credit in the countries listed
        </OutlineButton>
      </div>
    </div>
  );
};

export default CreditHistory;

import React from "react";

import Intro from "../utils/Intro";
import OutlineButton from "../utils/OutlineButton";
import Text from "../utils/Text";

import "../assets/css/uploadid.css";

const Employment = (props) => {
  const { show, text, setState } = props;

  return (
    <div>
      <Intro
        text={text}
        show={show}
        btnTxt="Edit SSN information"
        className="custom-intro-container"
      />
      <div className="">
        <div
          className="id-container"
          style={{
            position: "relative",
            top: "-44px",
            height: "9rem",
          }}
        >
          <OutlineButton
            onClick={() => setState(show + 1)}
            style={{ width: "179px", height: "32px" }}
          >
            <div className="btn-flex">
              <Text className="group-text-btn">Currently Employed</Text>
            </div>
          </OutlineButton>
          <OutlineButton style={{ width: "134px", height: "32px" }}>
            <div className="btn-flex">
              {" "}
              <Text className="group-text-btn">Self Employeed</Text>
            </div>
          </OutlineButton>
          <OutlineButton
            style={{
              width: "62px",
              height: "32px",
              border: "1px solid #A4B1B3",
              color: "#A4B1B3 !important",
            }}
          >
            <div className="btn-flex">
              {" "}
              <Text className="group-text-btn">Other</Text>
            </div>
          </OutlineButton>
        </div>
      </div>
    </div>
  );
};

export default Employment;

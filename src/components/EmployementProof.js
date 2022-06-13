import React from "react";

import Intro from "../utils/Intro";
import Img from "../utils/Image";
import OutlineButton from "../utils/OutlineButton";
import Text from "../utils/Text";

import Pen from "../assets/images/Pen.png";
import HouseImg from "../assets/images/HouseImg.png";
import Envelop from "../assets/images/Envelop.png";

import "../assets/css/uploadid.css";

const EmploymentProof = (props) => {
  const { show, text, setState } = props;

  return (
    <div>
      <Intro
        text={text}
        show={show}
        btnTxt="Edit SSN information"
        className="custom-intro-container"
      />
      <div className="mt-1">
        <div className="id-container h-30">
          <OutlineButton
            onClick={() => setState(show + 1)}
            style={{ width: "302px", height: "32px" }}
          >
            <div className="btn-flex">
              <Img src={Envelop} style={{ width: "18px", height: "16px" }} />
              <Text className="group-text-btn">
                Current pay stubs (last 2 months)
              </Text>
            </div>
          </OutlineButton>
          <OutlineButton style={{ width: "175px", height: "32px" }}>
            <div className="btn-flex">
              {" "}
              <Img src={HouseImg} style={{ width: "18px", height: "16px" }} />
              <Text className="group-text-btn">Bank statements</Text>
            </div>
          </OutlineButton>
          <OutlineButton style={{ width: "188px", height: "32px" }}>
            <div className="btn-flex">
              {" "}
              <Img src={Pen} style={{ width: "18px", height: "16px" }} />
              <Text className="group-text-btn">Official offer letter</Text>
            </div>
          </OutlineButton>
        </div>
      </div>
    </div>
  );
};

export default EmploymentProof;

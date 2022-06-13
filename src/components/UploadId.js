import React from "react";

import Intro from "../utils/Intro";
import Img from "../utils/Image";
import OutlineButton from "../utils/OutlineButton";
import Text from "../utils/Text";

import car from "../assets/images/car.png";
import passport from "../assets/images/passport.png";
import IdCard from "../assets/images/IdCard.png";
import securityCard from "../assets/images/securityCard.png";
import stars from "../assets/images/stars.png";

import "../assets/css/uploadid.css";

const UploadId = (props) => {
  const { show, text, setState } = props;

  return (
    <div>
      <Intro
        text={text}
        show={show}
        btnTxt="Edit SSN information"
        className="custom-intro-container"
      />
      <div className="mt-3">
        <div className="id-container">
          <OutlineButton
            onClick={() => setState(show + 1)}
            style={{ width: "162px", height: "32px" }}
          >
            <div className="btn-flex">
              <Img src={car} style={{ width: "18px", height: "16px" }} />
              <Text className="group-text-btn">Drivers License</Text>
            </div>
          </OutlineButton>
          <OutlineButton style={{ width: "112px", height: "32px" }}>
            <div className="btn-flex">
              {" "}
              <Img src={passport} style={{ width: "18px", height: "16px" }} />
              <Text className="group-text-btn">Passport</Text>
            </div>
          </OutlineButton>
          <OutlineButton style={{ width: "143px", height: "32px" }}>
            <div className="btn-flex">
              {" "}
              <Img src={IdCard} style={{ width: "18px", height: "16px" }} />
              <Text className="group-text-btn">State ID card</Text>
            </div>
          </OutlineButton>
          <OutlineButton style={{ width: "196px", height: "32px" }}>
            <div className="btn-flex">
              {" "}
              <Img
                src={securityCard}
                style={{ width: "18px", height: "16px" }}
              />
              <Text className="group-text-btn">Social Security Card</Text>
            </div>
          </OutlineButton>
          <OutlineButton style={{ width: "90px", height: "32px" }}>
            <div className="btn-flex">
              {" "}
              <Img src={stars} style={{ width: "18px", height: "16px" }} />
              <Text className="group-text-btn">Other</Text>
            </div>
          </OutlineButton>
        </div>
      </div>
    </div>
  );
};

export default UploadId;

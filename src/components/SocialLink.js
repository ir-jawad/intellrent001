import React from "react";

import Text from "../utils/Text";
import Img from "../utils/Image";
import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";

import linkedin from "../assets/images/linkedin.png";
import openInNew from "../assets/images/openInNew.png";

import "../assets/css/property-detail.css";

const SocilaLink = (props) => {
  const { setState, show, text } = props;

  return (
    <div>
      <Intro
        text={text}
        show={show}
        className="custom-intro-container"
        btnTxt="Edit Current address"
      />
      <div className="">
        <div
          className="id-container"
          style={{
            position: "relative",
            top: "3px",
            height: "6rem",
          }}
        >
          <OutlineButton style={{ width: "272px", height: "40px" }}>
            <div className="btn-flex">
              <Img src={linkedin} />
              <Text className="group-text-btn">Connect LinkedIn Profile</Text>
              <Img src={openInNew} />
            </div>
          </OutlineButton>
          <OutlineButton
            onClick={() => setState(show + 1)}
            style={{
              width: "250px",
              height: "32px",
              border: "1px solid #A4B1B3",
            }}
          >
            <div className="btn-flex">
              {" "}
              <Text style={{ color: "#A4B1B3" }} className="group-text-btn">
                I’d rather fill in the data manually
              </Text>
            </div>
          </OutlineButton>
        </div>
      </div>
    </div>
  );
};

export default SocilaLink;

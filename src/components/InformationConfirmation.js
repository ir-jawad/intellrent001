import React from "react";

import Intro from "../utils/Intro";
import Img from "../utils/Image";
import OutlineButton from "../utils/OutlineButton";
import Text from "../utils/Text";

import profilePic15 from "../assets/images/profilePic15.png";

import "../assets/css/confirmInfo.css";

const ConfirmInfo = (props) => {
  const { show, text, setEdit } = props;

  return (
    <div>
      <Intro
        text={text}
        show={show}
        btnTxt="Edit ID type"
        className="custom-intro-container"
      />
      <div className="d-flex flex-row align-content-center info-confirm-container">
        <div className="d-flex flex-row align-content-start info-content">
          <div>
            <Img src={profilePic15} />
          </div>
          <div className="d-flex flex-column align-content-start right-content">
            <div className="d-flex flex-column align-content-start head-content-info">
              <Text
                style={{
                  fontSize: "16px",
                  color: "#303333",
                }}
              >
                Jennifer Bianca Roberts
              </Text>
              <Text style={{ fontSize: "12px", lineHeight: "0px" }}>
                434 2nd Ave, San Francisco, CA 94118
              </Text>
            </div>
            <div className="d-flex flex-column align-content-start sub-info">
              <Text
                style={{
                  fontSize: "14px",
                  color: "#303333",
                }}
              >
                12 Dec 1984
              </Text>
              <Text style={{ fontSize: "12px", lineHeight: "0px" }}>
                Date of birth
              </Text>
            </div>
            <div className="d-flex flex-row align-content-start most-info">
              <div className="d-flex flex-column align-content-start first-text">
                <Text
                  style={{
                    fontSize: "14px",
                    color: "#303333",
                  }}
                >
                  Driver’s License
                </Text>
                <Text style={{ fontSize: "12px", lineHeight: "0px" }}>
                  ID Type
                </Text>
              </div>
              <div className="d-flex flex-column align-content-start second-text">
                <Text
                  style={{
                    fontSize: "14px",
                    color: "#303333",
                  }}
                >
                  31405943
                </Text>
                <Text style={{ fontSize: "12px", lineHeight: "0px" }}>
                  ID Number
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between bottom-info-btn">
        <OutlineButton>Confirm and continue</OutlineButton>
        <OutlineButton onClick={() => setEdit(true)} className="info-btn-fix">
          Edit details
        </OutlineButton>
      </div>
    </div>
  );
};

export default ConfirmInfo;

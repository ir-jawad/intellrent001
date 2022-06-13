import React, { useState, useEffect } from "react";
import { ProgressBar, Row, Col } from "react-bootstrap";

import Intro from "../utils/Intro";
import Img from "../utils/Image";
import Text from "../utils/Text";

import Group25 from "../assets/images/Group25.png";
import Vector30 from "../assets/images/Vector30.png";
import Vector31 from "../assets/images/Vector31.png";
import Vector33 from "../assets/images/Vector33.png";
import Dob from "../assets/images/Dob.png";
import close from "../assets/images/close.png";
import Span from "../utils/Span";

import "../assets/css/lisence.css";

const FileUpload = (props) => {
  const [count, setCount] = useState(0);

  const { show, text, file, setState } = props;
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count === 100) {
        clearInterval(intervalId);
        setState(show + 1);
      } else {
        setCount(count + 100);
      }
    }, 1000);

    return () => clearInterval();
  });
  return (
    <div>
      <Intro
        text={text}
        show={show}
        btnTxt="Edit ID type"
        className="custom-intro-container"
      />

      <div className="lisence-container">
        <div className="img-card">
          <Img src={Group25} style={{ position: "relative", top: "-4rem" }} />
        </div>
        {file.length > 0 ? (
          <div className="form-field">
            <Text className="uploading-text">Uploading file</Text>
            <div className="d-flex flex-row justify-content-start align-content-start progress-sec">
              <Img src={Vector33} style={{ with: "24px", height: "24px" }} />
              <div className="d-flex flex-row justify-content-between pro-field">
                <Text className="font-fix">{file[0].name}</Text>
              </div>
              <Text style={{ lineHeight: "28px", fontSize: "12px" }}>
                {count}%
              </Text>
              <div className="close-fix">
                <Img src={close} />
              </div>
            </div>
            <Row className="progress-fill">
              <Col>
                {" "}
                <ProgressBar className="progress-fix" now={count} />
              </Col>
            </Row>
          </div>
        ) : (
          <div className="file-container">
            <Text style={{ height: "0px", width: "230px" }}>
              Drop your file(s) in here or choose file to{" "}
              <Span style={{ color: "skyblue" }}>upload</Span>
            </Text>
            <Text style={{ height: "0px", width: "180px", fontSize: "9px" }}>
              Accepted formats: JPEG, PDF, PNG, JPG
            </Text>
          </div>
        )}
      </div>
      {file.length == 0 && (
        <div className="d-flex flex-column align-content-start info-container">
          <div className="d-flex flex-column align-content-start user-detail">
            <Text className="fix-sm-text">
              The following information will be collected:
            </Text>
          </div>
          <div className="d-flex flex-row align-content-start card-address">
            <div className="d-flex flex-row align-content-center child-card-text">
              <Img src={Vector30} />{" "}
              <Text className="fix-sm-text">Legal Name</Text>
            </div>
            <div className="d-flex flex-row align-content-center  child-card-text">
              <Img src={Vector31} />{" "}
              <Text className="fix-sm-text">ID Number</Text>
            </div>
            <div className="d-flex flex-row align-content-center  child-card-text">
              <Img src={Dob} />{" "}
              <Text className="fix-sm-text">Date of Birth</Text>
            </div>
            <div className="d-flex flex-row align-content-center  child-card-text">
              <Img src={Vector31} />{" "}
              <Text className="fix-sm-text">Present Address</Text>
            </div>
            <div className="d-flex flex-row align-content-center  child-card-text">
              <Img src={Vector31} />{" "}
              <Text className="fix-sm-text">ID TYpe</Text>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;

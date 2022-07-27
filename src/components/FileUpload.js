import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";

import Intro from "../utils/Intro";
import Img from "../utils/Image";
import Text from "../utils/Text";
import Span from "../utils/Span";
import MiniCard from "../utils/MinCard";
import ScrollAble from "../utils/Scroll";

import Group25 from "../assets/images/Group25.png";
import Vector30 from "../assets/images/Vector30.png";
import Vector31 from "../assets/images/Vector31.png";
import Vector33 from "../assets/images/Vector33.png";
import Dob from "../assets/images/Dob.png";
import close from "../assets/images/close.png";

import "../assets/css/lisence.css";

const FileUpload = (props) => {
  const [count, setCount] = useState(0);
  const { show, text, file, setState, screenSize } = props;

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
    <React.Fragment>
      <ScrollAble mobStyle={270}>
        <Intro
          onClick={() => setState(show - 1)}
          text={text}
          show={show}
          btnTxt="Edit ID type"
          outline="outline-primary"
          size="xxl"
          screenSize={screenSize}
        />
        <MiniCard className="mt-2 container p-0 w-100 h-50 d-flex align-items-center border-1">
          <div className="container d-flex flex-column aligm-items-center w-100 p-0">
            <div className="container h-50 w-100">
              <Img src={Group25} top={-45} left={1} className="w-100 " />
            </div>
            {file.length > 0 ? (
              <div className="container w-100 p-2 h-auto border-0">
                <div className="p-2 w-100 h-100  d-flex flex-column border-1">
                  <Text className="" color="#A4B1B3" fontSize={10} height={0}>
                    Uploading file
                  </Text>
                  <div className="p-0 d-flex flex-row justify-content-start ">
                    <Img src={Vector33} height={24} />
                    <div className="w-100 d-flex flex-row justify-content-between align-items-center">
                      <div className="p-1 w-100">
                        <Text color="#303333" height={0}>
                          {file[0].name}
                        </Text>
                      </div>
                    </div>
                    <div className="w-25 d-flex justify-content-around">
                      <Text lineheight={28} fontSize={12}>
                        {count}%
                      </Text>
                      <Img src={close} />
                    </div>
                  </div>
                  <div>
                    <ProgressBar now={count} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="file-container">
                <Text height={0} width={230}>
                  Drop your file(s) in here or choose file to{" "}
                  <Span color="skyblue">upload</Span>
                </Text>
                <Text height={0} width={180} fontSize={9}>
                  Accepted formats: JPEG, PDF, PNG, JPG
                </Text>
              </div>
            )}
          </div>
        </MiniCard>
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
      </ScrollAble>
    </React.Fragment>
  );
};

export default FileUpload;

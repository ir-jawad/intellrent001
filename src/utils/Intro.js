import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import Img from "./Image";
import Progress from "./Progress";
import Text from "./Text";
import OutlineButton from "./OutlineButton";

import ProfilePhoto from "../assets/images/profile-face.png";
import Phone from "../assets/images/phone.png";
import Message from "../assets/images/message.png";
import Vector18 from "../assets/images/Vector18.png";

import "../assets/css/intro.css";

const Intro = (props) => {
  const {
    show,
    text,
    btnTxt,
    spanIndex,
    onClick,
    screenSize,
    fontWeight,
    fontSize,
    lineheight,
    width,
    size,
    outline
  } = props;

  const spanWord = [
    "Rental Application",
    "adult occupants",
    "confirm",
    "owner/manager",
    "Linkedin",
  ];

  useEffect(() => {
    document.getElementById("mt").innerHTML = props.text.replace(
      spanWord[spanIndex],
      `<span style="color:#1496A2;"> ${spanWord[spanIndex]} </span>`
    );
  }, []);

  return (
    <>
      {show > 0 && (
        <div className={`container  p-0 d-flex justify-content-between + ${screenSize.dynamicWidth <=375 ? 'position-fixed w-75':'w-100'}`}>
          {show === 44 ? null:
          <>
           <div style={{ opacity: `${show < 4 && 0}` }}>
            <Progress show={show} />
          </div>
          <OutlineButton onClick={onClick} outline={outline} size={size}>
              <div className='d-flex justify-content-around align-items-center'>{btnTxt} {show >= 4 && <Img left={10} src={Vector18} />}</div>
            </OutlineButton>
          </>
          }
        </div>
      )}
      <Row>
        <Col className='mt-5 d-flex flex-column align-items-start'>
          <React.Fragment>
            <Row className="d-flex flex-column">
              <Col>
                <img
                  src={ProfilePhoto}
                  alt="Profile"
                  className="img-fluid me-4"
                  loading="lazy"
                />
                <img
                  src={Phone}
                  alt="Profile"
                  className="img-fluid me-4"
                  loading="lazy"
                />
                <img
                  src={Message}
                  alt="Profile"
                  className="img-fluid me-5"
                  loading="lazy"
                />
              </Col>
            </Row>
            <Text
              className="mt-2 intro-text"
              id="mt"
              fontSize={fontSize}
              lineheight={lineheight}
              fontWeight={fontWeight}
              width={width}
            >
              {text}
            </Text>
          </React.Fragment>
        </Col>
      </Row>
    </>

  );
};

export default Intro;

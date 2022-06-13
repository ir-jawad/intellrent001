import React from "react";

import OutlineButton from "./OutlineButton";
import Img from "./Image";
import Progress from "./Progress";

import ProfilePhoto from "../assets/images/profile-face.png";
import Phone from "../assets/images/phone.png";
import Message from "../assets/images/message.png";
import Popout from "../assets/images/Popout.png";
import Vector9 from "../assets/images/Vector9.png";
import Vector18 from "../assets/images/Vector18.png";

import "../assets/css/intro.css";
import "../assets/css/progress.css";

const Intro = (props) => {
  const { show, text, className, btnTxt, setCriteria } = props;
  return (
    <div className="intro-section">
      {show > 0 && (
        <div className="custom-progress">
          <div style={{ opacity: `${show < 4 && 0}` }}>
            <Progress show={show} />
          </div>
          {show === 1 ? (
            <OutlineButton className="custom-btn">{btnTxt}</OutlineButton>
          ) : (
            show >= 4 && (
              <OutlineButton
                className="custom-btn"
                style={{ width: `${show >= 4 && "236px"}` }}
              >
                {btnTxt} {show >= 4 && <Img src={Vector18} />}
              </OutlineButton>
            )
          )}
        </div>
      )}
      <div className="">
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
        <img src={Message} alt="Profile" className="img-fluid" loading="lazy" />
      </div>
      <p className={`intro-text mt-3 + ${className}`}>{text}</p>
      {props.show === 3 && (
        <OutlineButton
          onClick={() => setCriteria(true)}
          className="d-flex justify-content-around align-content-center popup-sec"
        >
          <Img src={Popout} />
          <Img src={Vector9} />
        </OutlineButton>
      )}
    </div>
  );
};

export default Intro;

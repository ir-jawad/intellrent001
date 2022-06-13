import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";

import house from "../assets/images/house.png";

import "../assets/css/property-detail.css";

const PriorProperty = (props) => {
  const { setState, show, text } = props;

  return (
    <div>
      <Intro text={text} show={show} btnTxt="Edit Current address" />
      <div className="d-flex detail-container" style={{ width: "439px" }}>
        <div className="">
          <img
            src={house}
            alt="Profile"
            className="img-fluid"
            loading="lazy"
            style={{ height: "81px" }}
          />
        </div>
        <div className="">
          <HiOutlineLocationMarker className="mx-2 icon" />
        </div>
        <div className="">
          <p className="heading-top">
            73 Noriega St <br></br>
            <span className="heading-below">San Francisco, CA 94118</span>
          </p>
        </div>
      </div>
      <div className="social-container" style={{ top: "27px" }}>
        <OutlineButton onClick={() => setState(show + 1)} className="y-btn">
          Yes
        </OutlineButton>
        <OutlineButton className="n-btn">No</OutlineButton>
      </div>
    </div>
  );
};

export default PriorProperty;

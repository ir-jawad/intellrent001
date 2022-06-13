import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";
import Review from "../utils/Review";

import House from "../assets/images/house.png";
import Bed from "../assets/images/bed.png";

import "../assets/css/property-detail.css";

const PropertyDetail = (props) => {
  const { setState, show, text, setProperty } = props;

  const handleMultyStates = () => {
    setProperty(true);
    setState(show + 1);
  };

  return (
    <div>
      <Intro text={text} />
      <div className="d-flex detail-container">
        <div className="">
          <img src={House} alt="Profile" className="img-fluid" loading="lazy" />
          <div className="text-center mt-3">
            <p className="rent">$900/mth</p>
          </div>
        </div>
        <div className="">
          <HiOutlineLocationMarker className="mx-2 icon" />
        </div>
        <div className="">
          <p className="heading-top">
            436 Balboa St <br></br>
            <span className="heading-below">San Francisco, CA 94118</span>
          </p>
          <img src={Bed} alt="Profile" className="img-fluid" loading="lazy" />
          <p className="feature">
            x2.0 <br></br>
            <span className="feature-name">Bed</span>
          </p>
          <OutlineButton
            onClick={() => handleMultyStates()}
            className="property-btn"
          >
            View property
          </OutlineButton>
        </div>
      </div>
      <Review
        setState={setState}
        show={show}
        subText="Before we get started, please review the acceptance criteria."
        btnText=" View rental criteria"
        className="bottom-btn"
      />
    </div>
  );
};

export default PropertyDetail;

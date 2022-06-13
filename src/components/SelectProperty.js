import React from "react";

import Intro from "../utils/Intro";
import Review from "../utils/Review";

import "../assets/css/userConfirmation.css";

const SelectProperty = (props) => {
  const { show, text, setMap, setState } = props;

  const handleStates = () => {
    setMap(true);
    setState(show + 1);
  };

  return (
    <div>
      <Intro text={text} className="custom-intro-container" />
      <Review
        onClick={() => handleStates()}
        show={show}
        btnText="Enter property information"
        className="btn-outline"
      />
    </div>
  );
};

export default SelectProperty;

import React from "react";

import Intro from "../utils/Intro";
import Review from "../utils/Review";

const SelectProperty = (props) => {
  const { show, text, setMap, setState, spanIndex, screenSize } = props;

  const handleStates = () => {
    setMap(true);
    setState(show + 1);
  };

  return (
    <React.Fragment>
      <Intro
            text={text}
            spanIndex={spanIndex}
            screenSize={screenSize}
          />
          <Review
            onClick={() => handleStates()}
            show={show}
            btnText="Enter property information"
          />
    </React.Fragment>
  );
};

export default SelectProperty;

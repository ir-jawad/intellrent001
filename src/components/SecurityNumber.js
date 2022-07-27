import React from "react";

import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";
import ScrollAble from "../utils/Scroll";

const SecurityNumber = (props) => {
  const { show, text, handleState, setState, screenSize } = props;

  return (
    <React.Fragment>
      <ScrollAble mobStyle={324}>
      <Intro
        onClick={() => setState(show - 1)}
        text={text}
        show={show}
        btnTxt="Edit phone number"
        outline="outline-primary"
        size="xxl"
        screenSize={screenSize}
      />
      <div className="w-100 flex-column p-0 d-flex align-items-end mt-2 container">
        <OutlineButton
          outline="outline-secondary"
          size="mdx"
          onClick={() => handleState("socialNext")}
        >
          Yes
        </OutlineButton>
        <OutlineButton
          outline="outline-primary"
          size="xxl"
          top={15}
          onClick={() => handleState("")}
        >
          No
        </OutlineButton>
      </div>
      </ScrollAble>
    </React.Fragment>
  );
};

export default SecurityNumber;

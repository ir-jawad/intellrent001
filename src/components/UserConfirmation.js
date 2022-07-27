import React from "react";

import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";
import Img from "../utils/Image";
import MiniCard from "../utils/MinCard";
import Text from "../utils/Text";
import ScrollAble from "../utils/Scroll";

import user from "../assets/images/user.png";
import Vector17 from "../assets/images/Vector17.png";

const Confirmation = (props) => {
  const { handleState, show, text, setIndex, spanIndex, setState, screenSize } =
    props;
  return (
    <React.Fragment>
     <ScrollAble mobStyle={250}>
     <Intro
        onClick={() => setState(show - 1)}
        text={text}
        show={show}
        spanIndex={spanIndex}
        btnTxt="View acceptance criteria"
        screenSize={screenSize}
        outline="outline-secondary"
        size="xxl"
      />
      <MiniCard className="p-1 d-flex flex-row justify-content-between h-auto w-100 border-1">
        <div className="">
          <Img src={user} />
        </div>
        <div className="w-75 h-50 d-flex flex-column justify-content-around">
          <Text fontSize={16} height={6} lineheight={24} color="#303333">
            Jennifer Roberts
          </Text>
          <Text fontSize={14} height={0}>
            jroberts@renter.com
          </Text>
        </div>
        <Img src={Vector17} top={16} />
      </MiniCard>
      <div className="w-100 p-0 mt-3 d-flex flex-column justify-content-between align-items-end">
        <OutlineButton
          outline="outline-secondary"
          size="mdx"
          onClick={() => {
            handleState("ocupant");
            setIndex(spanIndex + 1);
          }}
        >
          Yes, That’s me
        </OutlineButton>
        <OutlineButton outline="outline-secondary" size="xm" top={10}>
          I want to edit this information
        </OutlineButton>
      </div>
     </ScrollAble>
    </React.Fragment>
  );
};

export default Confirmation;

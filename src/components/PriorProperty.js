import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";
import Span from "../utils/Span";
import Text from "../utils/Text";
import MiniCard from "../utils/MinCard";
import Img from "../utils/Image";
import ScrollAble from "../utils/Scroll";

import house from "../assets/images/house.png";

const PriorProperty = (props) => {
  const { setState, show, text, screenSize } = props;

  return (
    <React.Fragment>
     <ScrollAble mobStyle={240}>
     <Intro
        onClick={() => setState(show - 1)}
        text={text}
        show={show}
        btnTxt="Edit Current address"
        outline="outline-primary"
        size="xxl"
        screenSize={screenSize}
      />
      <MiniCard className="h-auto p-2 w-100 border-1">
        <div className="d-flex ">
          <div className="">
            <Img
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
          <div className="mt-1">
            <Text className='' fontSize={14} color=' #303333'>
              73 Noriega St <br></br>
              <Span className='' color='#AEBBBD'>San Francisco, CA 94118</Span>
            </Text>
          </div>
        </div>
      </MiniCard>
      <div className="container w-100 d-flex flex-column align-items-end p-0">
        <OutlineButton
          outline="outline-secondary"
          size="xl"
          onClick={() => setState(show + 1)}
        >
          Yes
        </OutlineButton>
        <OutlineButton outline="outline-primary" size="xxl" top={13}>
          No
        </OutlineButton>
      </div>
     </ScrollAble>
    </React.Fragment>
  );
};

export default PriorProperty;

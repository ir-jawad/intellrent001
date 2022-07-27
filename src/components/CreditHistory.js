import React from "react";
import { historyFLag } from "./dummy";

import Img from "../utils/Image";
import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";
import Text from "../utils/Text";
import Span from "../utils/Span";
import ScrollAble from "../utils/Scroll";

import Group22 from "../assets/images/Group22.png";
import Vector26 from "../assets/images/Vector26.png";

const CreditHistory = (props) => {
  const { handleState, show, text, setState, screenSize } = props;

  return (
    <React.Fragment>
      <ScrollAble mobStyle={130}>
        <Intro
          onClick={() => setState(show - 1)}
          text={text}
          show={show}
          btnTxt="Edit phone number"
          outline="outline-primary"
          size="xxl"
          screenSize={screenSize}
        />
        <div className="container h-25 w-100 p-0">
          <div className="100 -container d-flex justify-content-start">
            <div className="d-flex align-items-start flex-wrap">
              {historyFLag?.map((flag, index) => {
                return (
                  <ul className="p-0" key={index}>
                    <li className="p-2 list-unstyled ">{flag}</li>
                  </ul>
                );
              })}
            </div>
          </div>
          <div className="container p-1 d-flex flex-row  "></div>
          <div className="container p-1 h-auto w-100 border-1 info-form">
            <div className="w-100 d-flex flex-row align-items-center ">
              <Img src={Group22} left={10} />
              <div className="w-100 pl-1 w-75 p-1">
                {" "}
                <Text className="" color="#5E6566" fontSize={10} height={15}>
                  We use <Span>Nova Credit</Span> as our international credit
                  score verification partner. You can read more details in our{" "}
                  <Span color="skyBlue">privacy policy.</Span>
                </Text>
              </div>
            </div>
          </div>
          <div className="container w-100 flex-column p-0 d-flex align-items-end mt-2">
            <div>
              <OutlineButton
                className="d-flex"
                outline="outline-secondary"
                size="xl"
              >
                <div className="mt-1">
                  <Text className="" fontSize={16} color="#1496A2">
                    Yes & Import Credit Rating
                  </Text>{" "}
                </div>
                <div>
                  <Img left={10} src={Vector26} />
                </div>
              </OutlineButton>
            </div>
            <div>
              {" "}
              <OutlineButton
                width={310}
                top={12}
                outline="outline-primary"
                size="xxl"
                onClick={() => handleState("addSsNumber")}
              >
                <div className="mt-1">
                  <Text className="" fontSize={15}>
                    I don’t have credit in the countries listed
                  </Text>
                </div>
              </OutlineButton>
            </div>
          </div>
        </div>
      </ScrollAble>
    </React.Fragment>
  );
};

export default CreditHistory;

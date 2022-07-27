import React from "react";

import Intro from "../utils/Intro";
import Img from "../utils/Image";
import OutlineButton from "../utils/OutlineButton";
import Text from "../utils/Text";

import Pen from "../assets/images/Pen.png";
import HouseImg from "../assets/images/HouseImg.png";
import Envelop from "../assets/images/Envelop.png";
import ScrollAble from "../utils/Scroll";

const EmploymentProof = (props) => {
  const { show, text, setState, screenSize } = props;

  return (
    <React.Fragment>
     <ScrollAble mobStyle={290}>
     <Intro
        onClick={() => setState(show - 1)}
        text={text}
        show={show}
        btnTxt="Edit SSN information"
        outline="primary-outline"
        size="xxl"
        screenSize={screenSize}
      />
      <div className="container w-100 p-0 mt-1">
        <div className="w-100 mt-2 d-flex justify-content-between flex-column align-items-end ">
          <OutlineButton
            outline="secondary-outline"
            size="xl"
            onClick={() => setState(show + 1)}
          >
            <div className="mt-1 d-flex justify-content-center align-items-center">
              <div>
                {" "}
                <Img src={Envelop} top={-18} />
              </div>
              <div>
                {" "}
                <Text className='' fontSize={16} left={5} width={250} color="#1496A2">
                  Current pay stubs (last 2 months)
                </Text>
              </div>
            </div>
          </OutlineButton>
          <OutlineButton outline="secondary-outline" size="xl" top={13}>
            <div className="mt-1 d-flex flex-row justify-content-around align-items-center">
              {" "}
              <div>
                {" "}
                <Img src={HouseImg} top={-18} />
              </div>
              <div>
                {" "}
                <Text className='' fontSize={16} left={5} color="#1496A2">
                  Bank statements
                </Text>
              </div>
            </div>
          </OutlineButton>
          <OutlineButton outline="secondary-outline" size="xl" top={25}>
            <div className="mt-1 d-flex flex-row justify-content-around align-items-center">
              {" "}
              <Img src={Pen} top={-18} />
              <Text className='' fontSize={16} left={5} color="#1496A2">
                Official offer letter
              </Text>
            </div>
          </OutlineButton>
        </div>
      </div>
     </ScrollAble>
    </React.Fragment>
  );
};

export default EmploymentProof;

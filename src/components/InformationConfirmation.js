import React from "react";

import Intro from "../utils/Intro";
import Img from "../utils/Image";
import OutlineButton from "../utils/OutlineButton";
import Text from "../utils/Text";
import Span from "../utils/Span";
import ScrollAble from "../utils/Scroll";

import profilePic15 from "../assets/images/profilePic15.png";

const ConfirmInfo = (props) => {
  const { show, text, setEdit, spanIndex, setState, screenSize } = props;

  return (
    <React.Fragment>
      <ScrollAble mobStyle={140}>
        <Intro
          onClick={() => {
            setState(show - 1);
          }}
          text={text}
          show={show}
          btnTxt="Edit ID type"
          spanIndex={spanIndex}
          outline="outline-primary"
          size="xxl"
          screenSize={screenSize}
        />
        <div className="mt-2 p-2 w-100 h-auto d-flex flex-row align-content-center border-1">
          <div className="">
            <Img src={profilePic15} />
          </div>
          <div className="p-0 container d-flex flex-column justify-content-around h-100 w-75">
            <div className="container p-0">
              <Text className="" fontSize={16} color="#303333">
                Jennifer Bianca Roberts
                <br />
                <Span fontSize={15} color="#8D9899">
                  {" "}
                  434 2nd Ave, San Francisco, CA 94118
                </Span>
              </Text>
            </div>
            <div className="container p-0 ">
              <Text className="" fontSize={14} height={6} color="#303333">
                12 Dec 1984
              </Text>
              <Text fontSize={12} height={5}>
                Date of birth
              </Text>
            </div>
            <div className="w-100  d-flex justify-content-around ">
              <div className="container p-0">
                <Text className="" fontSize={14} height={5} color="#303333">
                  Driver’s License
                </Text>
                <Text fontSize={12}>ID Type</Text>
              </div>
              <div className="container p-0">
                <Text className="" fontSize={14} height={6} color="#303333">
                  31405943
                </Text>
                <Text fontSize={12}>ID Number</Text>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 container p-0 w-100 d-flex flex-column align-items-end">
          <OutlineButton outline="outline-secondary" size="xl">
            Confirm and continue
          </OutlineButton>
          <OutlineButton
            outline="outline-primary"
            size="xxl"
            onClick={() => setEdit(true)}
            top={20}
            width={109}
            border="1px solid #A4B1B3"
            color="#A4B1B3"
          >
            Edit details
          </OutlineButton>
        </div>
      </ScrollAble>
    </React.Fragment>
  );
};

export default ConfirmInfo;

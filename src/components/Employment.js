import React from "react";

import Intro from "../utils/Intro";
import OutlineButton from "../utils/OutlineButton";
import ScrollAble from "../utils/Scroll";
import Text from "../utils/Text";

const Employment = (props) => {
  const { show, text, setState, setIndex, spanIndex, screenSize } = props;

  return (
    <React.Fragment>
       <ScrollAble mobStyle={270}>
       <Intro
            onClick={() => setState(show - 1)}
            text={text}
            show={show}
            btnTxt="Edit current address"
            outline="outline-primary"
            size="xxl"
            screenSize={screenSize}
          />
          <div className="container  w-100 p-0  mt-5">
            <div className="w-100 d-flex flex-column align-items-end">
              <OutlineButton
                outline="outline-secondary"
                size="xl"
                onClick={() => {
                  setState(show + 1);
                  setIndex(spanIndex + 1);
                }}
                width={179}
                height={32}
              >
                <div className="mt-1">
                  <Text className='' fontSize={16} color="#1496A2">
                    Currently Employed
                  </Text>
                </div>
              </OutlineButton>
              <OutlineButton top={10} outline="outline-secondary" size="xl">
                <div className="mt-1">
                  {" "}
                  <Text className='' fontSize={16} color="#1496A2">
                    Self Employeed
                  </Text>
                </div>
              </OutlineButton>
              <OutlineButton top={20} outline="outline-secondary" size="xl">
                <div className="mt-1">
                  {" "}
                  <Text className='' fontSize={16} color="#1496A2">
                    Other
                  </Text>
                </div>
              </OutlineButton>
            </div>
          </div>
       </ScrollAble>
    </React.Fragment>
  );
};

export default Employment;

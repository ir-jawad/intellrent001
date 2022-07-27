import React from "react";

import Text from "../utils/Text";
import Img from "../utils/Image";
import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";
import ScrollAble from "../utils/Scroll";

import linkedin from "../assets/images/linkedin.png";
import openInNew from "../assets/images/openInNew.png";

const SocilaLink = (props) => {
  const { setState, show, text, spanIndex, screenSize } = props;

  return (
    <React.Fragment>
      <ScrollAble mobStyle={300}>
        <Intro
          onClick={() => setState(show - 1)}
          text={text}
          show={show}
          spanIndex={spanIndex}
          outline="outline-primary"
          size="xxl"
          btnTxt="Edit Current address"
          screenSize={screenSize}
        />
        <div className="container w-100 mt-4 p-0">
          <div className="container w-100 d-flex flex-column w-100 align-items-end p-0">
            <OutlineButton outline="secondary-outline" size="xl">
              <div className="mt-1 d-flex justify-content-center align-items-center w-100">
                <Img src={linkedin} top={-20} left={-10}/>
                <Text className=''
                  fontSize={18}
                  color="#1496A2"
                >
                  Connect LinkedIn Profile
                </Text>
                <div>
                  {" "}
                  <Img src={openInNew} top={-20} left={10} />
                </div>
              </div>
            </OutlineButton>
            <OutlineButton
              outline="outline-primary"
              size="xxl"
              top={10}
              onClick={() => setState(show + 1)}
            >
              <div className="mt-1">
                {" "}
                <Text className='' color="#A4B1B3" fontSize={16}>
                  I’d rather fill in the data manually
                </Text>
              </div>
            </OutlineButton>
          </div>
        </div>
      </ScrollAble>
    </React.Fragment>
  );
};

export default SocilaLink;

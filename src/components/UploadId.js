import React from "react";

import Intro from "../utils/Intro";
import Img from "../utils/Image";
import OutlineButton from "../utils/OutlineButton";
import Text from "../utils/Text";
import ScrollAble from "../utils/Scroll";

import car from "../assets/images/car.png";
import passport from "../assets/images/passport.png";
import IdCard from "../assets/images/IdCard.png";
import securityCard from "../assets/images/securityCard.png";
import stars from "../assets/images/stars.png";

const UploadId = (props) => {
  const { show, text, setState, screenSize } = props;

  return (
    <React.Fragment>
       <ScrollAble mobStyle={200}>
       <Intro
        onClick={() => setState(show - 1)}
        text={text}
        show={show}
        btnTxt="Edit SSN information"
        outline="outline-primary"
        size="xxl"
        screenSize={screenSize}
      />
      <div className="p-0 mt-2 container w-100  d-flex flex-column justify-content-end align-items-end">
        <OutlineButton
          outline="outline-secondary"
          size="xl"
          onClick={() => setState(show + 1)}
        >
          <div className='w-100 d-flex justify-content-around'>
            <Img src={car} left={-3}/>
            <Text fontSize={16} left={8} color="#1496A2">
              Drivers License
            </Text>
            </div>
        </OutlineButton>
        <OutlineButton outline="outline-secondary" size="xl" top={12}>
          <div className="w-100 d-flex justify-content-around">
            {" "}
            <Img src={passport} left={-3}/>
            <Text fontSize={16} left={8} color="#1496A2">
              Passport
            </Text>
          </div>
        </OutlineButton>
        <OutlineButton outline="outline-secondary" size="xl" top={22}>
          <div className="w-100 d-flex justify-content-around">
            {" "}
            <Img src={IdCard} left={-3}/>
            <Text fontSize={16} left={8} color="#1496A2">
              State ID card
            </Text>
          </div>
        </OutlineButton>
        <OutlineButton outline="outline-secondary" size="xl" top={32}>
          <div className="w-100 d-flex justify-content-around">
            {" "}
            <Img src={securityCard} left={-3} top={1}/>
            <Text fontSize={16} color="#1496A2" left={8}>
              Social Security Card
            </Text>
          </div>
        </OutlineButton>
        <OutlineButton outline="outline-secondary" size="xl" top={42}>
          <div className="w-100 d-flex justify-content-around">
            {" "}
            <Img src={stars} top={-4} />
            <Text fontSize={16} color="#1496A2" left={8}>
              Other
            </Text>
          </div>
        </OutlineButton>
      </div>
       </ScrollAble>
    </React.Fragment>
  );
};

export default UploadId;

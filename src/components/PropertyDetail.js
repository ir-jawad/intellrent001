import React, { useState } from "react";

import { HiOutlineLocationMarker } from "react-icons/hi";

import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";
import Review from "../utils/Review";
import MiniCard from "../utils/MinCard";
import Text from "../utils/Text";
import Img from "../utils/Image";
import Span from "../utils/Span";

import House from "../assets/images/house.png";
import Bed from "../assets/images/bed.png";
import Union from "../assets/images/Union.png";
import ScrollAble from "../utils/Scroll";

const PropertyDetail = (props) => {
 
  const {
    setState,
    show,
    text,
    setProperty,
    spanIndex,
    setKeyPoints,
    setMiniCheck,
    screenSize,
  } = props;
 
  const handleMultyStates = () => {
    setProperty(true);
    setState(show + 1);
  };

  return (
    <React.Fragment>
     <ScrollAble mobStyle={130}>
     <Intro text={text} spanIndex={spanIndex} screenSize={screenSize} />
      <MiniCard>
        <div className="container w-100 p-0 d-flex">
          <div className="">
            <Img
              src={House}
              alt="Profile"
              className="img-fluid"
              loading="lazy"
            />
            <div className="text-center">
              <Text className="">$900/mth</Text>
            </div>
          </div>
          <div className="">
            <HiOutlineLocationMarker className="mx-2 icon" />
          </div>
          <div className="container p-0 w-50">
            <Text className="" height={51} fontSize={16} color="#303333">
              436 Balboa St <br></br>
              <Span fontSize={16} color="#8D9899">
                San Francisco, CA 94118
              </Span>
            </Text>
            <div className="container p-0 d-flex ">
               <div className='d-flex flex-column'>
                 <Img
                    src={Bed}
                    alt="Profile"
                    className="img-fluid"
                    loading="lazy"
                  />
                  <Text color="#303333">
                    x2.0 <br></br>
                    <Span color="#8D9899">Bed</Span>
                  </Text>
                 </div>
                <div className='ml-1 d-flex flex-column'>
                <Img
                    src={Union}
                    alt="Profile"
                    className="img-fluid"
                    loading="lazy"
                  />
                  <Text color="#303333">
                    x2.0 <br></br>
                    <Span color="#8D9899">Bath</Span>
                  </Text>
                </div>
                </div>
                <OutlineButton 
                  outline="outline-secondary"
                  size="mdx"
                  onClick={() => handleMultyStates()}
                >
                  <Text fontSize={15} width={98} color='#1496A2'>View Property</Text>
                </OutlineButton> 
          </div>
        </div>
      </MiniCard>
      <Review
        outline="outline-secondary"
        size="lg"
        onClick={() => {
          setState(show + 3);
          setKeyPoints(true);
          setMiniCheck(true);
        }}
        show={show}
        subText="Before we get started, please review the acceptance criteria."
        btnText={screenSize.dynamicWidth <= 375 ? "Continue with this property":" View rental criteria"}
        width={screenSize.dynamicWidth > 375 ? 175 : 234} fontSize={16}
        btnClass="d-flex justify-content-end w-100"
      />
     </ScrollAble>
    </React.Fragment>
  );
};

export default PropertyDetail;

import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";
import Text from "../utils/Text";
import Span from "../utils/Span";
import MiniCard from "../utils/MinCard";
import Img from "../utils/Image";
import ScrollAble from "../utils/Scroll";

import locationPic from "../assets/images/locationPic.png";


const RentedProperty = (props) => {
  const { setState, show, text, setIndex, spanIndex, screenSize } = props;

  return (
    <React.Fragment>
      <ScrollAble mobStyle={240}>
      <Intro
            onClick={() => setState(show - 1)}
            text={text}
            show={show}
            btnTxt="Edit Current address"
            screenSize={screenSize}
            outline='outline-primary' size='xxl'
          />
         <MiniCard className='w-100 h-auto p-2 border-1'>
         <div className="d-flex">
            <div className="">
              <Img
                src={locationPic}
                alt="Profile"
                className="img-fluid"
                loading="lazy"
              />
            </div>
            <div className="">
              <HiOutlineLocationMarker className="mx-2 icon" />
            </div>
            <div className="">
              <Text className=''>
                73 Noriega St <br></br>
                <Span fontSize={16} color='#A4B1B3'
                >San Francisco, CA 94118</Span>
              </Text>
            </div>
          </div>
         </MiniCard>
          <div className="container d-flex flex-column  text-end p-0">
           <div>
           <OutlineButton outline='outline-secondary' size='xl'
              onClick={() => {
                setState(show + 1);
                setIndex(spanIndex + 1);
              }}
            >
              Yes
            </OutlineButton>
           </div>
            <div><OutlineButton outline='outline-primary' size='xxl' top={20}
            >No</OutlineButton>
          </div></div>
      </ScrollAble>
    </React.Fragment>
  );
};

export default RentedProperty;

import React from "react";

import OutlineButton from "../utils/OutlineButton";
import Text from '../utils/Text';

import "../assets/css/review.css";

const Review = (props) => {
  
  const { subText, btnText, btnClass, width, onClick, left, top, outline, size, fontSize} = props;
  return (
    <React.Fragment>
      <Text className='review'>{subText}</Text>
      <div className={btnClass}>
        <OutlineButton width={width} onClick={onClick} left={left} top={top} size={size} outline={outline} fontSize={fontSize}>
          {btnText}
        </OutlineButton>
      </div>
    </React.Fragment>
  );
};

export default Review;

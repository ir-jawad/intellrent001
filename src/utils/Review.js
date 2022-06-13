import React from "react";

import OutlineButton from "../utils/OutlineButton";

import "../assets/css/review.css";

const Review = (props) => {
  const { subText, btnText, className, onClick } = props;
  return (
    <React.Fragment>
      <h2 className="review mt-4">{subText}</h2>
      <div className="text-end mt-3">
        <OutlineButton className={className} onClick={onClick}>
          {btnText}
        </OutlineButton>
      </div>
    </React.Fragment>
  );
};

export default Review;

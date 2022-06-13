import React from "react";

import OutlineButton from "../utils/OutlineButton";

import Img from "../utils/Image";
import Text from "../utils/Text";
import Intro from "../utils/Intro";
import Review from "../utils/Review";

import { rentalDetail } from "./dummy";

import "../assets/css/criteria.css";

const RentelCriteria = (props) => {
  const { text, show, setCriteria, handleState } = props;
  return (
    <div>
      <Intro
        text={text}
        show={show}
        setCriteria={setCriteria}
        btnTxt="View Property"
      />
      <div className="d-flex flex-column">
        {rentalDetail.map((data, index) => {
          return (
            <ul className="list-container" key={index}>
              <div className="list-content">
                <li className="custom-img">
                  <Img class="imgStyle" src={data.image} />
                </li>
                <li
                  className={
                    data.credit
                      ? "d-flex justify-content-between list-text"
                      : "list-text"
                  }
                >
                  {data.description}
                  {data.ref && <Img src={data.ref} />}
                </li>
                {data.price ? (
                  <div className="secondary-text">
                    <li className="sm-txt">{data.price}</li>
                  </div>
                ) : data.media ? (
                  <div>
                    <OutlineButton className="custom-outline">
                      <Text className="sm-btn-txt">Connect LinkedIn</Text>
                    </OutlineButton>
                  </div>
                ) : data.credit ? (
                  <div className="d-flex flex-row justify-content-between align-content-center">
                    <div className="small-txt">
                      <li>
                        <Text className="sub-txt">{data.credit}</Text>
                      </li>
                    </div>
                  </div>
                ) : (
                  data.process && (
                    <div>
                      <OutlineButton className="custom-outline">
                        <Text className="sm-btn-txt">Upload Now</Text>
                      </OutlineButton>
                    </div>
                  )
                )}
              </div>
            </ul>
          );
        })}
      </div>
      <Review
        onClick={() => handleState()}
        show={show}
        btnText="Yes, I understand. Continue"
        className="btn-outline"
      />
    </div>
  );
};
export default RentelCriteria;

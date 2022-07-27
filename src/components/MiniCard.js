import React from "react";

import Img from "../utils/Image";
import Text from "../utils/Text";

import house from "../assets/images/house.png";
import "../assets/css/mini-header.css";

const MinPropertyCard = () => {
 
  return (
    <React.Fragment>
        <div className="min-card-container">
          <div className="d-flex flex-row align-content-center ">
            <div>
              <Img src={house} width="40px" height="40px" />
            </div>
            <Text className='' fontSize={14} lineheight={37} left={10} color="#303333">
              $900/mth
            </Text>
            <div className="container d-flex flex-column align-content-start ">
              <div className="">
                <Text className='' fontSize={14} color="#303333" height={5}>
                  436 Balboa St
                </Text>
              </div>
              <Text className='' fontSize={14} color='#A4B1B3'>San Francisco, CA 94118</Text>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
};

export default MinPropertyCard;

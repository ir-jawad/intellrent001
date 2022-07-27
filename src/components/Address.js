import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

import Img from "../utils/Image";
import Intro from "../utils/Intro";
import Review from "../utils/Review";

import Vector19 from "../assets/images/Vector19.png";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const Address = (props) => {
  const { show, text, handleState, screenSize } = props;

  return (
    <React.Fragment>
      <Intro
        text={text}
        show={show}
        className="custom-intro-container"
        screenSize={screenSize}
      />
      <div className="address-container">
        <div className="">
          <Map
            google={props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176 }}
          />
        </div>
      </div>
      <div className="search-sec">
        <Img src={Vector19} />
        <div></div>
      </div>
      <Review onClick={() => handleState()} btnText=" Home" />
    </React.Fragment>
  );
};

export default GoogleApiWrapper({
  apiKey: "",
})(Address);

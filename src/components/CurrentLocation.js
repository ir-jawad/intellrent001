import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

import Img from "../utils/Image";
import Intro from "../utils/Intro";
import Review from "../utils/Review";

import Vector19 from "../assets/images/Vector19.png";

import "../assets/css/address.css";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const CurrentLocation = (props) => {
  const { show, text, setState } = props;

  return (
    <div>
      <Intro
        text={text}
        show={show}
        btnTxt="Edit ID type"
        className="custom-intro-container"
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
      <Review onClick={() => setState(show + 1)} btnText=" Home" />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "",
})(CurrentLocation);

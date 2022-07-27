import React, { useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import Intro from "../utils/Intro";
import ScrollAble from "../utils/Scroll";

const mapStyles = {
  width: "85%",
  height: "40%",
  marginTop:'22px'
};

const CurrentLocation = (props) => {
  const { show, text, setState, setEdit, screenSize } = props;
  useEffect(() => {
    setTimeout(() => {
      setState(show + 1);
    }, 2000);
  }, []);
  return (
    <React.Fragment>
       <ScrollAble mobStyle={250}>
       <Intro
            onClick={() => {
              setEdit(true);
              setState(show - 1);
            }}
            text={text}
            show={show}
            btnTxt="Edit ID type"
            screenSize={screenSize}
            outline='primary-outline' size='xxl'
          />
          <div className='p-0 container w-100'>
            <div className='mt-1 w-100'>
              <Map
                onClick={(ev) => {
                  // console.log("latitide = ", ev.lat);
                  // console.log("longitude = ", ev.lng);
                }}
                google={props.google}
                zoom={8}
                style={screenSize.dynamicWidth <=375 ?{width:'128%', height:'150%'}:mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
              />
            </div>
          </div>
       </ScrollAble>
    </React.Fragment>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyASZJAIrO87ewZri0VQj9_ZtdQLwn-85Dg",
})(CurrentLocation);

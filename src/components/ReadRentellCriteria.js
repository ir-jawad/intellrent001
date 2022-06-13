import React from "react";

import Img from "../utils/Image";
import Review from "../utils/Review";

import Vector20 from "../assets/images/Vector20.png";
import Vector21 from "../assets/images/Vector21.png";

import "../assets/css/readCriteria.css";

const ReadRentelCriteria = (props) => {
  const { handleState, show } = props;
  return (
    <div className="docx-container">
      <div className="d-flex">
        <Img
          onClick={() => handleState(show)}
          src={Vector20}
          width="16px"
          height="16px"
        />
        <p className="rentel-title">Rental Criteria </p>
        <Img src={Vector21} width="16px" height="16px" />
      </div>
      <div className="text-container">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr Sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet. At vero eos et accusam et justo Duo
        dolores et ea rebum. Stet clita kasd gubergren No sea takimata sanctus
        est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elit Duo dolores et ea rebum. Stet clita kasd gubergren No
        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
        sit amet, consetetur sadipscing elitDuo dolores et ea rebum. Stet clita
        kasd gubergren No sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitDuo
      </div>
      <Review
        onClick={() => handleState()}
        className="criteria-outline"
        show={show}
        btnText=" I have read the Rental Criteria"
      />
    </div>
  );
};

export default ReadRentelCriteria;

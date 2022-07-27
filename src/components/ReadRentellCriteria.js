import React from "react";

import Img from "../utils/Image";
import Review from "../utils/Review";
import Text from "../utils/Text";

import { readDocx } from "./dummy";

import Vector20 from "../assets/images/Vector20.png";
import Vector21 from "../assets/images/Vector21.png";

import "../assets/css/readCriteria.css";

const ReadRentelCriteria = (props) => {
  const { handleState, show } = props;

  return (
    <div className="docx-container">
      <div className="d-flex">
        <Img width={16} height={16}
          onClick={() => handleState(show)}
          src={Vector20}
        />
        <p className="rentel-title">Rental Criteria </p>
        <Img src={Vector21} width={16} height={16} />
      </div>
      <div className="text-container">
        {readDocx?.map((docx, index) => {
          return (
            <ul key={index}>
              <li className="list-unstyled d-flex align-content-start custom-list-docx">
                <div>
                  <Text className="secondary"
                    fontSize = {16} color="#000000">
                    {docx.heading}
                  </Text>
                  <div>
                    <Text className="secondary"
                      fontSize={12.9} color="#303333" width="24rem">
                      {docx.paragraph}
                    </Text>
                  </div>
                  {docx.list
                    ? docx.list.map((item, index) => {
                        return (
                          <ul key={index}>
                            <li className="">
                              <Text className="secondary"
                                  fontSize={12.9} color="#303333"
                                >
                                {item}
                              </Text>
                            </li>
                          </ul>
                        );
                      })
                    : null}
                </div>
              </li>
            </ul>
          );
        })}
      </div>
      <div className="btn-docx">
        <Review
          onClick={() => handleState()}
          className="criteria-outline"
          show={show}
          btnText=" I have read the Rental Criteria"
        />
      </div>
    </div>
  );
};

export default ReadRentelCriteria;

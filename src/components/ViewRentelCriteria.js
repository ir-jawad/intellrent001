import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";

import OutlineButton from "../utils/OutlineButton";
import Img from "../utils/Image";
import Text from "../utils/Text";
import Intro from "../utils/Intro";
import Review from "../utils/Review";
import ScrollAble from "../utils/Scroll";

import { rentalDetail } from "./dummy";

const RentelCriteria = (props) => {
  const { text, show, setCriteria, setKeyPoints, setState, screenSize } = props;

  return (
    <React.Fragment>
      <ScrollAble mobStyle={50}>
        <Intro onClick={()=> {setKeyPoints(false); setState(show-3)}}
          text={text}
          show={show}
          setCriteria={setCriteria}
          btnTxt="View Property"
          screenSize={screenSize}
          outline="outline-secondary"
          size="xxl"
        />
        <ListGroup className="w-100 p-0">
          {rentalDetail.map((item, index) => {
            return (
              <ListGroup.Item
                key={index}
                className="mt-2 w-100 p-0 border-1 rounded"
              >
                <div className="w-100 p-0 d-flex ">
                  <div className="p-0 d-flex w-100 ">
                    <div className="p-2 text-center">
                      {" "}
                      <Img src={item.image} customwidth={16} />
                    </div>
                    <div className="w-100 d-flex justify-content-between p-1">
                      {" "}
                      <Text className='' top={10} fontSize={12} color="#303333">
                        {item.description}
                      </Text>
                      <div className="">
                        <div className="">
                          {item.price && (
                            <Text  top={10} background="#E6F8FA" color="#1496A2">
                              {item.price}
                            </Text>
                          )}
                        </div>
                        <div className="">
                          {" "}
                          {item.process && (
                            <div className="mt-1">
                              <OutlineButton width={76}
                                outline="outline-secondary"
                                size="sm"
                              >
                                {" "}
                                <Text  color="#1496A2" left={-2} lineheight={9}>
                                  Upload Now
                                </Text>
                              </OutlineButton>
                            </div>
                          )}
                        </div>
                        <div>
                          {item.media && (
                            <div className="mt-1">
                              <OutlineButton size="sm" width={100}>
                                <Text lineheight={9} left={-1} color="#1496A2">
                                  Connect LinkedIn
                                </Text>
                              </OutlineButton>
                            </div>
                          )}
                        </div>
                        <div className="w-100">
                          <div className=" d-flex ">
                            <div className="">
                              {item.ref && <Img src={item.ref} />}
                            </div>
                            <div className="w-100">
                              {item.credit && (
                                <Text
                                  top={8}
                                  background="#E6F8FA"
                                  color="#1496A2"
                                >
                                  {item.credit}
                                </Text>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        <div className="mt-5 container w-100 text-end p-0">
          <Review
            outline="outline-secondary"
            size="xl"
            onClick={() => {
              setState(show + 1);
              setKeyPoints(false);
            }}
            show={show}
            btnText="Yes, I understand. Continue"
          />
        </div>
      </ScrollAble>
    </React.Fragment>
  );
};
export default RentelCriteria;

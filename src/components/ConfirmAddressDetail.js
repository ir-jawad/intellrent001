import React from "react";
import { Formik, Form } from "formik";

import Intro from "../utils/Intro";
import Text from "../utils/Text";
import OutlineButton from "../utils/OutlineButton";
import ScrollAble from "../utils/Scroll";

const ConfirmAddress = (props) => {
  const { show, text, setState, screenSize } = props;

  const validValues = {
    name: "",
    date: "",
    idType: "",
    idNumber: "",
  };

  return (
    <React.Fragment>
      <ScrollAble mobStyle={120}>
        <Intro
          onClick={() => setState(show - 2)}
          text={text}
          show={show}
          btnTxt="Edit current address"
          outline="outline-primary"
          size="xxl"
          screenSize={screenSize}
        />
        <div className="mt-2 w-100">
          <Formik initialValues={validValues}>
            {(formik) => (
              <React.Fragment>
                <Form>
                  <div className="w-100 d-flex flex-column align-content-start ">
                    <div className="p-2 w-100  d-flex flex-column align-content-start border-1 ">
                      <div className="">
                        {" "}
                        <Text  color="#A4B1B3" height={0}>
                          Street
                        </Text>
                      </div>
                      <div className="">
                        <Text className='' fontSize={14} color="#303333" height={0}>
                          434 2nd Ave
                        </Text>
                      </div>
                    </div>
                    <div className="mt-1 p-2 w-100 d-flex flex-column align-content-start border-1">
                      <Text height={10}>Apt #</Text>
                    </div>
                    <div className="mt-1 p-2 w-100 d-flex flex-column align-content-start border-1">
                      <Text fontSize={10} color="#A4B1B3" height={0}>
                        City
                      </Text>
                      <Text className='' fontSize={14} color="#303333" height={0}>
                        San Francisco
                      </Text>
                    </div>
                    <div className="mt-1 p-2 w-100 d-flex flex-column align-content-start border-1">
                      <Text fontSize={10} color="#A4B1B3" height={0}>
                        State
                      </Text>
                      <Text className='' fontSize={14} color="#303333" height={0}>
                        CA
                      </Text>
                    </div>
                    <div className="mt-1 p-2 w-100 d-flex flex-column align-content-start border-1">
                      <Text className='' fontSize={10} color="#A4B1B3" height={0}>
                        Zip
                      </Text>
                      <Text className='' fontSize={14} color="#303333" height={0}>
                        94188
                      </Text>
                    </div>
                  </div>
                </Form>
              </React.Fragment>
            )}
          </Formik>
        </div>
        <div className="mt-5 container w-100 text-end p-0">
          <OutlineButton
            outline="outline-secondary"
            size="xl"
            onClick={() => {
              setState(show + 1);
            }}
          >
            Confirm and continue
          </OutlineButton>
        </div>
      </ScrollAble>
    </React.Fragment>
  );
};

export default ConfirmAddress;

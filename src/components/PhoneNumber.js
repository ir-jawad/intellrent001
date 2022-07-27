import React, { useState } from "react";

import OutlineButton from "../utils/OutlineButton";
import Intro from "../utils/Intro";
import Text from "../utils/Text";
import ScrollAble from "../utils/Scroll";

const Phone = (props) => {
  const [addNumber, setAdd] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const { show, text, handleState, setState, setAdult, screenSize } = props;

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;

    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  const handleInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setInputValue(formattedPhoneNumber);
  };

  return (
    <React.Fragment>
      <ScrollAble mobStyle={267}>
        <Intro
          onClick={() => {
            setState(show - 1);
            setAdult(true);
          }}
          text={text}
          show={show}
          btnTxt="Edit co-occupants"
          outline="outline-primary"
          size="xxl"
          screenSize={screenSize}
        />
        <div className="mt-2 p-1 h-auto w-100 border-1">
          <div className="">
            <Text height={3} left={3}>
              {" "}
              Mobile Number
            </Text>
          </div>
          <div className="container p-0 w-100 d-flex flex-row">
            <input
              disabled={addNumber}
              className="w-100 phone-input"
              onChange={(e) => handleInput(e)}
              value={inputValue}
              placeholder="(777) 444-2131"
            />
            <div className="">
              <OutlineButton
                outline="secondary-outline"
                size="xs"
                onClick={() => setAdd(false)}
              >
                <Text width={55} lineheight={9}>
                  + Add more
                </Text>
              </OutlineButton>
            </div>
          </div>
        </div>
        <div className="mt-5 w-100 container d-flex align-items-end justify-content-end p-0">
          <OutlineButton
            outline="outline-secondary"
            size="mdx"
            onClick={() => handleState("security")}
          >
            Continue
          </OutlineButton>
        </div>
      </ScrollAble>
    </React.Fragment>
  );
};

export default Phone;

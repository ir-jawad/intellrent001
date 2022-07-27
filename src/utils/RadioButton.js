import React from "react";
import styled from "styled-components";

export default function RadioButton({ id, className, ...restProps }) {
  return (
    <RadioButtonWrapper className={className}>
      <input type="radio" id={id} {...restProps} />
      <label for={id} />
    </RadioButtonWrapper>
  );
}

const RadioButtonWrapper = styled.div`
  display: inline;
  & label {
    background-color: #FFFFFF;
    border: 2px solid #E6EFF0;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    width: 24px;
    height: 24px;
    &:after {
      background-color: #54BDC7;
      border-radius: 50%;
      content: "";
      display: none;
      position: absolute;
      top: 2px;
      left: 2px;
      width: 16px;
      height: 16px;
    }
  }

  & input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  & input[type="radio"]:checked + label:after {
    display: block;
  }
`;

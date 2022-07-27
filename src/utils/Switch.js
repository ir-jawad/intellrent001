import styled from "styled-components";
import { useState } from "react";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  ${({ active }) =>
    active
      ? `
    span {
        position:relative;
        left:44px;
        z-index:2;
        color: #1496A2;
    }
`
      : `span {
    position:relative;
    left:58px;
    z-index:2;
    color: #A4B1B3;
}
`}
`;

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: #ffffff;
  border: 2px solid #e6eff0;
  border-radius: 100px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: #e6eff0;
    border: 2px solid #dce5e6;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    &:before {
      transform: translate(32px, -50%);
      background: #54bdc7;
      border: 2px solid #17adbc;
    }
  }
`;

const ToggleSwitch = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <Label id={checked} active={checked}>
      {checked ? <span>Yes</span> : <span>No</span>}
      <Input checked={checked} type="checkbox" onChange={handleChange} {...props}/>
      <Switch />
    </Label>
  );
};

export default ToggleSwitch;

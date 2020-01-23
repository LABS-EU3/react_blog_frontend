import React from "react";
import styled from "styled-components";

export default function Button(props) {
  return (
    <>
      <ButtonD type="button" className={props.className} onClick={props.handleClick} disabled={props.disabled}>{props.label}</ButtonD>
    </>
  );
}

const ButtonD = styled.button`
  width: 90px;
  background: #3652BF;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 0.7rem;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  border: none;
  cursor: pointer;

  &:focus {
    background: #5567cb;
  }
  &:hover {
    background: #5567cb;
  }

  &:disabled, button[disabled] {
    background: #F0F3F5;
    color: #FFFFFF;
  }
`;
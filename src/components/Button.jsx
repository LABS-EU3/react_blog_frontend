import React from "react";
import styled from "styled-components";

export default function Button(props) {
  const clickHandler = (e) => {
    if (props.handleClick) {
      e.preventDefault();
      props.handleClick();
    }
  }
  
  return (
    <>
      <ButtonD type="button" className={props.className} onClick={clickHandler} disabled={props.disabled}>{props.label}</ButtonD>
    </>
  );
}

const ButtonD = styled.button`
  width: 90px;
  background: #6f85fd;
  box-shadow: 0px 10px 20px rgba(111, 133, 253, 0.15);
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
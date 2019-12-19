import React from "react";
import styled from "styled-components";

export default function Button(props) {
  const clickHandler = () => {
    if (props.handleClick) {
      props.handleClick();
    }
  }
  
  return (
    <>
      <ButtonD className={props.className} onClick={clickHandler}>{props.label}</ButtonD>
    </>
  );
}

const ButtonD = styled.button`
  width: 90px;
  background: #6f85fd;
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
`;

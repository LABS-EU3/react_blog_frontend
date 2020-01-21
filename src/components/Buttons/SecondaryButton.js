import React from "react";
import styled from "styled-components";

export default function SecondaryButton (props) {
  const clickHandler = (e) => {
    if (props.handleClick) {
      e.preventDefault();
      props.handleClick();
    }
  }
  
  return (
    <>
      <StyledSecondaryButton type="button" className={props.className} onClick={clickHandler} disabled={props.disabled}>{props.label}</StyledSecondaryButton>
    </>
  );
}

const StyledSecondaryButton = styled.button`
  width: 90px;
  background: #fff;
  box-shadow: 0px 10px 20px rgba(111, 133, 253, 0.15);
  border-radius: 3px;
  padding: 0.7rem;
  color: #6f85fd;
  font-weight: 600;
  font-size: 14px;
  border: 1px solid #6f85fd;
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
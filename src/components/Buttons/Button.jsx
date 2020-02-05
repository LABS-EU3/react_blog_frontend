import React from "react";
import styled from "styled-components";
import { mixins } from "../../styles/shared";

export default function Button(props) {
  return (
    <>
      <ButtonD
        type="button"
        className={props.className}
        onClick={props.handleClick}
        disabled={props.disabled}
        {...props}
      >
        {props.label}
      </ButtonD>
    </>
  );
}

const ButtonD = styled.button`
  ${mixins.bigButton}
  ${props => (props.secondary ? `color: black; background-color: white;` : "")}
`;

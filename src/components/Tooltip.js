import React from "react";
import styled from "styled-components";

const StyledToolTip = styled.div`
  .tool-tip {
    padding: 6px 10px;
    background: #333;
    border-radius: 3px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    transform: translate(-50%, -100%);
    transition: 0.2s all;
    display: flex;
    align-items: center;
  }

  .tool-tip:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -5px;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #333;
  }

  .tool-tip-item {
    color: #fff;
    cursor: pointer;
    padding: 0;
    display: flex;
  }

  .tool-tip-item + .tool-tip-item {
    margin-left: 10px;
  }
`;

export const ToolTip = props => {
  return (
    <StyledToolTip style={props.toolTipLocStyle}>
      <button className="tool-tip-item">Bleh</button>
    </StyledToolTip>
  );
};

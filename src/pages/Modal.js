import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;
const ModalInner = styled.div`
  padding: 0;
  background: #fff;
  display: inline-block;
  min-height: 300px;
  margin: 1rem;
  position: relative;
  min-width: 300px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  justify-self: center;
  width: 550px;
  height: 450px;
  border-radius: 5px;

  @media (max-width: 750px) {
    width: 90%;
    margin: auto;
    border-radius: 10px;
    margin-top: 23rem;
  }
`;

function Modal(props) {
  return ReactDOM.createPortal(
    <ModalWrapper onClick={props.handleControl} id="modal-wrapper">
      <ModalInner onClick={e => e.stopPropagation()}>
        {props.children}
      </ModalInner>
    </ModalWrapper>,
    document.querySelector("#modal")
  );
}

export default Modal;

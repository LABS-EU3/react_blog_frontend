import React, { useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const StyledModal = styled.div`
    background-color: pink;
    width: 50vw;
    form {
        display: flex;
        flex-direction: column;
    }
`;

function Form(props) {
  const username = useRef("");
  const email = useRef("");
  const password = useRef("");

  const signup = e => {
    e.preventDefault();
    console.log(
      username.current.value,
      email.current.value,
      password.current.value
    );
  };

  return (
    <StyledModal>
      <form>
        <input placeholder="Username" ref={username} />
        <input placeholder="Email" ref={email} />
        <input placeholder="Password" ref={password} />
        <button onClick={signup}>Create an Account</button>
      </form>
    </StyledModal>
  );
}

function Modal(props) {
  return ReactDOM.createPortal(<Form />, document.querySelector("#modal"));
}

export default Modal;



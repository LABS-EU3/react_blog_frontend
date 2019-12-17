import React, { useRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actionCreators from "../redux-store/actions/actionCReators";

const StyledAuth = styled.form`
  min-height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  font-family: "Lato", sans-serif;
  padding: 2rem 0;
  h1 {
    font-size: 2rem;
    color: #636363;
    margin-bottom: 1rem;
  }
  input {
    width: 60%;
    height: 4vh;
    border-radius: 5px;
    border: 1px solid #c4c4c4;
    color: #c4c4c4;
    padding-left: 1rem;
    margin-top: 1rem;
  }
  .primary {
    background-color: #6f85fd;
    width: 63%;
    height: 4.4vh;
    border-radius: 5px;
    border: none;
    font-size: 1.2rem;
    color: white;
    font-weight: 100;
    margin-top: 1rem;
    cursor: pointer;
  }
  label {
    display: inline-block;
  }
  span a {
    color: red;
  }
  hr {
    width: 63%;
    border: 0.5px solid #cfcfcf;
    margin-bottom: 1rem;
  }
  color: #636363;
  .tos {
    display: flex;
    margin-top: 1rem;
    align-items: center;
    width: 40%;
    input {
      width: 10%;
      margin: 0;
    }
    a {
      color: red;
    }
  }
`;

function Register({ register }) {
  const username = useRef("");
  const email = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");

  const signup = e => {
    e.preventDefault();

    const userData = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value
    };
    register(userData);
  };

  return (
    <StyledAuth>
      <h1>Sign Up</h1>
      <input placeholder="Username" ref={username} />
      <input placeholder="Email" ref={email} />
      <input placeholder="Password" ref={password} />
      <input placeholder="Confirm Password" ref={confirmPassword} />
      <button onClick={signup} className="primary">
        Create an Account
      </button>
      <div className="tos">
        <input type="checkbox" />
        <p className="inline">
          I agree to Insight's
          <a> Terms of Service</a>
        </p>
      </div>
      <hr />
      <p>
        Already have an account?{" "}
        <span>
          <a>Log in Here</a>
        </span>
      </p>
    </StyledAuth>
  );
}
export default connect(state => state, actionCreators)(Register);
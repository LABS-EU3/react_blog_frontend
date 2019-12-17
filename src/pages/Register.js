import React, { useRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledAuth = styled.form`
  min-height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 2rem;
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
    height: 4vh;
    border-radius: 5px;
    border: none;
    font-size: 1.2rem;
    color: white;
    font-weight: 100;
    margin-top: 1rem;
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
  }
`;

function Register(props) {
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
    <StyledAuth>
      <h1>Sign Up</h1>
      <input placeholder="Username" ref={username} />
      <input placeholder="Email" ref={email} />
      <input placeholder="Password" ref={password} />
      <button onClick={signup} className="primary">
        Create an Account
      </button>
      <div>
        <input type="checkbox" id="tos" />
        <label>
          I agree to Insight's{" "}
          <span>
            <a>Terms of Service</a>
          </span>
        </label>
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
export default connect(state => state, {})(Register);

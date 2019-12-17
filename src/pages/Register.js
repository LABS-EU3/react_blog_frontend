import React, { useRef } from "react";
import { connect } from "react-redux";
import { StyledAuth } from "../utilities/styles/RegisterStyles";
import * as actionCreators from "../redux-store/actions/actionCReators";

function Register({ register, registering }) {
  const username = useRef("");
  const email = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");

  const handleSubmit = e => {
    e.preventDefault();

    const userData = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value
    };
    if (
      userData.username &&
      userData.email &&
      userData.password &&
      userData.confirmPassword
    ) {
      register(userData);
    }
  };

  return (
    <StyledAuth>
      <h1>Sign Up</h1>
      <input placeholder="Username" ref={username} type="text" />
      <input placeholder="Email" ref={email} type="text" />
      <input placeholder="Password" ref={password} type="password" />
      <input
        placeholder="Confirm Password"
        ref={confirmPassword}
        type="password"
      />
      <button onClick={handleSubmit} className="primary">
        {!registering.registering ? "Create an Account" : "Loading.."}
      </button>
      <div className="tos">
        <input type="checkbox" />
        <p className="inline">
          I agree to Insight's
          <a href='/'> Terms of Service</a>
        </p>
      </div>
      <hr />
      <p>
        Already have an account?
        <span>
          <a href='/'>Log in Here</a>
        </span>
      </p>
    </StyledAuth>
  );
}
export default connect(state => state, actionCreators)(Register);

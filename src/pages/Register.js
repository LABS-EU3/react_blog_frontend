import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import DefaultNavigation from "../components/Navigation/Default";
import Modal from "../components/Others/Modal";
import RegistrationSuccess from "./RegistrationSuccess";
import Button from "../components/Buttons/Button";
import SecondaryFooter from '../components/Footer/SecondaryFooter';

import {
  StyledContainer,
  StyledAuth,
} from "../utilities/styles/RegisterStyles";
import { register } from "../redux-store/actions/auths";
import registration_jumbo from "../assets/images/boy.svg";

function Register({ register, loading, success, location }) {
  const fullname = useRef("");
  const email = useRef("");
  const password = useRef("");
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = () => {
    let valid = validate();
    if (valid) {
      return;
    }

    const userData = {
      fullname: fullname.current.value,
      email: email.current.value,
      password: password.current.value
    };

    if (userData.fullname && userData.email && userData.password) {
      register(userData);
    }
  };

  const validate = () => {
    let isError = false;
    var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (fullname.current.value === "") {
      setFullNameError("Username cannot be empty!");
      isError = true;
    }

    if (password.current.value.length < 5) {
      setPasswordError("Minimum of 5 characters!");
      isError = true;
    }

    if (!(emailRegex.test(email.current.value))) {
      setEmailError('Please Enter a valid email address!')
      isError = true;
    }

    return isError;
  };

  return (
    <>
      <DefaultNavigation location={location} />
      <StyledContainer>
        {success && (
          <Modal height="425px" width="420px">
            <RegistrationSuccess />
          </Modal>
        )}
        <img
          src={registration_jumbo}
          alt="Man on laptop"
          className="laptop_man"
        />
        <StyledAuth>
          <h1>Try Insight for Free</h1>
          <p>
            Get started with Insight for free by creating an account with your
            email address
          </p>
          <p className="privacy">
            * By signing up, I agree to Insight's &nbsp;
            <a href="/"> Privacy Policy </a> &nbsp; and &nbsp;{" "}
            <a href="/">Terms of Service</a>
          </p>

          <div className="inputs">
            <input placeholder="Full Name" onChange={() => { setFullNameError("") }} ref={fullname} type="text" required />

            <div id="message">
              <p id="length" className="invalid">{fullNameError}</p>
            </div>

            <input placeholder="Email" onChange={() => { setEmailError("") }} ref={email} type="text" required />

            <div id="message">
              <p id="length" className="invalid">{emailError}</p>
            </div>

            <input placeholder="Password" onChange={() => { setPasswordError("") }} ref={password} type="password" />

            <div id="message">
              <p id="length" className="invalid">{passwordError}</p>
            </div>

          </div>

          <Button
            className="button"
            label={!loading ? "Try for free" : "Processing..."}
            handleClick={handleSubmit}
          />
        </StyledAuth>
      </StyledContainer>
      <SecondaryFooter />
    </>
  );
}

const mapStateToProps = store => {
  return {
    loading: store.auth.loading,
    success: store.auth.register_success
  };
};
export default connect(mapStateToProps, { register })(Register);

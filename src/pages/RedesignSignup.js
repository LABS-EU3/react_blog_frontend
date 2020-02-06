import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  StyledAuthWrapper,
  LeftSection,
  RightSection,
  RightSectionLogo,
  RightSectionForm
} from "../utilities/styles/StyledAuth";
import FormLogo from "../assets/Form-Logo.svg";
import bgImg from "../assets/signup.png";
import FormTitleImg from "../assets/grid-like-img.png";
import Button from "../components/Buttons/Button";

import { register } from "../redux-store/actions/auths";

function Register({
  register,
  loading,
  success,
  location,
  history
}) {
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
      password: password.current.value,
      avatarUrl: "https://getinsightly.s3.us-west-2.amazonaws.com/man5-512.png"
    };

    if (userData.fullname && userData.email && userData.password) {
      console.log(userData);
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

    if (!emailRegex.test(email.current.value)) {
      setEmailError("Please Enter a valid email address!");
      isError = true;
    }

    return isError;
  };

  return (
    <StyledAuthWrapper>
      {success && history.push("/final")}
      <LeftSection>
        <img src={bgImg} alt="bgimg" />
      </LeftSection>
      <RightSection>
        <RightSectionLogo>
          <img src={FormLogo} alt="logo" />
        </RightSectionLogo>
        <RightSectionForm>
          <div className="title-as-an-img">
            <img src={FormTitleImg} alt="formtitle" />
          </div>
          <div className="form-input-wrapper">
            <div className="form-group">
              <input
                placeholder="Fullname"
                onChange={() => {
                  setFullNameError("");
                }}
                ref={fullname}
                type="text"
                required
              />
            </div>
            <div id="message">
              <p id="length" className="invalid">
                {fullNameError}
              </p>
            </div>
            <div className="form-group">
              <input
                placeholder="Email Address"
                onChange={() => {
                  setEmailError("");
                }}
                ref={email}
                type="text"
                required
              />
            </div>
            <div id="message">
              <p id="length" className="invalid">
                {emailError}
              </p>
            </div>
            <div className="form-group">
              <input
                placeholder="Password"
                onChange={() => {
                  setPasswordError("");
                }}
                ref={password}
                type="password"
              />
            </div>
            <div id="message">
              <p id="length" className="invalid">
                {passwordError}
              </p>
            </div>
          </div>
          <Button
            label={!loading ? "Try for free" : "Processing..."}
            handleClick={handleSubmit}
            className="float-right-btn"
          />
        </RightSectionForm>
        <p>
          {" "}
          Already have an account? &nbsp;
          <Link to="/login"> Login here </Link>{" "}
        </p>
      </RightSection>
    </StyledAuthWrapper>
  );
}

const mapStateToProps = store => {
  return {
    loading: store.auth.loading,
    success: store.auth.register_success
  };
};
export default connect(mapStateToProps, { register })(Register);

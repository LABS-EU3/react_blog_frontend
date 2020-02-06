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
import { login } from "../redux-store/actions/auths";

function RedesignedLogin({
  register,
  loading,
  success,
  location,
  history,
  login,
  login_success
}) {
  const email = useRef();
  const password = useRef();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = () => {
    let valid = validate();
    if (valid) {
      return;
    }

    const userData = {
      email: email.current.value,
      password: password.current.value
    };

    if (userData.email && userData.password) {
      login(userData);
    }
  };

  const validate = () => {
    let isError = false;
    var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (password.current.value.length < 5) {
      setPasswordError("Minimum of 5 characters");
      isError = true;
    }

    if (!emailRegex.test(email.current.value)) {
      setEmailError(" Please Enter your email address");
      isError = true;
    }

    return isError;
  };

  if (login_success) {
    const targetRoute = localStorage.getItem("target-route");
    console.log(targetRoute);
    const goToLocation = targetRoute ? targetRoute : "/feed";
    history.push(goToLocation);
  }

  return (
    <StyledAuthWrapper>
      <LeftSection>
        <img
          src={bgImg}
          alt="a robot acting as a help desk officer behind a yellow background"
        />
      </LeftSection>
      <RightSection>
        <RightSectionLogo>
        <Link to="/"><img src={FormLogo} alt="logo" /></Link>
        </RightSectionLogo>
        <RightSectionForm>
          <div className="title-as-an-img">
            <img
              src={FormTitleImg}
              alt="a grid that acts as some sort of title for the form"
            />
          </div>
          <div className="form-input-wrapper">
            <div className="form-group">
              <input
                onChange={() => {
                  setEmailError("");
                }}
                ref={email}
                type="email"
                autoComplete="email"
                placeholder="Email"
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
                onChange={() => {
                  setPasswordError("");
                }}
                ref={password}
                id="psw"
                type="password"
                autoComplete="password"
                placeholder="Password"
                pattern="{5,}"
                required
              />
            </div>
            <div id="message">
              <p id="length" className="invalid">
                {passwordError}
              </p>
            </div>
          </div>
          <Button
            label={loading ? "Processing..." : "Sign In"}
            handleClick={handleSubmit}
            id="login_btn"
            className="float-right-btn"
          />
        </RightSectionForm>
        <p style={{fontSize: "16px"}}>
          {" "}
          Don't have an account yet? &nbsp;
          <Link to="/register">Sign up here </Link>{" "}
        </p>
      </RightSection>
    </StyledAuthWrapper>
  );
}

const mapStateToProps = store => {
  return {
    loading: store.auth.loading,
    login_success: store.auth.login_success
  };
};
export default connect(mapStateToProps, { login })(RedesignedLogin);

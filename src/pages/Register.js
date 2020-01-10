import React, { useRef } from "react";
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

  const handleSubmit = () => {
    const userData = {
      fullname: fullname.current.value,
      email: email.current.value,
      password: password.current.value
    };

    if (userData.fullname && userData.email && userData.password) {
      register(userData);
    }
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
            <input
              placeholder="Full Name"
              ref={fullname}
              type="text"
              required
            />
            <input placeholder="Email" ref={email} type="text" required />
            <input placeholder="Password" ref={password} type="password" />
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

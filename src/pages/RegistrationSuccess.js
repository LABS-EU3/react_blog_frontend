import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import checkmark from "../assets/images/check.png";
import {
  StyledRegistrationSuccessModal,
  SecondaryBtn
} from "../utilities/styles/RegisterStyles";

function RegistrationSuccess(props) {
  return (
    <StyledRegistrationSuccessModal>
      <div className="regstr-modal-top">
        <img src={checkmark} />
        <h1>Awesome!</h1>
        <p>A verification email has been sent to your account.</p>{" "}
        <p>
          Until verification is complete, please feel free to check out our
          feed.
        </p>
      </div>
      <div className="regstr-modal-border">
        <Link to="/">
          <SecondaryBtn>Feed</SecondaryBtn>
        </Link>
      </div>
    </StyledRegistrationSuccessModal>
  );
}

export default connect(state => state, {})(RegistrationSuccess);

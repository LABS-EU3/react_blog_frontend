import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import checkmark from "../assets/images/check.png";
import {
  StyledRegistrationSuccessModal
} from "../utilities/styles/RegisterStyles";
import Button from '../components/Buttons/Button';

function RegistrationSuccess(props) {
  return (
    <StyledRegistrationSuccessModal>
      <div className="regstr-modal-top">
        <img alt="success" src={checkmark} />
        <h1>Awesome!</h1>
        <p>A verification email has been sent to your account. Until verification is complete, please feel free to check out our
          feed.</p>
      </div>
      <div className="regstr-modal-border">
        <Link to="/feed">
          <Button className="button" label="Feed" />
        </Link>
      </div>
    </StyledRegistrationSuccessModal>
  );
}

export default connect(state => state, {})(RegistrationSuccess);

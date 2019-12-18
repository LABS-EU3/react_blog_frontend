import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import checkmark from "../assets/images/check.png";

function RegistrationSuccess(props) {
  return (
    <div>
      <img src={checkmark} />
      <h1>Awesome!</h1>
      <p>
        A verification email has been sent to your account. Until verification
        is complete, please feel free to check out our feed.
      </p>
      <Link to="/">
        <button>Feed</button>
      </Link>
    </div>
  );
}

export default connect(state => state, {})(RegistrationSuccess);

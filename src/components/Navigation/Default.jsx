import React from "react";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

import { NavWrapper, Logo, AuthButtons } from "./navigation.styles";
import insight from "../../assets/images/Insight.svg";

export default function Default(props) {
  const location = props.location.pathname;
  return (
    <NavWrapper>
      <Logo>
        <img alt="logo" src={insight} />
      </Logo>
      {location !== "/register" && (
        <AuthButtons>
          <ul>
            <li onClick={() => props.handleOpen ? props.handleOpen(true) : null}>Log In</li>
          </ul>
          <Link to="/register">
            <Button label="Try for free" />
          </Link>
        </AuthButtons>
      )}
    </NavWrapper>
  );
}

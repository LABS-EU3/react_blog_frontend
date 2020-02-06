import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
// eslint-disable-next-line no-unused-vars
import media from "../styles/mediaQueries";
// eslint-disable-next-line no-unused-vars
import { Section, mixins } from "../styles/shared";
import { NavLink } from "react-router-dom";
import logo from "../assets/dark-logo.png";

const StyledContainer = styled.div`
  width: 100%;
  background-color: ${theme.colors.yellow};
  margin-top: 0rem;
  padding: 2rem;
`;

const StyledNav = styled.nav`
  //   padding-right: 2rem;
  width: 100%;
  margin: 0 auto;
  //   padding-left: 2rem;
  margin-top: 0rem;
  max-width: 1200px;
  background-color: ${theme.colors.yellow};
  display: flex;
  justify-content: space-between;
  div.left {
    display: flex;
    flex-direction: row-reverse;
    a {
      height: 50px;
      margin-right: .8rem;
      img {
        padding-left: 0;
        object-fit: cover;
        height: auto;
        width: auto;
        margin: 0 auto;
        margin-top: -1rem;
      }
    }
    h4 {
      font-family: ${theme.fonts.Oswald};
      font-size: 27px;
      margin: 0 auto;
    }
  }
  div.right {
    width: 30%;
    display: flex;
    justify-content: flex-end;
    a {
      font-size: ${theme.fontSizes.sm};
      &:nth-of-type(1) {
        margin-right: 2.5rem;
      }
    }
  }
`;

export default () => {
  return (
    <StyledContainer>
      <StyledNav>
        <div className="left">
          <h4>INSIGHTLY</h4>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="right">
          <NavLink to="/signup">Register</NavLink>
          <NavLink to="/signin">Sign In</NavLink>
        </div>
      </StyledNav>
    </StyledContainer>
  );
};

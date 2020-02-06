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
  ${media.tablet`
  padding-top: 1.4rem;
`}
  max-width: 1200px;
  background-color: ${theme.colors.yellow};
  display: flex;
  justify-content: space-between;
  div.left {
    display: flex;
    flex-direction: row-reverse;
    a {
      height: 50px;
      ${media.phablet`
      height: 30px;
    `}
      margin-right: .8rem;
      img {
        padding-left: 0;
        object-fit: cover;
        height: auto;
        width: auto;
        margin: 0 auto;
        margin-top: -1rem;
        ${media.phablet`
        height: 40px;
        margin-right: 0rem;
      `}
      }
    }
    h4 {
      font-family: ${theme.fonts.Oswald};
      font-size: 27px;
      margin: 0 auto;
      ${media.phablet`
      font-size: 24px;
      margin-left: -.8rem;
    `}
    }
  }
  div.right {
    width: 30%;
    display: flex;
    justify-content: flex-end;
    ${media.phablet`
    width: auto;
  `}
    a {
      font-size: ${theme.fontSizes.sm};
      ${media.phablet`
        font-size: 14px;
      `}
      &:nth-of-type(1) {
        margin-right: 2.5rem;
        ${media.phablet`
        margin-right: 2rem;
        font-size: 15px;
      `}
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
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Sign In</NavLink>
        </div>
      </StyledNav>
    </StyledContainer>
  );
};

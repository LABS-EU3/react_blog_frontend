import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import media from "../styles/mediaQueries";
import { Section, mixins } from "../styles/shared";
import { NavLink } from "react-router-dom";

const StyledContainer = styled.div`
  width: 100%;
  background-color: ${theme.colors.red};
  margin-top: 0rem;
`;

const StyledSection = styled(Section)`
  display: flex;
  align-content: center;
  justify-content: space-between;
  max-width: 1200px;
  padding-top: 8rem;
  padding-bottom: 8rem;
  min-height: auto;
  width: 100%;
  ${media.tablet`
  padding-top: 4rem;
  padding-bottom: 4rem;
  `}
  li, a {
    font-size: 17.5px;
    display: flex;
    flex-direction: column;
    ${media.tablet`
    font-size: 14px;
    padding: .5rem;
    `}
  }
  h4 {
    font-family: ${theme.fonts.Oswald};
    font-color: black;
    ${media.tablet`
    padding: .5rem;
    font-size: 16px;
    `}
  }
`;

const StyledListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => {
  return (
    <StyledContainer>
      <StyledSection>
        <StyledListContainer>
          <h4>PRODUCT</h4>
          <ul>
            <li>Feedback</li>
            <li>Integration suggestions</li>
          </ul>
        </StyledListContainer>
        <StyledListContainer>
          <h4>COMPANY</h4>
          <ul>
            <NavLink to="/signin">Sign in</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/team">Meet the team</NavLink>
          </ul>
        </StyledListContainer>
      </StyledSection>
    </StyledContainer>
  );
};

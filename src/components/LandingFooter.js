import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import media from "../styles/mediaQueries";
import { Section, mixins } from "../styles/shared";

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
  li {
    font-size: 17.5px;
  }
  h4 {
    font-family: ${theme.fonts.Muli};
    font-color: black;
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
            <li>Sign in</li>
            <li>Register</li>
            <li>Meet the team</li>
          </ul>
        </StyledListContainer>
      </StyledSection>
    </StyledContainer>
  );
};

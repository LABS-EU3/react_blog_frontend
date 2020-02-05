import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import media from "../styles/mediaQueries";
import { Section, mixins } from "../styles/shared";
import quill from "../assets/quill.png";

const StyledContainer = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 0rem;
`;

const StyledBar = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  span {
    display: inline-block;
    height: 6px;
    background: black;
    width: 80px;
  }
`;
const StyledSection = styled(Section)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 2rem;
  max-width: 1200px;
  font-family: ${theme.fonts.Muli};
`;

const StyledShowCaseIntro = styled.div`
  width: 100%;
  margin-top: 2rem;
  h4 {
    font-family: ${theme.fonts.Muli};
    font-size: 3.5rem;
    max-width: 550px;
    line-height: 3.5rem;
    span {
        color: ${theme.colors.purple};
    }
  }
`;

const Showcase = () => {
  return (
    <StyledContainer>
      <StyledSection>
        <StyledBar>
          <span></span>
        </StyledBar>
        <StyledShowCaseIntro>
          <h4>Being human is all about <span>connections</span> - so should writing.</h4>
        </StyledShowCaseIntro>
      </StyledSection>
    </StyledContainer>
  );
};

export default Showcase;

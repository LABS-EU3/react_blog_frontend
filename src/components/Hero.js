import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import media from "../styles/mediaQueries";
import { Section, mixins } from "../styles/shared";

const StyledContainer = styled.div`
  width: 100%;
  background-color: ${theme.colors.yellow};
  min-height: 100vh;
`;

const StyledSection = styled(Section)`
  min-height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 0rem;
  max-width: 1200px;
`;

const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 65%;
  h1 {
    font-family: ${theme.fonts.Muli} !important;
    font-size: 40px;
    line-height: 50px;
    color: #000000;
  }
  p {
    line-height: 1.8rem;
    font-size: ${theme.fontSizes.md};
    margin-top: 20px;
  }
`;

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  font-family: ${theme.fonts.Muli};
`;

const StyledButton = styled.a`
  ${mixins.bigButton};
  color: white;
  width: 15rem;
  padding: 1.7rem;
  text-align: center;
  font-size: 1.6rem;
  box-sizing: border-box;
  margin-top: 40px;
`;

const Hero = () => {
  return (
    <StyledContainer>
      <StyledSection>
        <StyledLeft>
          <h1>Explore minds and connect with people through writing.</h1>
          <p>
            Insightly connects writers with readers by providing a flexible
            environment for publishing, and then curates reading experiences for
            readers on the other end of the spectrum based on their preferences.
          </p>
          <StyledButton>Get Started</StyledButton>
        </StyledLeft>
        <StyledRight></StyledRight>
      </StyledSection>
    </StyledContainer>
  );
};

export default Hero;

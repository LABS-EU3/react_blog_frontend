import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Nav from "./LandingNav";
import media from "../styles/mediaQueries";
import { Section, mixins } from "../styles/shared";
import quill from "../assets/quill.png";
import { NavLink } from "react-router-dom";

const StyledContainer = styled.div`
  width: 100%;
  background-color: ${theme.colors.yellow};
  margin-top: 0rem;
`;

const StyledSection = styled(Section)`
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
  max-width: 1200px;
  margin-top: -2rem;
`;

const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 65%;
  ${media.tablet`
  width: 100%;
  padding: 3rem;
  `}
  ${media.phablet`
  width: 100%;
  padding: 1.5rem;
  `}
  h1 {
    font-family: ${theme.fonts.Muli} !important;
    font-size: 40px;
    line-height: 50px;
    color: #000000;
    ${media.tablet`
    font-size: 38px;
    `}
    ${media.phablet`
    font-size: 36px;
    line-height: 45px;
    `}
  }
  p {
    line-height: 2.4rem;
    font-size: 19px;
    margin-top: 20px;
    ${media.phablet`
    font-size: 17px;
    `}
  }
`;

const StyledRight = styled.div`
  display: flex;
  align-self: center;
  ${media.tablet`
  display:none;
  `}
`;

const StyledButton = styled.div`
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
    <>
      <Nav />
      <StyledContainer>
        <StyledSection>
          <StyledLeft>
            <h1>Explore minds and connect with people through writing.</h1>
            <p>
              Insightly connects writers with readers by providing a flexible
              environment for publishing, and then curates reading experiences
              for readers on the other end of the spectrum based on their
              preferences.
            </p>
            <NavLink to="/register"><StyledButton>Get Started</StyledButton></NavLink>
          </StyledLeft>
          <StyledRight>
            <img src={quill} alt="quill" />
          </StyledRight>
        </StyledSection>
      </StyledContainer>
    </>
  );
};

export default Hero;

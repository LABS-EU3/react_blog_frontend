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
  height: auto;
  display: flex;
  align-content: center;
  justify-content: center;
  max-width: 1200px;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

export default () => {
  return (
    <StyledContainer>
      <StyledSection>
          
      </StyledSection>
    </StyledContainer>
  );
};

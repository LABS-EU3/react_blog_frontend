import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const StyledCard = styled.div`
  display: flex;
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 0 2rem;
  max-width: 650px;
  margin-top: 3rem;
  width: 100%;
  h5 {
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.textGrey};
  }
`;

const StyledImageContainer = styled.div`
`


const UserCard = ({ user }) => {
    return (
        <StyledCard>
            <StyledImageContainer>
            
            </StyledImageContainer>
        </StyledCard>
    )
};

export default UserCard;

import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { mixins } from "../styles/shared";

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

const StyledTextContent = styled.div`
  padding: 1rem;
  display: flex;
  color: black;
  flex-direction: column;
  width: 70%;
  div.info {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  h4 {
    color: ${theme.colors.purple};
  }
`;

const StyledFollowButton = styled.button`
  ${mixins.secondaryButton}
`;

const StyledImageContainer = styled.div`
  display: flex;
  align-content: contain;
  width: 30%;
  img {
    padding: 1rem;
    padding-left: 0;
    object-fit: cover;
    height: 120px;
    width: 120px;
    margin: 0 auto;
  }
`;

const interests = ['Sports', 'Technology', 'Gaming', 'Lifestyle'] //hardcoding this for now to render as bio of the user

const UserCard = ({ user }) => {
  return (
    <StyledCard>
      <StyledImageContainer>
        <img
          src={
            user.avatarUrl
              ? user.avatarUrl
              : "https://wa1.narvii.com/static/img/user-icon-placeholder.png"
          }
          alt={user.fullname}
        />
      </StyledImageContainer>
      <StyledTextContent>
        <div className="info">
          <h4>{user.fullname}</h4>
          <StyledFollowButton>Follow</StyledFollowButton>
        </div>
      </StyledTextContent>
    </StyledCard>
  );
};

export default UserCard;

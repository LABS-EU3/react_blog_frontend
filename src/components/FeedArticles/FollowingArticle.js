import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";
import readTime from "../../utilities/readTime";
import moment from "moment";

const StyledFollowingCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  background-color: white;
  margin: 1rem auto;
  @media (min-width: 540px) and (max-width: 890px) {
    flex-direction: column;
  }
`;

const StyledFollowingImageContainer = styled.div`
  width: 35%;
  img {
    width: 100%;
    height: 130px;
    object-fit: cover;
    margin-top: 1rem;
  }
  @media (min-width: 540px) and (max-width: 890px) {
    width: 100%;
  }
`;

const StyledFollowingText = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-family: ${theme.fonts.Oswald};
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.purple};
  }
  h5 {
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.textGrey};
  }
  .info {
    display: flex;
    width: 100%;
    justify-content: space-between;
    p {
      font-family: ${theme.fonts.Muli};
      color: ${theme.colors.lightGrey};
      font-size: ${theme.fontSizes.xs};
    }
  }
  @media (min-width: 540px) and (max-width: 890px) {
    width: 100%;
  }
`;

export default function FollowingCard({ insight }) {
  return (
    <Link to={`/article/${insight.custom_id}`}>
      <StyledFollowingCard>
        <StyledFollowingImageContainer>
          <img src={insight.coverImageUrl} alt={insight.title} />
        </StyledFollowingImageContainer>
        <StyledFollowingText>
          <Link to={`/profile/${insight.authorId}`}>
             <p>{insight.author.toUpperCase()}</p>
          </Link>
          <h5>{insight.title.substring(0, 30)}...</h5>
          <div className="info">
            <p>{moment(insight.createdAt).format('ll')}</p>
            <p>{`${readTime(insight.body)} min read`}</p>
          </div>
        </StyledFollowingText>
      </StyledFollowingCard>
    </Link>
  );
}

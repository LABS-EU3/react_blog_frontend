import React from "react";
import styled from "styled-components";
import readTime from "../utilities/readTime";
import theme from "../styles/theme";
import { Link } from "react-router-dom";
import media from '../styles/mediaQueries'

const StyledCard = styled.div`
  display: flex;
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  max-width: 650px;
  margin-top: 3rem;
  width: 100%;
  h5 {
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.textGrey};
  }
  ${media.phablet`flex-direction: column;`};
`;

const StyledImageContainer = styled.div`
  display: flex;
  align-content: contain;
  width: 30%;
  img {
    padding: 1rem;
    padding-left: 0;
    object-fit: cover;
    height: 140px;
    width: 140px;
    margin: 0 auto;
    ${media.phablet`width: 100%;
    height: auto;
    `};
  }
  ${media.phablet`width: 100%`}
`;

const StyledTextContent = styled.div`
  padding: 1rem;
  display: flex;
  color: black;
  flex-direction: column;
  .info {
    display: flex;
    justify-content: space-between;
    p {
      font-family: ${theme.fonts.Muli};
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.purple};
    }
  }
  .snippet {
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.lightGrey};
    line-height: 1.7rem;
  }
`;

const Card = ({ insight }) => {
  console.log("mmm");
  return (
    <Link to={`/article/${insight.custom_id}`}>
    <StyledCard>
      <StyledImageContainer>
        <img src={insight.coverImageUrl} alt={insight.title} />
      </StyledImageContainer>
      <StyledTextContent>
        <h5>
          {insight.title.split("").length > 50
            ? `${insight.title.substring(0, 50)}...`
            : insight.title}
        </h5>
        <div className="info">
          <p>{insight.author}</p>
          <p>{`${readTime(insight.body)} min read`}</p>
        </div>
        <div className="snippet">
          <p>
            {JSON.parse(insight.body)
              .find(block => block.type === "paragraph")
              .data.text.substring(0, 170)}
            ...
          </p>
        </div>
      </StyledTextContent>
    </StyledCard>
    </Link>
  );
};

export default Card;

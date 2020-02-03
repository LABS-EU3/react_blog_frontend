import React from "react";
import styled from "styled-components";
import readTime from "../utilities/readTime";
import theme from "../styles/theme";
import { Link } from "react-router-dom";
import media from "../styles/mediaQueries";
import { mixins } from "../styles/shared";

const StyledCard = styled.div`
  display: flex;
  //   box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
  //   padding: 1rem 2rem;
  max-width: 650px;
  margin-top: 3rem;
  width: 100%;
  h5 {
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.textGrey};
  }
  ${media.phablet`flex-direction: column;`};
  &.reg {
    flex-direction: column;
    box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

const StyledImageContainer = styled.div`
  display: flex;
  align-content: contain;
  width: 100%;
  img {
    padding: 1rem;
    padding-left: 0;
    object-fit: cover;
    height: 140px;
    width: 100%;
    margin: 0 auto;
    ${media.phablet`width: 100%;
    height: auto;
    `};
    &.reg {
      padding: 0;
    }
  }
  ${media.phablet`width: 100%`};
  &.jumbo {
    order: 2;
    width: 50%;
  }
`;

const StyledTextContent = styled.div`
  padding: 1rem;
  display: flex;
  color: black;
  flex-direction: column;
  &.jumbo {
    width: 50%;
  }
  .info {
    display: flex;
    justify-content: space-between;
    &.reg {
      order: 4;
    }
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
  button {
    ${mixins.secondaryButton}
  }
`;

const Card = ({ insight, type }) => {
  console.log("mmm");
  return (
    <Link to={`/article/${insight.custom_id}`}>
      <StyledCard className={type}>
        <StyledImageContainer className={type}>
          <img
            src={insight.coverImageUrl}
            alt={insight.title}
            className={type}
          />
        </StyledImageContainer>
        <StyledTextContent className={type}>
          <h5>
            {insight.title.split("").length > 50
              ? `${insight.title.substring(0, 50)}...`
              : insight.title}
          </h5>
          <div className={`info ${type}`}>
            <p>{insight.author}</p>
            <p>
              {(type === "jumbo" || type === "reg") &&
                insight.createdAt.substring(0, 10)}
            </p>
          </div>
          <div className="snippet">
            <p>
              {JSON.parse(insight.body)
                .find(block => block.type === "paragraph")
                .data.text.substring(0, 170)}
              ...
            </p>
          </div>
          {type === "jumbo" && <button>Read More</button>}
        </StyledTextContent>
      </StyledCard>
    </Link>
  );
};

export default Card;

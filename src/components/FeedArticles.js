import React, { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { Link } from "react-router-dom";
import media from "../styles/mediaQueries";
import { mixins } from "../styles/shared";
import readTime from "../utilities/readTime";

const StyledFollowingCard = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  background-color: white;
  margin: 2rem auto;
`;
const StyledFollowingImageContainer = styled.div`
  width: 30%;
  img {
    width: 100px;
    height: 110px;
    object-fit: cover;
    margin-top: 1rem;
  }
`;
const StyledFollowingText = styled.div`
  width: 60%;
  height: 100%;
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
      color: ${theme.colors.lightGrey};
    }
  }
`;

const StyledRegCard = styled.div`
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
  justify-content: space-between;
  align-items: center;
  @media (min-width: 540px) and (max-width: 890px) {
    flex-direction: column;
    width: 90%;
  }
`;

const StyledRegImageContainer = styled.div`
  display: flex;
  align-content: contain;
  width: 30%;
  height: 20vh;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
  @media (min-width: 540px) and (max-width: 890px) {
    width: 100%;
  }
  ${media.phablet`height: 15vh`};
`;

const StyledRegTextContent = styled.div`
  padding: 1rem;
  display: flex;
  color: black;
  flex-direction: column;
  width: 65%;
  justify-content: space-between;
  .info {
    display: flex;
    justify-content: space-between;
    ${media.phablet`order: 3`}
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
  @media (min-width: 540px) and (max-width: 890px) {
    width: 100%;
  }
`;

const StyledCard = styled.div`
  width: 100%;
  margin-top: 2rem;
  height: 100%;
  h5 {
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.textGrey};
  }
  ${media.phablet`flex-direction: column;`};

  &.jumbo {
    display: flex;
    flex-wrap: wrap;
  }
  &.reg {
    ${media.phablet`display: flex; flex-direction: row; justify-content: space-around; align-items:center; box-shadow: 3px 4px 20px rgba(0,0,0,0.1);`};
  }
  .btn-container {
    order: 3;
    width: 100%;
    height: 10%;
    button {
      ${mixins.secondaryButton};
      width: 25%;
      ${media.phablet`width: 30%;`};
    }
  }
`;

const StyledImageContainer = styled.div`
  &.jumbo {
    width: 50%;
    order: 2;
    ${media.tablet`width: 100%; height: 50%; order: 1;`};
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &.reg {
    width: 100%;
    height: 50%;
    ${media.desktop`height: 40%;`};
    ${media.phablet`width: 30%;`};
    ${media.tablet`height: 30%;`};
    img {
      width: 100%;
      height: 100%;
      ${media.phablet`height: 140px`};
      object-fit: cover;
    }
  }
`;

const StyledTextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  .info {
    display: flex;
    justify-content: space-between;
    p {
      font-family: ${theme.fonts.Muli};
      font-size: ${theme.fontSizes.xs};
      ${media.tablet`font-size: ${theme.fontSizes.xxs}`};
      color: ${theme.colors.purple};
    }
    &.reg {
      order: 3;
      @media (min-width: 540px) and (max-width: 890px) {
        flex-direction: column;
      }
      ${media.phablet`flex-direction: row`};
    }
    &.jumbo {
      ${media.phablet`display: none;`};
    }
  }
  .snippet {
    font-size: ${theme.fontSizes.xs};
    ${media.tablet`font-size: ${theme.fontSizes.xxs}`};
    color: ${theme.colors.lightGrey};
    line-height: 1.7rem;
    overflow: hidden;
    margin: 1rem 0;
  }

  &.reg {
    box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
    height: 50%;
    justify-content: space-evenly;
    ${media.desktop`height: 60%;`};
    ${media.tablet`height: 70%;`};
    ${media.phablet`width: 60%; box-shadow: none;`};
  }
  &.jumbo {
    width: 50%;
    padding: 0 3rem 0 0;
    height: 90%;
    ${media.tablet`width: 100%; height: auto; order: 2;`};
  }
`;

export const FollowingCard = ({ insight }) => {
  return (
    <Link to={`/article/${insight.custom_id}`}>
      <StyledFollowingCard>
        <StyledFollowingImageContainer>
          <img src={insight.coverImageUrl} alt={insight.title} />
        </StyledFollowingImageContainer>
        <StyledFollowingText>
          <p>{insight.author.toUpperCase()}</p>
          <h5>{insight.title.substring(0, 40)}...</h5>
          <div className="info">
            <p>{insight.createdAt.substring(0, 10)}</p>
            <p>{`${readTime(insight.body)} min read`}</p>
          </div>
        </StyledFollowingText>
      </StyledFollowingCard>
    </Link>
  );
};

export const TrendingCard = props => {
  const { insight, type } = props;
  const [vw, setVw] = useState(window.innerWidth / 3);
  const setWidth = () => {
    if (window.innerWidth <= 890 && window.innerWidth >= 540) {
      setVw(window.innerWidth / 10);
    } else {
      setVw(window.innerWidth / 3);
    }
  };
  window.addEventListener("resize", setWidth);
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
            {type !== "jumbo" && insight.title.split("").length > 40
              ? `${insight.title.substring(0, 40)}...`
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
              {type === "reg"
                ? JSON.parse(insight.body)
                    .find(block => block.type === "paragraph")
                    .data.text.substring(0, 100)
                : JSON.parse(insight.body)
                    .find(block => block.type === "paragraph")
                    .data.text.substring(0, vw)}
              ...
            </p>
          </div>
        </StyledTextContent>
        {type === "jumbo" && (
          <div className="btn-container">
            <button>Read More</button>
          </div>
        )}
      </StyledCard>
    </Link>
  );
};

export const RegularCard = ({ insight }) => {
  const [vw, setVw] = useState(window.innerWidth / 10);
  const setWidth = () => {
    setVw(window.innerWidth / 8);
  };
  window.addEventListener("resize", setWidth);
  return (
    <Link to={`/article/${insight.custom_id}`}>
      <StyledRegCard>
        <StyledRegImageContainer>
          <img src={insight.coverImageUrl} alt={insight.title} />
        </StyledRegImageContainer>
        <StyledRegTextContent>
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
                .data.text.substring(0, vw)}
              ...
            </p>
          </div>
        </StyledRegTextContent>
      </StyledRegCard>
    </Link>
  );
};

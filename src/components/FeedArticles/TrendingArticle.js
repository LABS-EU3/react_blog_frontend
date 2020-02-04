import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import media from "../../styles/mediaQueries";
import { mixins } from "../../styles/shared";
import { Link } from "react-router-dom";

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
    cursor: default;
  }
  &.reg {
    @media (min-width: 380px) and (max-width: 540px) {
    display: flex; flex-direction: row; justify-content: space-around; align-items:center; box-shadow: 3px 4px 20px rgba(0,0,0,0.1); padding: 1rem;
  }}
  .btn-container {
    order: 3;
    width: 100%;
    height: 10%;
    button {
      ${mixins.secondaryButton};
      width: 25%;
      ${media.tablet`width: 50%; padding: 1.5rem;`};
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
    ${media.phablet`margin-bottom: 1rem;`};
  }
  &.reg {
    width: 100%;
    height: 50%;
    ${media.desktop`height: 40%;`};
    @media (min-width: 380px) and (max-width: 540px) {
        width: 30%;
    }
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
      @media (min-width: 540px) and (max-width: 890px) {
        font-size: ${theme.fontSizes.xxs}
      }
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
    @media (min-width: 540px) and (max-width: 890px) {
        font-size: ${theme.fontSizes.xxs}
    }
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
    ${media.mobile`width: 100% !important; margin-top: -1rem !important; box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1) !important;`};
  }
  &.jumbo {
    width: 50%;
    padding: 0 3rem 0 0;
    height: 90%;
    ${media.tablet`width: 100%; height: auto; order: 2;`};
    ${media.phablet`padding: 0`};
  }
`;

export default function TrendingCard(props) {
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
            <Link to={`/article/${insight.custom_id}`}>
              <button>Read More</button>
            </Link>
          </div>
        )}
      </StyledCard>
    </Link>
  );
}

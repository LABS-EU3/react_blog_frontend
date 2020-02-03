import React, { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { Link } from "react-router-dom";
import media from "../styles/mediaQueries";
import { mixins } from "../styles/shared";

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
  .btn-container {
    order: 3;
    width: 100%;
    height: 10%;
    button {
      ${mixins.secondaryButton}
    }
  }
`;

const StyledImageContainer = styled.div`
  &.jumbo {
    width: 50%;
    order: 2;

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
    ${media.tablet`height: 30%;`};
    img {
      width: 100%;
      height: 100%;
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
    ${media.tablet`flex-direction: column`};
    p {
      font-family: ${theme.fonts.Muli};
      font-size: ${theme.fontSizes.xs};
      ${media.tablet`font-size: ${theme.fontSizes.xxs}`};
      color: ${theme.colors.purple};
    }
    &.reg {
      order: 3;
    }
  }
  .snippet {
    font-size: ${theme.fontSizes.xs};
    ${media.tablet`font-size: ${theme.fontSizes.xxs}`};
    color: ${theme.colors.lightGrey};
    line-height: 1.7rem;
  }

  &.reg {
    box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
    height: 50%;
    justify-content: space-evenly;
    ${media.desktop`height: 60%;`};
    ${media.tablet`height: 70%;`};
  }
  &.jumbo {
    width: 50%;
    padding: 0 3rem 0 0;
    height: 90%;
  }
`;

const Card = ({ insight, type }) => {
  const [vw, setVw] = useState(window.innerWidth / 4);
  window.addEventListener("resize", () => setVw(window.innerWidth / 4));
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

export default Card;

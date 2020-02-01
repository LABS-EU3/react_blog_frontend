import React from "react";
import styled from "styled-components";
import readTime from "../utilities/readTime";
import theme from "../styles/theme";

const StyledCard = styled.div`
  display: flex;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 0 2rem;
  max-width: 650px;
  margin-top: 3rem;
  width: 100%;
  h5 {
    font-size: ${theme.fontSizes.md};
    font-family: ${theme.fonts.Muli};
  }
`;

const StyledImageContainer = styled.div`
  height: 80%;
  display: flex;
  align-content: contain;
  img {
    padding: 1rem;
    object-fit: cover;
    height: 100px;
    width: 140px;
    margin: 0 auto;
  }
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
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.purple};
    }
  }
  .snippet {
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.textGrey};
    line-height: 1.7rem;
  }
`;

const Card = ({ insight }) => {
  console.log("mmm");
  return (
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
              .data.text.substring(0, 120)}
            ...
          </p>
        </div>
      </StyledTextContent>
    </StyledCard>
  );
};

export default Card;

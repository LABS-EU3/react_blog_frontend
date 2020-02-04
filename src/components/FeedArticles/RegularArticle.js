import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import media from "../../styles/mediaQueries";
import { Link } from "react-router-dom";
import readTime from "../../utilities/readTime";

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

export default function RegularCard({ insight }) {
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
}

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
  ${media.phablet`padding: 2rem`}
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
    margin-top: 1rem;
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
  ${media.phablet`height: 15vh; padding: 0`}
  .header {
    display: flex;
    justify-content: space-between;
      .tag {
        font-family: ${theme.fonts.Oswald};
        font-size: ${theme.fontSizes.sm};
        color: ${theme.colors.lightGrey};
        margin-left: 1rem;
      }
  }
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
    min-height: 20vh;
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
            <div className= "header">
          <h5>
            {insight.title.split("").length > 40
              ? `${insight.title.substring(0, 40)}...`
              : insight.title}
          </h5>
        <p className="tag">{insight.tags[0].name.toUpperCase()}</p>

            </div>
          <div className="info">
          <Link to={`/profile/${insight.authorId}`}>
             <p>{insight.author}</p>
          </Link>
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

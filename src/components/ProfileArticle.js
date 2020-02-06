import React, { useState } from "react";
import styled from "styled-components";
import readTime from "../utilities/readTime";
import theme from "../styles/theme";
import { Link, useHistory } from "react-router-dom";
import media from "../styles/mediaQueries";
import moment from "moment";

const StyledRegCard = styled.div`
  display: flex;
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  align-content: center;
  width: 100%;
  max-width: 260px;
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  ${media.phablet`max-width: 400px;`};
`;

const StyledRegImageContainer = styled.div`
  display: flex;
  align-content: contain;
  width: 100%;
  height: 25vh;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
${media.phablet`height: 30vh`};
`;

const StyledRegTextContent = styled.div`
  padding: 1rem;
  display: flex;
  color: black;
  flex-direction: column;
  height: 70%;
  justify-content: space-between;

  h5 {
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.textGrey};
  }

  .info {
      p {
        font-size: ${theme.fontSizes.sm};
        color: ${theme.colors.purple};
      }
      margin-bottom: 1rem;
      overflow: hidden;
  }

  .snippet {
      p {
        font-size: ${theme.fontSizes.xs};
        color: ${theme.colors.lightGrey};
      }
  }
  .crud-btns {
    display: flex;
    justify-content: space-between;

    button {
        border: none;
        font-size: ${theme.fontSizes.xs};
        color: ${theme.colors.purple};
        font-family: ${theme.fonts.Oswald};
        cursor: pointer;
    }
  }
`;

export default function ProfileCard(props) {
    const { insight, personal, setArticleToDelete, setModalOpen } = props;
    const [vw, setVw] = useState(200);
    const setWidth = () => {
        window.innerWidth <= 540 ? setVw(window.innerWidth/2) : setVw(window.innerWidth / 8);
    };
    window.addEventListener("resize", setWidth);
    const history = useHistory();
    return (
        <>
      {/* <Link to={`/article/${insight.custom_id}`}> */}
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
              </div>
            <div className="info">
              <p>{moment(insight.createdAt).format('ll')}</p>
            </div>
            <div className="snippet">
              <p>
                {JSON.parse(insight.body)
                  .find(block => block.type === "paragraph")
                  .data.text.substring(0, vw)}
                ...
              </p>
            </div>
            {personal && <div className="crud-btns">
                <button onClick={() => history.push(`/article/${insight.custom_id}/edit`)}>EDIT</button>
                <button
                onClick={() => {
                    setModalOpen(true);
                    setArticleToDelete(insight.id);
                  }}
                >DELETE</button>
            </div>}
          </StyledRegTextContent>
        </StyledRegCard>
      {/* </Link> */}
      </>
    );
  }
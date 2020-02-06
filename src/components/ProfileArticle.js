import React, { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { Link, useHistory } from "react-router-dom";
import media from "../styles/mediaQueries";
import moment from "moment";

const StyledRegCard = styled.div`
  display: flex;
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  align-content: center;
  width: 30%;
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  ${media.tablet`width: 45%; margin-right: 3rem;`};
  cursor: pointer;
  max-height: 500px;
  overflow-y: hidden;
  margin-right: 2rem;
 @media (max-width: 620px) and (min-width: 100px){
     width: 100%;
     margin-right: 0;
 }
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
    ${media.tablet`margin-bottom: 1rem;`};
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
    ${media.tablet`margin-top: 1rem;`};

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
  const [vw, setVw] = useState(window.innerWidth / 9);
  const setWidth = () => {
    window.innerWidth <= 540
      ? setVw(window.innerWidth / 2)
      : setVw(window.innerWidth / 9);
  };
  window.addEventListener("resize", setWidth);
  const history = useHistory();
  return (
    <>
      <StyledRegCard
        onClick={e =>
          e.target.name !== "delete" &&
          e.target.name !== "edit" &&
          history.push(`/article/${insight.custom_id}`)
        }
      >
        <StyledRegImageContainer>
          <img src={insight.coverImageUrl} alt={insight.title} />
        </StyledRegImageContainer>
        <StyledRegTextContent>
          <div className="header">
            <h5>
              {insight.title.split("").length > 40
                ? `${insight.title.substring(0, 40)}...`
                : insight.title}
            </h5>
          </div>
          <div className="info">
            <p>{moment(insight.createdAt).format("ll")}</p>
          </div>
          <div className="snippet">
            <p>
              {JSON.parse(insight.body)
                .find(block => block.type === "paragraph")
                .data.text.substring(0, vw)}
              ...
            </p>
          </div>
          {personal && (
            <div className="crud-btns">
              <button
                name="edit"
                onClick={() => history.push(`/edit/${insight.custom_id}`)}
              >
                EDIT
              </button>
              <button
                name="delete"
                onClick={() => {
                  setModalOpen(true);
                  setArticleToDelete(insight.id);
                }}
              >
                DELETE
              </button>
            </div>
          )}
        </StyledRegTextContent>
      </StyledRegCard>
    </>
  );
}

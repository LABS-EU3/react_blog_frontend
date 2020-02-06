import React from "react";
import styled from "styled-components";
import logo from "../assets/logo-gradient.png";
import { mixins } from "../styles/shared";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  img {
    margin-bottom: 1.5em;
  }
  h5 {
    font-size: 25px;
    text-align: center;
    margin-bottom: 2rem;
    width: 80%;
    line-height: 1.5em;
  }
  .buttons {
    width: 80%;
    display: flex;
    justify-content: center;
    button {
      &.cancel {
        padding: 1rem 2rem !important;
        ${mixins.secondaryButton};
        border-radius: 3px;
        margin-left: 3rem;
      }
      &.confirm {
        color: white;
        ${mixins.bigButton};
      }
    }
  }
`;

export default function DeleteArticleModal(props) {
  const {
    handleDelete,
    articleToDelete,
    setModalOpen,
    setArticleToDelete
  } = props;

  return (
    <Container>
      <img src={logo} alt="logo" />
      <h5> Are you sure you want to delete this article?</h5>

      <div className="buttons">
        <button
          className="confirm"
          onClick={() => {
            handleDelete(articleToDelete);
            setModalOpen(false);
          }}
        >
          Confirm
        </button>
        <button
          className="cancel"
          onClick={() => {
            setArticleToDelete(null);
            setModalOpen(false);
          }}
        >
          Cancel
        </button>
      </div>
    </Container>
  );
}
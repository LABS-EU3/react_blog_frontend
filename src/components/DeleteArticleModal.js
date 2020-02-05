import React from "react";
import styled from "styled-components";
import logo from "../assets/logo-gradient.png";

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
  }
  .buttons {
    width: 80%;
    display: flex;
    justify-content: space-around;
    button {
      width: 40%;
      height: 30px;
      border: none;
      font-size: 16px;
      border-radius: 2px;
      &.confirm {
        background-color: #e17878;
        border: 1px solid #c85959;
        color: white;
        &:hover {
          background-color: #b85050;
          cursor: pointer;
        }
      }
      &.cancel {
        background: white;
        color: #22387d;
        border: 1px solid #22387d;
        &:hover {
          background: #ededed;
          cursor: pointer;
        }
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

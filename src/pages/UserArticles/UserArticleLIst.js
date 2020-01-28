/* eslint-disable no-shadow */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  getAuthorArticle,
  deleteAuthorArticle
} from "../../redux-store/actions/get-author-article";
import blue_arrow from "../../assets/images/Icons/blue_arrow.svg";
import { MainDiv } from "../../utilities/styles/profile-styles";
import Modal from "../../components/Others/Modal";
import DeleteArticleModal from "../../components/DeleteArticleModal";
import {  decodeToken } from '../../utilities/checkToken';

export const UserArticleList = ({
  isFetching,
  getAuthorArticle,
  deleteAuthorArticle,
  userArticles: { userArticles }
}) => {
  useEffect(() => {
    getAuthorArticle(userId);
  }, []);

  const history = useHistory();
  const { subject : userId } = decodeToken();
  const [modalOpen, setModalOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);
  const handleDelete = id => {
    deleteAuthorArticle(id);
  };

  return (
    <MainDiv>
      {modalOpen && (
        <Modal height="250px" width="380px" handleOpen={setModalOpen}>
          <DeleteArticleModal
            handleDelete={handleDelete}
            articleToDelete={articleToDelete}
            setModalOpen={setModalOpen}
            setArticleToDelete={setArticleToDelete}
          />
        </Modal>
      )}
      {!isFetching ? (
        <section className="new-section">
          {userArticles.length !== 0 ? (
            userArticles.response.map(article => (
              <div
                className="main-article"
                key={article.id}
                onClick={e =>
                  e.target.name !== "delete" &&
                  history.push(`/article/${article.custom_id}`)
                }
              >
                <img src={article.coverImageUrl} alt="" />
                <div className="main-article-content">
                  <h3>{article.title}</h3>
                  <p>
                    {JSON.parse(article.body)
                      .find(block => block.type === "paragraph")
                      .data.text.substring(0, 150)}
                    ...
                  </p>
                  <div className="main-article-footer">
                    <button
                      onClick={() => {
                        setModalOpen(true);
                        setArticleToDelete(article.id);
                      }}
                      id={article.id}
                      name="delete"
                      className="delete"
                    >
                      Delete
                    </button>
                    <div className="article-link">
                      <Link to={`/article/${article.custom_id}`}>Details</Link>
                      <img src={blue_arrow} alt="Blue Arrow" />
                    </div>
                  </div>
                </div>
              </div>

              // key={`${articles.id}`}
              // title={articles.title}
              // body={articles.body}
              // id={articles.id}
              // photo={articles.coverImageUrl}
            ))
          ) : (
            <div className="empty-state">
              <p>No data to display</p>
            </div>
          )}
        </section>
      ) : (
        <div className="empty-state"></div>
      )}
    </MainDiv>
  );
};
export default connect(state => state, {
  getAuthorArticle,
  deleteAuthorArticle
})(UserArticleList);

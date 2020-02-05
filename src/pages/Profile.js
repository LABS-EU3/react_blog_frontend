import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Authed from "../components/Navigation/Authed";
import { decodeToken } from "../utilities/checkToken";
import { verify } from "../redux-store/actions/auths";
import { Section } from "../styles/shared";
import styled from "styled-components";
import media from "../styles/mediaQueries";
import theme from "../styles/theme";
import {
  getUserProfile,
  getAuthorArticles,
  followAuthor,
  deleteArticle
} from "../redux-store/actions/user-profile-actions";
import EditProfile from "./EditProfile";
import Loader from "./Loader";
import ProfileArticle from "../components/ProfileArticle";
import Modal from "../components/Others/Modal";
import DeleteArticleModal from "../components/DeleteArticleModal";

const Container = styled(Section)`
  margin-top: 10rem;
`;

const StyledUserInfo = styled.div`
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
  ${media.phablet`box-shadow: none;`};
  min-height: 40vh;
  .loading {
    width: 100%;
    min-height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledUserArticles = styled.div`
  margin-top: 3rem;
  ${media.phablet`margin-top: 0;`}
  .tabs {
    margin-bottom: 3rem;
    ${media.phablet`display: flex; justify-content: space-between;`};
    button {
      border: none;
      cursor: pointer;
      padding: 0;
      margin-right: 2rem;
      &.clicked {
        border-bottom: 1px solid ${theme.colors.purple};
      }
    }
    h2 {
      border-bottom: 1px solid ${theme.colors.purple};
      width: fit-content;
      line-height: normal;
    }
    .tab {
      color: ${theme.colors.textGrey};
      font-size: ${theme.fontSizes.xxl};
      font-family: ${theme.fonts.Oswald};
      font-weight: bold !important;
    }
  }
  .articles {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;


export function Profile(props) {
  const { subject: userId } = decodeToken();
  const paramId = JSON.parse(props.location.pathname.split("/")[2]);
  const { getUserProfile, user, followAuthor, getAuthorArticles, deleteAuthorArticle } = props;
  let personal = userId === paramId;
  const [clicked, setClicked] = useState("published");
  const [modalOpen, setModalOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);

  useEffect(() => {
    // const location = props.location.search;
    // if (location) {
    //   const verificationId = location.split("=");
    //   props.verify(verificationId[1], userId);
    // }
    getUserProfile(paramId);
    getAuthorArticles(paramId);
  }, []);

  // if (props.success) {
  //   window.location.href = "/profile";
  // }

  const handleFollow = e => {
    const button = e.target;
    followAuthor(paramId).then(res => button.setAttribute("disabled", true));
  };

  const handleDeleteArticle = id => {
    deleteArticle(id);
  };

  return (
    <>
      <Authed />
      <Container>
      {modalOpen && (
        <Modal height="250px" width="380px" handleOpen={setModalOpen}>
          <DeleteArticleModal
            handleDelete={handleDeleteArticle}
            articleToDelete={articleToDelete}
            setModalOpen={setModalOpen}
            setArticleToDelete={setArticleToDelete}
          />
        </Modal>
      )}
        <StyledUserInfo>
          {user.loading && (
            <div className="loading">
              <Loader />
            </div>
          )}
          {!user.loading && user.data && user.articles && (
            <EditProfile user={user} personal={personal} />
          )}
        </StyledUserInfo>

        <StyledUserArticles>
          {!user.loading && user.articles && (
            <>
            <div className="tabs">
              {!personal ? (
                <h2 className="tab">INSIGHTS</h2>
              ) : (
                <>
                  <button
                    className={clicked === "published" ? "tab clicked" : "tab"}
                    name="published"
                    onClick={() => setClicked("published")}
                  >
                    PUBLISHED
                  </button>
                  <button
                    className={clicked === "drafts" ? "tab clicked" : "tab"}
                    name="drafts"
                    onClick={() => setClicked("drafts")}
                  >
                    DRAFTS
                  </button>
                  <button
                    className={clicked === "reactions" ? "tab clicked" : "tab"}
                    name="reactions"
                    onClick={() => setClicked("reactions")}
                  >
                    REACTIONS
                  </button>
                </>
              )}
            </div>
          
            <div className="articles">
             {!personal && user.articles.map(insight => insight.isPublished && <ProfileArticle insight={insight} personal={personal}/>)}   
             {personal && clicked==="published" && user.articles.map(insight => insight.isPublished && <ProfileArticle insight={insight} personal={personal} setArticleToDelete={setArticleToDelete} setModalOpen={setModalOpen}/>)}   
             {personal && clicked==="drafts" && user.articles.map(insight => insight.isEditing && <ProfileArticle insight={insight} personal={personal} setArticleToDelete={setArticleToDelete} setModalOpen={setModalOpen}/>)}   
            </div>  
            </>  
          )}
        </StyledUserArticles>
      </Container>
    </>
  );
}

const mapStateToProps = store => {
  return {
    loading: store.auth.loading,
    success: store.auth.verification_success,
    user: store.userProfile
  };
};

export default connect(mapStateToProps, {
  verify,
  getUserProfile,
  getAuthorArticles,
  followAuthor,
  deleteArticle
})(Profile);

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
  followAuthor
} from "../redux-store/actions/user-profile-actions";
import EditProfile from "./EditProfile";
import Loader from "./Loader";
import { initState } from "../redux-store/reducers/user-profile-reducer";

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
  border: 1px solid #cacaca;
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
`;

export function Profile(props) {
  const { subject: userId } = decodeToken();
  const paramId = JSON.parse(props.location.pathname.split("/")[2]);
  const { getUserProfile, user, followAuthor, getAuthorArticles } = props;
  const token = localStorage.getItem("token");
  let personal = userId === paramId;
  const [clicked, setClicked] = useState("published");

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

  return (
    <>
      <Authed />
      <Container>
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
             {!personal && user.articles.map(insight => insight.isPublished && <div>{insight.title}</div>)}   
             {personal && clicked==="published" && user.articles.map(insight => insight.isPublished && <div>{insight.title}</div>)}   
             {personal && clicked==="drafts" && user.articles.map(insight => insight.isEditing && <div>{insight.title}</div>)}   
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
  followAuthor
})(Profile);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import Authed from "../components/Navigation/Authed";
import { decodeToken } from "../utilities/checkToken";
import { verify } from "../redux-store/actions/auths";
import { Section } from "../styles/shared";
import styled from "styled-components";
import media from "../styles/mediaQueries";
import {
  getUserProfile,
  getAuthorArticles,
  followAuthor
} from "../redux-store/actions/user-profile-actions";
import EditProfile from "./EditProfile";

const Container = styled(Section)`
  margin-top: 10rem;
`;

const StyledUserInfo = styled.div`
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
  ${media.phablet`box-shadow: none;`};
  min-height: 40vh;
`;

const StyledUserArticles = styled.div``;

export function Profile(props) {
  const { subject: userId } = decodeToken();
  const paramId = JSON.parse(props.location.pathname.split("/")[2]);
  const {
    getUserProfile,
    user,
    followAuthor,
    articles,
    getAuthorArticles
  } = props;
  const token = localStorage.getItem("token");

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
        {!user.loading && user.data && (
          <StyledUserInfo>
            {userId === paramId ? (
              <EditProfile user={user} />
            ) : (
              <div className="content">
                {user.data.followers ? (
                  token &&
                  userId !== paramId &&
                  user.data.followers.includes(userId) ? (
                    <button>Following</button>
                  ) : (
                    token &&
                    userId !== paramId &&
                    !user.data.followers.includes(userId) && (
                      <button onClick={handleFollow}>Follow</button>
                    )
                  )
                ) : null}

                <img src={user.data.avatarUrl} alt="" />
                <h3>{user.data.fullname}</h3>
                {user.data.bio && <p className="bio">{user.data.bio}</p>}
                {user.data.followers && user.data.following && (
                  <div className="follows">
                    <p>
                      <span>{user.data.followers.length}</span> Followers
                    </p>

                    <p>
                      <span>{user.data.following.length}</span> Following
                    </p>
                  </div>
                )}
              </div>
            )}
          </StyledUserInfo>
        )}
        <StyledUserArticles></StyledUserArticles>
      </Container>
    </>
  );
}

const mapStateToProps = store => {
  return {
    loading: store.auth.loading,
    success: store.auth.verification_success,
    user: store.userProfile,
    followSuccess: store.userProfile.followAuthorSuccess,
    articles: store.userProfile.articles
  };
};

export default connect(mapStateToProps, {
  verify,
  getUserProfile,
  getAuthorArticles,
  followAuthor
})(Profile);

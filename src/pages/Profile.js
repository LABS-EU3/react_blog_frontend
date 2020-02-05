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
import Loader from "./Loader";

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
          <StyledUserInfo>
        {user.loading && <div className="loading"><Loader /></div>}
        {!user.loading && user.data && user.articles && (
              <EditProfile user={user} personal={userId === paramId} />
            
        )}
          </StyledUserInfo>
        {!user.loading && user.articles && console.log(user.articles)}
        <StyledUserArticles></StyledUserArticles>
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

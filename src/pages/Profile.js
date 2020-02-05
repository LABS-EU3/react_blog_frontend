import React, { useEffect } from "react";
import { connect } from "react-redux";
import Authed from "../components/Navigation/Authed";
import { decodeToken } from "../utilities/checkToken";
import { verify } from "../redux-store/actions/auths";
import { Section } from "../styles/shared";
import styled from "styled-components";
import {
  getUserProfile,
  updateUserProfile
} from "../redux-store/actions/user-profile-actions";
import EditProfile from "./EditProfile";
import AuthorProfile from "./AuthorProfile";
const Container = styled(Section)`
  margin-top: 10rem;
`;

const StyledUserInfo = styled.div``;
const StyledUserArticles = styled.div``;

export function Profile(props) {
  const { subject: userId } = decodeToken();
  const paramId = JSON.parse(props.location.pathname.split("/")[2]);
  const { getUserProfile, updateUserProfile, user } = props;
  useEffect(() => {
    // const location = props.location.search;
    // if (location) {
    //   const verificationId = location.split("=");
    //   props.verify(verificationId[1], userId);
    // }
    getUserProfile(paramId);
    console.log(userId === paramId)
  }, []);

  // if (props.success) {
  //   window.location.href = "/profile";
  // }

  return (
    <>
      <Authed />
      <Container>
          {!user.loading && user.data && 
        <StyledUserInfo>
          {userId === paramId ? <>
          <EditProfile user={user}/> 
          
          </> : 
          //<AuthorProfile user={user}/>
          null
          }
        </StyledUserInfo>
          }
        <StyledUserArticles>

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
  updateUserProfile
})(Profile);

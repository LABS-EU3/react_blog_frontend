import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAuthorProfile } from "../redux-store/actions/get-author-profile-actions";

const AuthorProfile = props => {
  const { match, getAuthorProfile, profile } = props;
  useEffect(() => {
    const authorId = match.params.id;
    getAuthorProfile(authorId);
  }, [match.params.id, getAuthorProfile]);
  return <div>
      {profile && console.log(profile)}
      AuthorProfile
      </div>;
};

const mapStateToProps = state => {
    return {
      profile: state.authorProfile.profile
    };
  };

export default connect(mapStateToProps, {getAuthorProfile})(AuthorProfile);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getAuthorProfile,
  followAuthor
} from "../redux-store/actions/get-author-profile-actions";
import DefaultNavigation from "../components/Navigation/Default";
import AuthedNavigation from "../components/Navigation/Authed";
import { getToken } from "../utilities/authentication";
import Button from "../components/Buttons/Button";
import {
  StyledProfile,
  StyledInfo,
  StyledStories
} from "../utilities/styles/author-profile-styles";

const AuthorProfile = props => {
  const {
    match,
    getAuthorProfile,
    profile,
    followSuccess,
    followAuthor
  } = props;
  const token = getToken();
  const authorId = match.params.id;
  useEffect(() => {
    getAuthorProfile(authorId);
  }, []);

  const handleFollow = e => {
    const button = e.target;
    followAuthor([authorId]).then(res => button.setAttribute("disabled", true));
    console.log(profile.followers);
  };

  return (
    <div>
      {token ? <AuthedNavigation /> : <DefaultNavigation />}
      <StyledProfile>
        {profile && (
          <>
            <div className="section info">
              <StyledInfo>
                <div className="content">
                  <h3>{profile.fullname}</h3>
                  <p className="bio">
                    {profile.bio
                      ? profile.bio
                      : "MeganEnnis.com Author, essayist, screenwriter, copywriter, movie-maker, beach-lover, bison-lover, gym-goer, all-around-the-world-goer."}
                  </p>
                  {profile.interests && (
                    <div className="interests">
                      {profile.interests.map(interest => (
                        <p key={interest.name}>#{interest.name}</p>
                      ))}
                    </div>
                  )}
                  <div className="follows">
                    <p>
                      <span>{profile.followers}</span> Followers
                    </p>
                    <p>
                      <span>{profile.following}</span> Following
                    </p>
                  </div>
                  {token && (
                    <Button
                      label={followSuccess ? "Following" : "Follow"}
                      handleClick={handleFollow}
                    />
                  )}
                </div>
                <div className="image">
                  <img src={profile.avatarUrl} alt="" />
                </div>
              </StyledInfo>
            </div>
            <div className="section stories">
              <StyledStories>
                <h3>Stories Here</h3>
              </StyledStories>
            </div>
          </>
        )}
      </StyledProfile>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.authorProfile.profile,
    followSuccess: state.authorProfile.followAuthorSuccess
  };
};

export default connect(mapStateToProps, { getAuthorProfile, followAuthor })(
  AuthorProfile
);

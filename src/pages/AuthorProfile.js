import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAuthorProfile } from "../redux-store/actions/get-author-profile-actions";
import DefaultNavigation from "../components/Navigation/Default";
import AuthedNavigation from "../components/Navigation/Authed";
import { getToken } from "../utilities/authentication";
import Button from "../components/Buttons/Button";
import { StyledProfile, StyledInfo, StyledStories } from "../utilities/styles/author-profile-styles";

const AuthorProfile = props => {
  const { match, getAuthorProfile, profile } = props;
  const token = getToken();
  useEffect(() => {
    const authorId = match.params.id;
    getAuthorProfile(authorId);
  }, [match.params.id, getAuthorProfile]);

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
                        <p>#{interest.name}</p>
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
                  {token && <Button label="Follow" />}                  
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
    profile: state.authorProfile.profile
  };
};

export default connect(mapStateToProps, { getAuthorProfile })(AuthorProfile);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getAuthorProfile,
  followAuthor,
  getAuthorArticles
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
import { Link } from "react-router-dom";
import blue_arrow from "../assets/images/Icons/blue_arrow.svg";
import { decodeToken } from "../utilities/checkToken";

const AuthorProfile = props => {
  const {
    match,
    getAuthorProfile,
    profile,
    followSuccess,
    followAuthor,
    authorArticles,
    getAuthorArticles
  } = props;
  const token = getToken();
  const { subject: userId } = decodeToken();
  const authorId = match.params.id;
  useEffect(() => {
    getAuthorProfile(authorId);
    getAuthorArticles(authorId);
  }, []);

  const handleFollow = e => {
    const button = e.target;
    followAuthor([authorId]).then(res => button.setAttribute("disabled", true));
  };

  return (
    <div>
      {token ? <AuthedNavigation /> : <DefaultNavigation />}
      <StyledProfile>
        {profile && (
          <>
            <div
              className={
                authorArticles ? "section info shorter" : "section info"
              }
            >
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
                  {profile.followers && profile.following && (
                    <div className="follows">
                      <p>
                        <span>{profile.followers.length}</span> Followers
                      </p>

                      <p>
                        <span>{profile.following.length}</span> Following
                      </p>
                    </div>
                  )}

                  {/* if user is not logged in, follow button should not render. Checks for token below */}
                  {/* If they are logged in and the button renders, the label content is based on whether the user is already following the author. */}

                  {token && (
                    <Button
                      label={
                        followSuccess ||
                        // checks to see if the user id of logged in user is included in array of ids the author has of users that are following them
                        (profile.followers &&
                          profile.followers.includes(userId))
                          ? "Following"
                          : "Follow"
                      }
                      handleClick={handleFollow}
                      disabled={
                        followSuccess ||
                        (profile.followers &&
                          profile.followers.includes(userId))
                      }
                    />
                  )}
                </div>
                <div className="image">
                  <img src={profile.avatarUrl} alt="" />
                </div>
              </StyledInfo>
            </div>
            {authorArticles && (
              <div className="section stories">
                <h3>Insights</h3>
                <StyledStories>
                  {authorArticles.map(
                    article =>
                      article.isPublished && (
                        <div
                          className="article"
                          key={article.id}
                          onClick={() =>
                            props.history.push(`/article/${article.custom_id}`)
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
                              <div className="article-link">
                                <Link to={`/article/${article.custom_id}`}>
                                  Details
                                </Link>
                                <img src={blue_arrow} alt="Blue Arrow" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </StyledStories>
              </div>
            )}
          </>
        )}
      </StyledProfile>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.authorProfile.profile,
    followSuccess: state.authorProfile.followAuthorSuccess,
    authorArticles: state.authorProfile.articles
  };
};

export default connect(mapStateToProps, {
  getAuthorProfile,
  followAuthor,
  getAuthorArticles
})(AuthorProfile);

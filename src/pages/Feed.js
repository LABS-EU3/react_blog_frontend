import React, { useEffect } from "react";
import { connect } from "react-redux";
import DefaultNavigation from "../components/Navigation/Default";
import AuthedNavigation from "../components/Navigation/Authed";
import arrow from "../assets/images/Icons/arrow_icon.svg";
import blue_arrow from "../assets/images/Icons/blue_arrow.svg";
import {
  StyledFeed,
  StyledTrending,
  StyledLoggedInFeed,
  StyledMainFeed
} from "../utilities/styles/feed-styles";
import { getArticleFeed } from "../redux-store/actions/get-article-actions";
import { getToken } from "../utilities/authentication";
import altimage from "../assets/images/altimage.png";
import { Link } from "react-router-dom";

export function Feed(props) {
  const { getArticleFeed, articles } = props;
  const token = getToken();

  useEffect(() => {
    getArticleFeed();
  }, [getArticleFeed]);

  return (
    <div>
      {token ? <AuthedNavigation /> : <DefaultNavigation />}
      <StyledFeed>
        <StyledTrending>
          <div className="trending-header">
            <button>TRENDING NOW</button>
          </div>
          {!articles.loading && articles.data.trending && (
            <div className="trending-content">
              <div
                className="trending-content-jumbo"
                onClick={() =>
                  props.history.push(`/article/${articles.data.trending[0].custom_id}`)
                }
                style={{
                  backgroundImage: `url(${articles.data.trending[0]
                    .coverImageUrl || altimage})`,
                  cursor: `pointer`
                }}
              >
                <Link to={`/article/${articles.data.trending[0].custom_id}`}>
                  {articles.data.trending[0].title}
                </Link>
              </div>

              <div className="trending-content-regular">
                {articles.data.trending.slice(1).map(trend => {
                  return (
                      <div
                        key={trend.id}
                        onClick={() =>
                          props.history.push(`/article/${trend.custom_id}`)
                        }
                        className="content-box"
                        style={{
                          backgroundImage: `url(${trend
                            .coverImageUrl})`,
                          cursor: `pointer`
                        }}
                      >
                        <Link to={`/article/${trend.custom_id}`}>
                          {trend.title}
                        </Link>
                      </div>
                  );
                })}
              </div>
            </div>
          )}
        </StyledTrending>
        <StyledMainFeed>
          {!articles.loading && (
            <div
              className={
                articles.data.following || articles.data.reactions
                  ? "main-insights"
                  : "main-insights dynamic"
              }
            >
              <div className="main-header">
                {articles.data.interests ? (
                  <button>INSIGHTS FROM YOUR INTERESTS <img src={arrow} alt="Arrow icon" /></button>
                ) : (
                  <button>EXPLORE INSIGHTS <img src={arrow} alt="Arrow icon" /></button>
                )}
              </div>
              <div className="main-content">
                {(articles.data.mainFeed || articles.data.interests) &&
                  (articles.data.mainFeed || articles.data.interests).map(
                    article => {
                      return (
                        <div
                          className={
                            articles.data.following
                              ? "main-article"
                              : "main-article dynamic"
                          }
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
                              <p>{article.author}</p>
                              <div className="article-link">
                                <Link to={`/article/${article.custom_id}`}>Details</Link>
                                <img src={blue_arrow} alt="Blue Arrow" />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                {/* <div className="read-more">
                  <button>Read More...</button>
                </div> */}
              </div>
            </div>
          )}
          {!articles.loading &&
            (articles.data.following || articles.data.reactions) && (
              <StyledLoggedInFeed>
                {articles.data.reactions && (
                  <div className="reactions">
                    <h4>Reactions</h4>
                    <div style={{padding: `1.5rem`}}>
                    {articles.data.reactions.map(reaction => {
                      return (
                        <div className="reaction-box" key={reaction.id}>
                          <p>{reaction.text}</p>
                        </div>
                      );
                    })}
                    </div>
                  </div>
                )}

                {articles.data.following && (
                  <div className="fav-author-feed">
                    <h4>Recent Articles from your Favourite Authors</h4>
                    {articles.data.following.map(article => (
                      <div
                        className="fav-author-article"
                        key={article.id}
                        onClick={() =>
                          props.history.push(`/article/${article.custom_id}`)
                        }
                      >
                        <h5>{article.title}</h5>
                        <h6>{article.author}</h6>
                        <p>{article.createdAt}</p>
                        <div className="fav-author-article-footer">
                          <div className="tags">
                            {article.tags.map(tag => {
                              return <p key={tag.id}>{`#${tag.name}`}</p>;
                            })}
                          </div>
                          <div className="details">
                            <Link to={`/article/${article.custom_id}`}>Details</Link>
                            <img src={blue_arrow} alt="Arrow" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </StyledLoggedInFeed>
            )}
        </StyledMainFeed>
      </StyledFeed>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps, { getArticleFeed })(Feed);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import DefaultNavigation from "../components/Navigation/Default";
import AuthedNavigation from "../components/Navigation/Authed";
import arrow from "../assets/images/Icons/arrow_icon.svg";
import blue_arrow from "../assets/images/Icons/blue_arrow.svg";
import styled from "styled-components";
import { getArticleFeed } from "../redux-store/actions/get-article-actions";
import { getToken } from "../utilities/authentication";
import altimage from "../assets/images/altimage.png";
import { Link } from "react-router-dom";
const StyledFeed = styled.div`
  width: 100%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
`;

const StyledTrending = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .trending-header button {
    font-family: Lato;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    color: white;
    background-color: #2fc2df;
    border: none;
    border-radius: 30px;
    box-shadow: 0px 10px 10px rgba(47, 194, 223, 0.15);
    padding: 1rem 2rem;
    margin-bottom: 2rem;
  }
  .trending-content {
    width: 100%;
    display: flex;
    min-height: 60vh;
    .trending-content-jumbo {
      width: 45%;
      border-radius: 10px;
      display: flex;
      align-items: flex-end;
      background-size: cover;
      a {
        background: rgba(118, 116, 116, 0.62);
        color: white;
        padding: 3rem 2rem 1rem 2rem;
        width: 100%;
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 43px;
        border-radius: 0 0 10px 10px;
      }
    }
    .trending-content-regular {
      width: 55%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .trending-row {
        display: flex;
        width: 100%;
        height: 48%;
        justify-content: space-evenly;
        .content-box {
          margin-left: 2rem;
          width: 50%;
          height: 100%;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          align-items: flex-end;
          border-radius: 10px;
        }
        a {
          background: rgba(118, 116, 116, 0.62);
          color: white;
          padding: 10% 1rem 1rem 1.5rem;
          font-family: Lato;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 33px;
          border-radius: 0 0 10px 10px;
          width: 100%;
          display: flex;
          align-items: flex-end;
        }
      }
    }
  }
`;

const StyledMainFeed = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  .main-insights {
    width: 65%;
    border-top: 1px solid #333333;
    padding-top: 1rem;

    &.dynamic {
      width: 100%;
    }

    .main-header {
      display: flex;
      h4 {
        font-family: Lato;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        margin-right: 1rem;
      }
    }
    .main-content {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: flex-end;
      .main-article {
        width: 40%;
        margin: 2rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:hover {
          cursor: pointer;
          .main-article-content {
            background: white;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
          }
        }
        &.dynamic {
          width: 30%;
        }

        img {
          width: 85%;
          height: 25vh;
          border-radius: 10px;
          margin-bottom: -9rem;
          z-index: 1;
        }

        .main-article-content {
          background: #f7f9fb;
          border-radius: 5px;
          width: 100%;
          z-index: -1;
          padding: 3rem;

          h3 {
            margin: 8rem 0 2rem 0;
            font-family: Lato;
            font-style: normal;
            font-weight: bold;
            font-size: 25px;
            line-height: 35px;
          }
          p {
            font-family: Lato;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            color: #b7bbc0;
            margin-bottom: 5rem;
          }
          .main-article-footer {
            display: flex;
            justify-content: space-between;
            p {
              font-style: italic;
              margin-bottom: 0;
            }
            .article-link {
              display: flex;
              height: 2vh;
              align-items: center;
              img {
                height: 20px;
                width: 14px;
                margin: 0 0 0 0.8rem;
              }
              a {
                color: #2fc2df;
              }
            }
          }
        }
      }
      .read-more {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 2rem 0;
        button {
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
          width: 40%;
          font-family: Lato;
          font-style: normal;
          font-weight: bold;
          font-size: 25px;
          color: #2fc2df;
          border: none;
          padding: 1rem 0;
          cursor: pointer;
        }
      }
    }
  }
`;

export const StyledLoggedInFeed = styled.div`
  width: 35%;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;

  &.hide {
    display: none;
  }

  .reactions,
  .fav-author-feed {
    border-radius: 5px;
    background-color: #f7f9fb;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2rem;
    margin-bottom: 4rem;

    h4 {
      color: #2fc2df;
      font-family: Lato;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      text-align: center;
      margin-bottom: 1.5rem;
      width: 60%;
    }

    .reaction-box,
    .fav-author-article {
      background-color: white;
      padding: 1.5rem;
      width: 90%;
      margin-bottom: 1.5rem;
      border-radius: 5px;

      &:hover {
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
        cursor: pointer;
      }

      h5 {
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
      }

      h6 {
        font-family: Lato;
        font-style: italic;
        font-weight: normal;
        font-size: 20px;
        line-height: 31px;
        color: #b7bbc0;
        margin: 1.5rem 0 0 0;
      }
      p {
        font-family: Lato;
        font-style: italic;
        font-weight: 500;
        font-size: 14px;
        color: #b7bbc0;
        margin-right: 10px;
      }

      .fav-author-article-footer {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 1.5rem;
        .tags {
          display: flex;
          flex-wrap: wrap;
        }

        .details {
          display: flex;

          a {
            color: #2fc2df;
            margin-right: 5px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

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
                style={{
                  backgroundImage: `url(${articles.data.trending[0]
                    .coverImageUrl || altimage})`
                }}
              >
                <Link to={`/read/${articles.data.trending[0].id}`}>
                  {articles.data.trending[0].title}
                </Link>
              </div>
              <div className="trending-content-regular">
                <div className="trending-row">
                  <div
                    className="content-box"
                    style={{
                      backgroundImage: `url(${articles.data.trending[1]
                        .coverImageUrl || altimage})`
                    }}
                  >
                    <Link to={`/read/${articles.data.trending[1].id}`}>
                      {articles.data.trending[1].title}
                    </Link>
                  </div>
                  <div
                    className="content-box"
                    style={{
                      backgroundImage: `url(${articles.data.trending[2]
                        .coverImageUrl || altimage})`
                    }}
                  >
                    <Link to={`/read/${articles.data.trending[2].id}`}>
                      {articles.data.trending[2].title}
                    </Link>
                  </div>
                </div>
                <div className="trending-row">
                  <div
                    className="content-box"
                    style={{
                      backgroundImage: `url(${articles.data.trending[3]
                        .coverImageUrl || altimage})`
                    }}
                  >
                    <Link to={`/read/${articles.data.trending[3].id}`}>
                      {articles.data.trending[3].title}
                    </Link>
                  </div>
                  <div
                    className="content-box"
                    style={{
                      backgroundImage: `url(${articles.data.trending[4]
                        .coverImageUrl || altimage})`
                    }}
                  >
                    <Link to={`/read/${articles.data.trending[4].id}`}>
                      {articles.data.trending[4].title}
                    </Link>
                  </div>
                </div>
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
                  <h4>INSIGHTS FROM YOUR INTERESTS</h4>
                ) : (
                  <h4>EXPLORE INSIGHTS</h4>
                )}
                <img src={arrow} alt="Arrow icon" />
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
                            props.history.push(`/read/${article.id}`)
                          }
                        >
                          <img src={article.coverImageUrl || altimage} alt="" />
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
                                <a href={`/read/${article.id}`}>Details</a>
                                <img src={blue_arrow} alt="Blue Arrow" />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                <div className="read-more">
                  <button>Read More...</button>
                </div>
              </div>
            </div>
          )}
          {!articles.loading &&
            (articles.data.following || articles.data.reactions) && (
              <StyledLoggedInFeed>
                {articles.data.reactions && (
                  <div className="reactions">
                    <h4>Reactions</h4>
                    {articles.data.reactions.map(reaction => {
                      return (
                        <div className="reaction-box" key={reaction.id}>
                          <p>{reaction.text}</p>
                        </div>
                      );
                    })}
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
                          props.history.push(`/read/${article.id}`)
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
                            <a href="/">Details</a>
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

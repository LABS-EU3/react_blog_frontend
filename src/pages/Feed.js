import React, { useEffect } from "react";
import { connect } from "react-redux";
import DefaultNavigation from "../components/Navigation/Default";
import AuthedNavigation from "../components/Navigation/Authed";
import arrow from "../assets/images/Icons/arrow_icon.svg";
import blue_arrow from "../assets/images/Icons/blue_arrow.svg";
import icon_refresh from "../assets/images/Icons/icon-refresh.svg";
import styled from "styled-components";
import { getArticleFeed } from "../redux-store/actions/get-article-actions";
import { getToken } from "../utilities/authentication";

const mockTrendingArticleImages = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1440985465094-6ac443aab454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1506645292803-579c17d4ba6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1490971588422-52f6262a237a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1486649961855-75838619c131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  }
];

const mockUserReactions = [
  { id: 1, text: "Johnson Ogwuru liked your post 'Internet of Thi...'" },
  { id: 2, text: "Damilola Oluwami reacted to your post 'Internet of Thi...'" },
  { id: 3, text: "User234 liked your post 'It's a Long Established..." },
  { id: 4, text: "David Kuseh reacted to you post 'Internet of Thi...'" }
];

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
      cursor: pointer;
      background-color: grey;
      border-radius: 10px;
      background: url(${mockTrendingArticleImages[0].imageUrl});
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      align-items: flex-end;
      h2 {
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
      .row {
        display: flex;
        height: 50%;
        &.top-margin {
          margin-top: 1rem;
        }
        .content-box {
          margin-left: 1rem;
          cursor: pointer;
          width: 100%;
          background-repeat: no-repeat;
          background-size: cover;
          height: 100%;
          display: flex;
          align-items: flex-end;
          border-radius: 10px;
        }
        h4 {
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
  .content-right {
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
      }

      .fav-author-article {
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
          {!articles.articles.data ? (
            "Loading"
          ) : (
            <div className="trending-content">
              <div className="trending-content-jumbo">
                <h2>{articles.articles.data.trending[0].title}</h2>
              </div>
              <div className="trending-content-regular">
                <div className="row">
                  <div
                    className="content-box"
                    style={{
                      background: `url(${mockTrendingArticleImages[1].imageUrl})`
                    }}
                  >
                    <h4>{articles.articles.data.trending[0].title}</h4>
                  </div>
                  <div
                    className="content-box"
                    style={{
                      background: `url(${mockTrendingArticleImages[2].imageUrl})`
                    }}
                  >
                    <h4>{articles.articles.data.trending[0].title}</h4>
                  </div>
                </div>
                <div className="row top-margin">
                  <div
                    className="content-box"
                    style={{
                      background: `url(${mockTrendingArticleImages[3].imageUrl})`
                    }}
                  >
                    <h4>{articles.articles.data.trending[0].title}</h4>
                  </div>
                  <div
                    className="content-box"
                    style={{
                      background: `url(${mockTrendingArticleImages[4].imageUrl})`
                    }}
                  >
                    <h4>{articles.articles.data.trending[0].title}</h4>
                  </div>
                </div>
              </div>
            </div>
          )}
        </StyledTrending>
        <StyledMainFeed>
          <div className={token ? "main-insights" : "main-insights dynamic"}>
            <div className="main-header">
              {token ? (
                <h4>INSIGHTS FROM YOUR INTERESTS</h4>
              ) : (
                <h4>EXPLORE INSIGHTS</h4>
              )}
              <img src={arrow} alt="Arrow icon" />
            </div>
            <div className="main-content">
              {articles.articles.data
                ? (
                    articles.articles.data.mainFeed ||
                    articles.articles.data.interests
                  ).map(article => {
                    return (
                      <div
                        className={
                          token ? "main-article" : "main-article dynamic"
                        }
                        key={article.id}
                      >
                        <img src={article.imageUrl} alt="" />
                        <div className="main-article-content">
                          <h3>{article.title}</h3>
                          <p>{article.body}</p>
                          <div className="main-article-footer">
                            <p>{article.author}</p>
                            <div className="article-link">
                              <a href={`/articles/${article.id}`}>Details</a>
                              <img src={blue_arrow} alt="Blue Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : "Loading "}
              <div className="read-more">
                <button>Read More...</button>
              </div>
            </div>
          </div>
          {!token ? null : (
            <div className="content-right">
              <div className="reactions">
                <h4>Reactions</h4>
                {mockUserReactions.map(reaction => {
                  return (
                    <div className="reaction-box" key={reaction.id}>
                      <p>{reaction.text}</p>
                    </div>
                  );
                })}
              </div>
              <div className="fav-author-feed">
                <h4>Recent Articles from your Favourite Authors</h4>
                {!articles.articles.data
                  ? "Loading"
                  : !articles.articles.data.following
                  ? null
                  : articles.articles.data.following.map(article => (
                      <div className="fav-author-article" key={article.id}>
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
                <div className="refresh">
                  <img src={icon_refresh} alt="Refresh feed icon" />
                </div>
              </div>
            </div>
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

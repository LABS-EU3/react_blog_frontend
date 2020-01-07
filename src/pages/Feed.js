import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DefaultNavigation from "../components/Navigation/Default";
import AuthedNavigation from "../components/Navigation/Authed";
import axios from "axios";
import arrow from "../assets/images/Icons/arrow_icon.svg";
import blue_arrow from "../assets/images/Icons/blue_arrow.svg";
import styled from "styled-components";

const mockTrendingArticles = [
  {
    title: "It's a Long Established Fact that You are Distracted",
    imageUrl:
      "https://images.unsplash.com/photo-1440985465094-6ac443aab454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Internet of Things booming 15 Trillion Market",
    imageUrl:
      "https://images.unsplash.com/photo-1506645292803-579c17d4ba6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "10 Tech Trends to Watch at CES 2020",
    imageUrl:
      "https://images.unsplash.com/photo-1490971588422-52f6262a237a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "These 5 Tech Trends Will Dominate 2020",
    imageUrl:
      "https://images.unsplash.com/photo-1486649961855-75838619c131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Building a Custom React Renderer",
    imageUrl:
      "https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  }
];

const mockUserInterestArticles = [
  {
    title: "It's a Long Established Fact that You are Distracted",
    tags: [
      { id: 1, tag: "Tech" },
      { id: 2, tag: "Health" }
    ],
    body: [
      {
        type: "paragraph",
        data: {
          text:
            "Internet of Things is one of the booming technologies among the blockchain, AI, and smart technologies. New exciting solutions are coming"
        }
      }
    ],
    author: "Damilola Oluwami",
    imageUrl:
      "https://images.unsplash.com/photo-1440985465094-6ac443aab454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Internet of Things booming 15 Trillion Market",
    tags: [
      { id: 1, tag: "Tech" },
      { id: 2, tag: "Business" }
    ],
    body: [
      {
        type: "paragraph",
        data: {
          text:
            "Internet of Things is one of the booming technologies among the blockchain, AI, and smart technologies. New exciting solutions are coming"
        }
      }
    ],
    author: "David Kuseh",
    imageUrl:
      "https://images.unsplash.com/photo-1506645292803-579c17d4ba6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "10 Tech Trends to Watch at CES 2020",
    tags: [
      { id: 1, tag: "Tech" },
      { id: 2, tag: "Business" },
      { id: 3, tag: "Events" }
    ],
    body: [
      {
        type: "paragraph",
        data: {
          text:
            "Internet of Things is one of the booming technologies among the blockchain, AI, and smart technologies. New exciting solutions are coming"
        }
      }
    ],
    author: "Uzoamaka Anyanwu",
    imageUrl:
      "https://images.unsplash.com/photo-1490971588422-52f6262a237a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "These 5 Tech Trends Will Dominate 2020",
    tags: [{ id: 1, tag: "Tech" }],
    body: [
      {
        type: "paragraph",
        data: {
          text:
            "Internet of Things is one of the booming technologies among the blockchain, AI, and smart technologies. New exciting solutions are coming"
        }
      }
    ],
    author: "Johnson Ogwuru",
    imageUrl:
      "https://images.unsplash.com/photo-1486649961855-75838619c131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Building a Custom React Renderer",
    tags: [{ id: 1, tag: "Tech" }],
    body: [
      {
        type: "paragraph",
        data: {
          text:
            "Internet of Things is one of the booming technologies among the blockchain, AI, and smart technologies. New exciting solutions are coming"
        }
      }
    ],
    author: "Francis Bulus",
    imageUrl:
      "https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "It's a Long Established Fact that You are Distracted",
    tags: [
      { id: 1, tag: "Tech" },
      { id: 2, tag: "Health" }
    ],
    body: [
      {
        type: "paragraph",
        data: {
          text:
            "Internet of Things is one of the booming technologies among the blockchain, AI, and smart technologies. New exciting solutions are coming"
        }
      }
    ],
    author: "Damilola Oluwami",
    imageUrl:
      "https://images.unsplash.com/photo-1440985465094-6ac443aab454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
    .trending-content-jumbo {
      width: 45%;
      background-color: grey;
      min-height: 60vh;
      border-radius: 10px;
      background: url(${mockTrendingArticles[0].imageUrl});
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

        img {
          width: 85%;
          height: 20vh;
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
  .main-reactions {
    width: 35%;
    background-color: #f7f9fb;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border-radius: 5px;
    max-height: 30vh;
    h4 {
      color: #2fc2df;
      font-family: Lato;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
    }
    .reaction-box {
      padding: 1rem;
      background-color: white;
      width: 90%;
      margin-top: 1rem;
      color: #b7bbc0;
    }
  }
`;

export function Feed(props) {
  const [articles, setArticles] = useState(mockTrendingArticles);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3300/api/articles")
  //     .then(res => {
  //       setArticles(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  return localStorage.getItem("token") ? (
    <div>
      <AuthedNavigation />
      <StyledFeed>
        <StyledTrending>
          <div className="trending-header">
            <button>TRENDING NOW</button>
          </div>
          <div className="trending-content">
            <div className="trending-content-jumbo">
              <h2>{mockTrendingArticles[0].title}</h2>
            </div>
            <div className="trending-content-regular">
              <div className="row">
                <div
                  className="content-box"
                  style={{
                    background: `url(${mockTrendingArticles[1].imageUrl})`
                  }}
                >
                  <h4>{mockTrendingArticles[1].title}</h4>
                </div>
                <div
                  className="content-box"
                  style={{
                    background: `url(${mockTrendingArticles[2].imageUrl})`
                  }}
                >
                  <h4>{mockTrendingArticles[2].title}</h4>
                </div>
              </div>
              <div className="row top-margin">
                <div
                  className="content-box"
                  style={{
                    background: `url(${mockTrendingArticles[3].imageUrl})`
                  }}
                >
                  <h4>{mockTrendingArticles[3].title}</h4>
                </div>
                <div
                  className="content-box"
                  style={{
                    background: `url(${mockTrendingArticles[4].imageUrl})`
                  }}
                >
                  <h4>{mockTrendingArticles[4].title}</h4>
                </div>
              </div>
            </div>
          </div>
        </StyledTrending>
        <StyledMainFeed>
          <div className="main-insights">
            <div className="main-header">
              <h4>INSIGHTS FROM YOUR INTERESTS</h4>
              <img src={arrow} alt="Arrow icon" />
            </div>
            <div className="main-content">
              {mockUserInterestArticles.map(article => {
                return (
                  <div className="main-article" key={article.id}>
                    <img
                      src={article.imageUrl}
                      alt="Article description image"
                    />
                    <div className="main-article-content">
                      <h3>{article.title}</h3>
                      <p>{article.body[0].data.text}</p>
                      <div className="main-article-footer">
                        <p>{article.author}</p>
                        <div className="article-link">
                          <a href={`/article/${article.id}`}>Details</a>
                          <img src={blue_arrow} alt="Blue Arrow" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="read-more">
                <button>Read More...</button>
              </div>
            </div>
          </div>
          <div className="main-reactions">
            <h4>Reactions</h4>
            {mockUserReactions.map(reaction => {
              return (
                <div className="reaction-box">
                  <p>{reaction.text}</p>
                </div>
              );
            })}
          </div>
        </StyledMainFeed>
      </StyledFeed>
    </div>
  ) : (
    <div>No articles</div>
  );
}

export default connect(state => state, {})(Feed);

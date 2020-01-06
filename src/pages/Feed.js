import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DefaultNavigation from "../components/Navigation/Default";
import AuthedNavigation from "../components/Navigation/Authed";
import axios from "axios";
import arrow from "../assets/images/Icons/arrow_icon.svg";
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

const mockUserInterestArticles = [];

const StyledFeed = styled.div`
  width: 100%;
  padding: 2rem;
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
      width: 40%;
      background-color: grey;
      min-height: 40vh;
      border-radius: 10px;
      background: url(${mockTrendingArticles[0].imageUrl});
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      align-items: flex-end;
      h2 {
        background: rgba(118, 116, 116, 0.62);
        color: white;
        padding: 2rem 2rem 1rem 2rem;
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 43px;
        border-radius: 0 0 10px 10px;
      }
    }
    .trending-content-regular {
      width: 60%;
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
          padding: 1.5rem 1rem 1rem 1.5rem;
          font-family: Lato;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 33px;
          border-radius: 0 0 10px 10px;
          width: 100%;
          height: 50%;
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
    min-height: 700px;
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
  }
  .main-reactions {
    width: 35%;
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

  return (
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
          </div>
          <div className="main-reactions"></div>
        </StyledMainFeed>
      </StyledFeed>
    </div>
  );
}

export default connect(state => state, {})(Feed);

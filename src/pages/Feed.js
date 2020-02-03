import React, { useEffect } from "react";
import { connect } from "react-redux";
import DefaultNavigation from "../components/Navigation/Default";
import AuthedNavigation from "../components/Navigation/Authed";
import { getArticleFeed } from "../redux-store/actions/get-article-actions";
import { getToken } from "../utilities/authentication";

import { Section, mixins } from "../styles/shared";
import styled from "styled-components";
import theme from "../styles/theme";
import TrendingCard from "../components/FeedArticles";
import ArticleCard from "../components/ArticleCardWide";
import Loader from "./Loader";

const Container = styled(Section)`
  margin-top: 8rem;
  min-width: 90vw;
  h1 {
    font-family: ${theme.fonts.Oswald};
    font-size: ${theme.fontSizes.ttl};
    padding-bottom: 1rem;
    border-bottom: 1px solid ${theme.colors.purple};
  }
  h2 {
    font-family: ${theme.fonts.Oswald};
    font-size: ${theme.fontSizes.xxl};
  }
`;

const StyledTrending = styled.div`
  width: 100%;
  .trending-content {
    display: flex;
    justify-content: space-between;
    max-height: 50vh;
    .big {
      width: 49%;
    }
    .small {
      width: 24%;
    }
  }
`;

const StyledFeed = styled.div`
  width: 100%;
  ${mixins.flexBetween};
  margin-top: 5rem;
  align-items: flex-start;
  .interests {
    width: 55%;
  }
  .following {
    width: 40%;
    align-self: stretch;
    .test {
      background-color: #FEF9E1;
      height: 100%;
      margin-top: 2rem;
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
    <>
      {token ? <AuthedNavigation /> : <DefaultNavigation />}

      <Container>
        <StyledTrending>
          <h1>TRENDING NOW</h1>
          {articles.loading ? (
            <Loader />
          ) : (
            articles.data.trending && (
              <div className="trending-content">
                <div className="big">
                  <TrendingCard
                    insight={articles.data.trending[0]}
                    type="jumbo"
                  />
                </div>
                {articles.data.trending.slice(1, 3).map(article => (
                  <div className="small">
                    <TrendingCard insight={article} type="reg"/>
                  </div>
                ))}
              </div>
            )
          )}
        </StyledTrending>
        <StyledFeed>
          <div className="interests">
            {!articles.loading && (
              <h2>
                {articles.data.interests
                  ? "INSIGHTS BASED ON YOUR INTERESTS"
                  : "EXPLORE INSIGHTS"}
              </h2>
            )}
            {articles.loading ? (
              <Loader />
            ) : (
              (articles.data.mainFeed || articles.data.interests) &&
              (articles.data.interests || articles.data.mainFeed)
                .slice(0, 3)
                .map(insight => <ArticleCard insight={insight} />)
            )}
          </div>
          <div className="following">
            {!articles.loading && <h2>INSIGHTS BASED ON YOUR FOLLOWING</h2>}
            {articles.loading ? <Loader /> : <div className="test">
                  <h3>No data</h3>
            </div>}
          </div>
        </StyledFeed>
      </Container>
    </>
  );
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps, { getArticleFeed })(Feed);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Wrapper,
  Details,
  Body,
  CoverImageContainer,
  StyledArticleTitle,
  DetailsContainer,
  HighlightedText,
  Hightlight,
  HiglightsTitle,
  HighlightsSection
} from "../utilities/styles/read-styles";
import Renderer from "../utilities/renderer";
import readTime from "../utilities/readTime";
import NavBar from "../components/Navigation/Authed";
// import BackArrow from "../assets/images/arrow.svg";
// import like from "../assets/images/like-icon.svg";
import Highligter from "../components/Highlight";
import { getSingleArticle } from "../redux-store/actions/get-article-actions";
// import { Link } from "react-router-dom";

const ReadArticle = props => {
  const { getSingleArticle, singleArticle, location } = props;
  useEffect(() => {
    const getArticle = () => {
      const params = location.pathname;
      const articleId = params.split("/");
      getSingleArticle(articleId[2]);
    };
    getArticle();
  }, [getSingleArticle, location.pathname]);

  const articleBody = singleArticle.body ? singleArticle.body : "[]";
  const content = JSON.parse(articleBody);
  return (
    <>
      <NavBar />
      <Wrapper>
        <CoverImageContainer>
          <img src={singleArticle.coverImageUrl} alt={singleArticle.title} />
        </CoverImageContainer>
        <StyledArticleTitle>{singleArticle.title}</StyledArticleTitle>
        <DetailsContainer>
          <span className="authorName">{singleArticle.authorName}</span> -{" "}
          {singleArticle.body && (
            <span className="readTime"> {`${readTime(singleArticle.body)} min read`}</span>
          )}
        </DetailsContainer>
        <Details>
        </Details>
        <Highligter article={singleArticle}>
          <Body>{Renderer(content)}</Body>
        </Highligter>
        < HighlightsSection>
        <HiglightsTitle>YOUR REACTIONS TO THIS ARTICLE</HiglightsTitle>
        </HighlightsSection>
      </Wrapper>
    </>
  );
};

const mapStateToProps = store => {
  return {
    singleArticle: store.articles.singleArticle
  };
};

export default connect(mapStateToProps, { getSingleArticle })(ReadArticle);

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
  HighlightsSection,
  BlankHighlightsMessage,
  Emoji,
  TagsAndLikes
} from "../utilities/styles/read-styles";
import emojiRenderer from "../utilities/emoji-renderer";
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

  console.log(singleArticle);
  const articleBody = singleArticle.body ? singleArticle.body : "[]";
  const content = JSON.parse(articleBody);
  singleArticle.userHighlights = [{emoji: "sob", highlighted_text: "bvere"}]
  return (
    <>
      <NavBar />
      <Wrapper>
        <CoverImageContainer>
          <img src={singleArticle.coverImageUrl} alt={singleArticle.title} />
        </CoverImageContainer>
        <StyledArticleTitle>{singleArticle.title}</StyledArticleTitle>
        <DetailsContainer>
          <p>by </p>
          <span className="authorName">{singleArticle.authorName}</span> -{" "}
          {singleArticle.body && (
            <span className="readTime">
              {" "}
              {`${readTime(singleArticle.body)} min read`}
            </span>
          )}
        </DetailsContainer>
        <Details></Details>
        <Highligter article={singleArticle}>
          <Body>{Renderer(content)}</Body>
        </Highligter>
        <TagsAndLikes>
          {singleArticle.tags && (
            <div className="tags">
              {singleArticle.tags.map((tag, index) => (
                <p key={index}>#{tag.name}</p>
              ))}
            </div>
          )}
        </TagsAndLikes>
        <HighlightsSection>
          <HiglightsTitle>YOUR REACTIONS TO THIS ARTICLE</HiglightsTitle>
          {singleArticle.userHighlights &&
          singleArticle.userHighlights.length ? (
            singleArticle.userHighlights.map((highlight, index) => (
              <Hightlight key={index}>
                <Emoji role="img">{emojiRenderer(highlight.emoji)}</Emoji>
                <HighlightedText>
                  "{highlight.highlighted_text.substring(0, 70)}..."
                </HighlightedText>
              </Hightlight>
            ))
          ) : (
            <BlankHighlightsMessage>
              You don't have any reactions to this article yet!
            </BlankHighlightsMessage>
          )}
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

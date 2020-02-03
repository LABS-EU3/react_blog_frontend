import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Wrapper,
  Details,
  Body,
  CoverImageContainer,
  StyledArticleTitle,
  DetailsContainer,
  TagsAndLikes
} from "../utilities/styles/read-styles";
import Renderer from "../utilities/renderer";
import readTime from "../utilities/readTime";
import NavBar from "../components/Navigation/Authed";
import Highligter from "../components/Highlight";
import Like from "../components/Like";
import { getSingleArticle } from "../redux-store/actions/get-article-actions";
import speak from "../assets/images/Icons/streaming.svg";
import Reactions from "./Reactions";

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
  singleArticle.userHighlights = [{ emoji: "sob", highlighted_text: "bvere" }];

  // eslint-disable-next-line array-callback-return
  const text = content.map(item => {
    if (typeof item.data.text === "string") {
      return item.data.text;
    }
  });

  console.log(text.join(""));
  const message = text.join("");

  const handleSpeak = () => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  };

  return (
    <>
      <NavBar />
      <Wrapper>
        <CoverImageContainer>
          <img src={singleArticle.coverImageUrl} alt={singleArticle.title} />
        </CoverImageContainer>
        <StyledArticleTitle>{singleArticle.title}</StyledArticleTitle>
        <DetailsContainer>
          <div>
            <p>by </p>
            <span className="authorName">
              {singleArticle.authorName}
            </span> -{" "}
            {singleArticle.body && (
              <span className="readTime">
                {" "}
                {`${readTime(singleArticle.body)} min read`}
              </span>
            )}
          </div>
          <div className="speech">
            <img onClick={handleSpeak} src={speak} alt="read out text aloud" />
          </div>
        </DetailsContainer>
        <Details></Details>
        <Highligter article={singleArticle}>
          <Body>{Renderer(content)}</Body>
        </Highligter>
        <TagsAndLikes hasLiked={singleArticle.hasLiked}>
          {singleArticle.tags && (
            <div className="tags">
              {singleArticle.tags.map((tag, index) => (
                <p key={index}>#{tag.name}</p>
              ))}
            </div>
          )}
          <div className="likes">
            <Like hasLiked={singleArticle.hasLiked}/>
            <p>
              {singleArticle.likeCount
                ? singleArticle.likeCount > 1
                  ? `${singleArticle.likeCount} likes`
                  : `${singleArticle.likeCount} like`
                : "0 likes"}
              {}
            </p>
          </div>
        </TagsAndLikes>
       <Reactions  {...props}/>
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

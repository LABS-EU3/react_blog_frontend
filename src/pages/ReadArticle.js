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
import {
  getSingleArticle,
  postLike
} from "../redux-store/actions/get-article-actions";
import speak from "../assets/images/Icons/icon-sound.svg";
import play from "../assets/images/Icons/play-button.svg";
import pause from "../assets/images/Icons/pause.svg";
import Reactions from "./Reactions";
import { getToken } from "../utilities/authentication";

const ReadArticle = props => {
  const { getSingleArticle, singleArticle, location, postLike } = props;
  useEffect(() => {
    const getArticle = () => {
      const params = location.pathname;
      const articleId = params.split("/");
      const token = getToken();
      const article_id = articleId[2];
      const data = {
        token,
        article_id
      }
      getSingleArticle(data);
    };
    getArticle();
  }, [getSingleArticle, location.pathname]);

  const handleLike = id => {
    postLike(id);
  };

  const articleBody = singleArticle.body ? singleArticle.body : "[]";
  const content = JSON.parse(articleBody);

  // eslint-disable-next-line array-callback-return
  const text = content.map(item => {
    if (typeof item.data.text === "string") {
      return item.data.text;
    }
  });
  const message = text.join("");


  const synth = window.speechSynthesis;

  const queue = (text, rate, pitch, voiceIndex) => {
    let utter = new SpeechSynthesisUtterance();
    utter.text = text;
    utter.rate = rate || 1;
    utter.pitch = pitch || 1;
    synth.speak(utter);
  };

  const handleSpeak = () => {
    queue(message);
  };

  const handlePause = () => {
    synth.pause();
  }

  const handleResume = () => {
    synth.resume();
  }

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
            <img onClick={handlePause} src={pause} title="pause" alt="read out text aloud" />
            <img className="speak" onClick={handleSpeak} src={speak} title="speak" alt="read out text aloud" />
            <img onClick={handleResume} src={play} title="continue" alt="read out text aloud" />
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
            <Like
              hasLiked={singleArticle.hasLiked}
              articleId={singleArticle.id}
              handleLike={handleLike}
            />
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
        <Reactions {...props} />
      </Wrapper>
    </>
  );
};

const mapStateToProps = store => {
  return {
    singleArticle: store.articles.singleArticle
  };
};

export default connect(mapStateToProps, { getSingleArticle, postLike })(
  ReadArticle
);

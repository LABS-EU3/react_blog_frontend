import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Wrapper,
  Details,
  StyledDetailsLeft,
  StyledDetailsRight,
  Body
} from "../utilities/styles/read-styles";
import Renderer from "../utilities/renderer";
import readTime from "../utilities/readTime";
import NavBar from "../components/Navigation/Authed";
import BackArrow from "../assets/images/arrow.svg";
import like from "../assets/images/like-icon.svg";
import speak from '../assets/images/Icons/streaming.svg'

import { getSingleArticle } from '../redux-store/actions/get-article-actions'
import { Link } from "react-router-dom";
import Highligter from "../components/Highlight";
import Reactions from './Reactions';


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

// eslint-disable-next-line array-callback-return
const text = content.map((item) => {
  if (typeof item.data.text === 'string'){
    return item.data.text
  }
});

console.log(text.join(''));
const message  = text.join('');

const handleSpeak = () => {
  let speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

  return (
    <>
      <NavBar />
      <Wrapper>
        <Details>
          <StyledDetailsLeft>
            <div className="back">
              <Link to="/feed">
                <img src={BackArrow} alt="back" />
              </Link>
            </div>
            <div className="tags">
              {singleArticle.tags
                ? singleArticle.tags.map((tag, index) => (
                    <p key={tag.id}>#{tag.name}</p>
                  ))
                : ""}
            </div>
            <h2 className="title">{singleArticle.title}</h2>

            <div className="bottom">
              <p className="author">{singleArticle.authorName}</p>
              {singleArticle.body && (
                <p className="readTimeLength">{`${readTime(
                  singleArticle.body
                )} min read`}</p>
              )}
            </div>
          </StyledDetailsLeft>
          <StyledDetailsRight>
            <img src={singleArticle.coverImageUrl} alt="IoT" />
          </StyledDetailsRight>
        </Details>
        <div className="stream">
          <img  onClick={handleSpeak} src={speak} alt="read out text aloud" />
        </div>
        <Highligter article={singleArticle}>
          <Body>{Renderer(content)}</Body>
        </Highligter>
        {/* <div className="like">
          <img src={like} alt="like icon" />
          <p>22</p>
        </div> */}
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

export default connect(mapStateToProps, { getSingleArticle })(ReadArticle);

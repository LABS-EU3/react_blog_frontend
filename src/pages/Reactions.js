import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getArticleReactions } from "../redux-store/actions/get-article-actions";


const emojis = [
  { name: "laugh", visual: "😂" },
  { name: "what", visual: "😐" },
  { name: "cool", visual: "👌🏽" },
  { name: "sob", visual: "😭" }
];

const findEmoji = (label) => {
  const reaction = emojis.find((item) => label === item.name);
  return reaction.visual;
}

const Wrapper = styled.div`
  background: #f3f3f3;
  font-size: 13px;
  padding: 2rem;

  h3 {
    font-size: 15px;
    margin-bottom: 1rem;
  }
  div {
    display: flex;
  }
  margin-bottom: 5rem;
`;

function Reactions(props) {
  const { getArticleReactions, articleReactions, location } = props;
  useEffect(() => {
    const getReactions = () => {
      const params = location.pathname;
      const articleId = params.split("/");
      getArticleReactions(articleId[2]);
    };
    getReactions();
  }, [getArticleReactions, location.pathname]);

  return (
    <Wrapper>
      <h3>Reactions</h3>
      {articleReactions.length !== 0 &&
        articleReactions.map(reaction => (
          <div className="single-reaction">
            <span role="img" aria-label="yo">
              {findEmoji(reaction.emoji)}
            </span>
            <p>{reaction.highlighted_text}</p>
          </div>
        ))}
    </Wrapper>
  );
}

const mapStateToProps = store => {
  return {
    articleReactions: store.articles.articleReactions
  };
};

export default connect(mapStateToProps, { getArticleReactions })(Reactions);

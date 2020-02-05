import React, { useEffect } from "react";
import emojiRenderer from "../utilities/emoji-renderer";
import { connect } from "react-redux";
import { getArticleReactions } from "../redux-store/actions/get-article-actions";
import {
  HighlightedText,
  Hightlight,
  HiglightsTitle,
  HighlightsSection,
  BlankHighlightsMessage,
  Emoji
} from "../utilities/styles/read-styles";

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
    <HighlightsSection>
      <HiglightsTitle>YOUR REACTIONS TO THIS ARTICLE</HiglightsTitle>
      {articleReactions && articleReactions.length ? (
        articleReactions.map((reaction, index) => (
          <Hightlight key={index}>
            <Emoji role="img">{emojiRenderer(reaction.emoji)}</Emoji>
            <HighlightedText>
              "{reaction.highlighted_text.substring(0, 70)}..."
            </HighlightedText>
          </Hightlight>
        ))
      ) : (
        <BlankHighlightsMessage>
          You don't have any reactions to this article yet!
        </BlankHighlightsMessage>
      )}
    </HighlightsSection>
  );
}

const mapStateToProps = store => {
  return {
    articleReactions: store.articles.articleReactions
  };
};

export default connect(mapStateToProps, { getArticleReactions })(Reactions);

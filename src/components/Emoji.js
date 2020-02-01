import React from "react";
import styled from "styled-components";
import { postReaction } from "../redux-store/actions/reaction-actions";
import { decodeToken } from "../utilities/checkToken";
import { connect } from "react-redux";

const emojis = [
  { name: "laugh", visual: "😂" },
  { name: "what", visual: "😐" },
  { name: "cool", visual: "👌🏽" },
  { name: "sob", visual: "😭" }
];

const StyledEmojiWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledEmoji = styled.span`
  transition: all 0.2s ease-in-out;
  padding: 0.5rem;
  font-size: 2.2rem;
  cursor: default;
  &:hover {
    transform: scale(1.4);
  }
`;

const Emoji = ({ article, emoji, string , postReaction}) => {
  const { subject: reactorId } = decodeToken();

  const handleEmoji = (name, string) => {
    const reaction = {
      authorId: article.authorId,
      reactorId,
      emoji: name,
      highlighted_text: string,
      articleId: article.id
    };

    postReaction(reaction);
  };

  return (
    <StyledEmoji
      role="img"
      key={emoji.name}
      onClick={() => handleEmoji(emoji.name, string)}
    >
      {emoji.visual}
    </StyledEmoji>
  );
};

const Emojis = ({ article, string, postReaction }) => {
  console.log(string, "here");
  return (
    <StyledEmojiWrapper>
      {emojis.map(emoji => (
        <Emoji
          emoji={emoji}
          string={string}
          key={emoji.name}
          article={article}
          postReaction={postReaction}
        />
      ))}
    </StyledEmojiWrapper>
  );
};

const mapStateToProps = state => {
  return {
    reaction: state.reaction
  };
};

export default connect(mapStateToProps, {
  postReaction
})(Emojis);

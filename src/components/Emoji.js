import React from "react";
import styled from "styled-components";
import { decodeToken } from "../utilities/checkToken";

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

const Emoji = ({ article, emoji, string }) => {
  const { subject: reactorId } = decodeToken();

  const handleEmoji = (name, string) => {
    const reaction = {
      authorId: article.authorId,
      reactorId,
      name,
      string,
      articleId: article.authorId
    };

    console.log(reaction);
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

export default ({ article, string }) => {
  console.log(string, "here");
  return (
    <StyledEmojiWrapper>
      {emojis.map(emoji => (
        <Emoji
          emoji={emoji}
          string={string}
          key={emoji.name}
          article={article}
        />
      ))}
    </StyledEmojiWrapper>
  );
};

const mapStateToProps = store => {
  return {
    singleArticle: store.articles.singleArticle
  };
};

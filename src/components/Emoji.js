import React from "react";
import styled from "styled-components";

const emojis = [
  { name: "laugh", visual: "😂" },
  { name: "love", visual: "❤️" },
  { name: "cool", visual: "😎" },
  { name: "sob", visual: "😭" }
];

const StyledEmojiWrapper = styled.div`
  display: "flex";
  justify-content: space-between;
`;

const Emoji = ({ emoji, handleEmoji, string }) => {
  return (
    <span
      role="img"
      key={emoji.name}
      onClick={() => handleEmoji(emoji.name, string)}
    >
      {emoji.visual}
    </span>
  );
};

export default ({ handleEmoji, string }) => {
  return (
    <StyledEmojiWrapper>
      {emojis.map(emoji => (
        <Emoji emoji={emoji} handleEmoji={handleEmoji} string={string} />
      ))}
      ;
    </StyledEmojiWrapper>
  );
};

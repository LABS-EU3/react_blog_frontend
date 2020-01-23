import React from "react";
import styled from "styled-components";

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

const Emoji = ({ emoji, handleEmoji, string }) => {
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

export default ({ handleEmoji, string }) => {
  return (
    <StyledEmojiWrapper>
      {emojis.map(emoji => (
        <Emoji emoji={emoji} handleEmoji={handleEmoji} string={string} />
      ))}
    </StyledEmojiWrapper>
  );
};

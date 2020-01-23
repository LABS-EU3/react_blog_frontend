import React from "react";

export const emojis = [
  { name: "laugh", visual: "😂" },
  { name: "love", visual: "❤️" },
  { name: "cool", visual: "😎" },
  { name: "sob", visual: "😭" }
];

export const Emoji = ({ emoji, handleEmoji, string }) => {
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

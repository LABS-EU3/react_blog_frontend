import React from "react";

const emojis = [
  { name: "laugh", visual: "😂" },
  { name: "love", visual: "❤️" },
  { name: "cool", visual: "😎" },
  { name: "sob", visual: "😭" }
];

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
    <div>
      {emojis.map(emoji => (
        <Emoji emoji={emoji} handleEmoji={handleEmoji} string={string} />
      ))}
      ;
    </div>
  );
};

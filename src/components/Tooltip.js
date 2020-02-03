import React from "react";
import Emojis from "./Emoji";
import "../utilities/styles/tooltip.css";

export default ({ article, string, toolTipLocStyle }) => {
  return (
    <div style={toolTipLocStyle} className="tooltip">
      <Emojis article={article} string={string} />
    </div>
  );
};

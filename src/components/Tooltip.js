import React from "react";
import Emojis from './Emoji'
import "../utilities/styles/tooltip.css";

export default props => {
  return (
    <div style={props.toolTipLocStyle} className="tooltip">
     <Emojis/>
    </div>
  );
};

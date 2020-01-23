import React from "react";
import "./tooltip.css";

export default props => {
  return (
    <div style={props.toolTipLocStyle} className="tooltip">
      <button className="tool-tip-item">Bleh</button>
    </div>
  );
};

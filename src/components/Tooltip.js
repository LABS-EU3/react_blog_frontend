import React from "react";

export const ToolTip = props => {
  return (
    <div className="tooltip" style={props.toolTipLocStyle}>
      <button className="button-tooltip" onClick={() => props.onHighLight()}>
        Sleep
      </button>
    </div>
  );
};

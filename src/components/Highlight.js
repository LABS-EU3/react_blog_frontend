import React, { useState } from "react";
import ToolTip from "./Tooltip";
import { positionToolTip } from "../utilities/highlightHelpers";

function Highlighter(props) {
  const [lastSelection, setLastSelection] = useState({});
  const [toolTip, setToolTip] = useState({ opacity: 0 });
  console.log(lastSelection);

  const handleMouseUp = e => {
    showToolTip();
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    console.log(selectedText);
  };

  const handleMouseDown = e => {
    setToolTip({ display: "none" });
  };

  const showToolTip = () => {
    if (document.getSelection() && document.getSelection().toString() !== "") {
      setLastSelection(document.getSelection().getRangeAt(0));
      setToolTip(positionToolTip(document.getSelection()));
    }
  };

  return (
    <div toolTipLocStyle={toolTip}>
      <ToolTip toolTipLocStyle={toolTip} setToolTip={setToolTip} />
      <div
        onMouseUp={e => handleMouseUp(e)}
        onMouseDown={e => handleMouseDown(e)}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Highlighter;

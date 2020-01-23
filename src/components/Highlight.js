import React, { useState } from "react";
import ToolTip from "./Tooltip";
import { positionToolTip } from "../utilities/highlightHelpers";

function Highlighter(props) {
  const [lastSelection, setLastSelection] = useState({});
  const [toolTip, setToolTip] = useState({ opacity: 0 });
  const [selectedText, setSelectedText] = useState("");
  console.log(lastSelection);

  const handleMouseUp = e => {
    const selection = window.getSelection();
    // const selectionRange = selection.getRangeAt(0);
    // const startNode = selectionRange.startContainer.parentNode;
    // const endNode = selectionRange.endContainer.parentNode;

    showToolTip();
    const string = selection.toString().trim();
    setSelectedText(string)
    console.log(selectedText);
  };

  const handleMouseDown = () => {
    setToolTip({ display: "none" });
  };

  const showToolTip = () => {
    if (document.getSelection() && document.getSelection().toString() !== "") {
      setLastSelection(document.getSelection().getRangeAt(0));
      setToolTip(positionToolTip(document.getSelection()));
    } else return;
  };

  return (
    <div toolTipLocStyle={toolTip}>
      <ToolTip
        toolTipLocStyle={toolTip}
        setToolTip={setToolTip}
        article={props.article}
        string={selectedText}
      />
      <div
        onMouseUp={e => handleMouseUp(e)}
        onMouseDown={() => handleMouseDown()}
        className="h-popable"
      >
        {props.children}
      </div>
    </div>
  );
}

export default Highlighter;

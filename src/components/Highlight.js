import React, { useState } from "react";
import ToolTip from "./Tooltip";
import { positionToolTip } from "../utilities/highlightHelpers";
import { isMobile } from "react-device-detect";

function Highlighter(props) {
  // eslint-disable-next-line no-unused-vars
  const [lastSelection, setLastSelection] = useState({});
  const [toolTip, setToolTip] = useState({ opacity: 0 });
  const [selectedText, setSelectedText] = useState("");

  const handleMouseUp = e => {
    if (!isMobile) {
      const selection = window.getSelection();
      showToolTip();
      const string = selection.toString().trim();
      setSelectedText(string);
    }
    else return;
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
    <div>
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

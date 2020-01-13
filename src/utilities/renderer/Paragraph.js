import React from "react";
import ReactHtmlParser from "react-html-parser";

const Paragraph = data => {
  if (!data) return "";

  let content;

  if (typeof data === "string") content = data;
  else if (
    typeof data === "object" &&
    data.text &&
    typeof data.text === "string"
  )
    content = data.text;

  return content ? (
    <div className="ce-paragraph cdx-block">{ReactHtmlParser(content)}</div>
  ) : (
    ""
  );
};

export default Paragraph;

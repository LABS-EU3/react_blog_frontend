import React from "react";
import ReactHtmlParser from "react-html-parser";

const Paragraph = (data, index) => {
  if (!data) return "";

  let content;

  if (typeof data === "string") content = data;
  else if (
    typeof data === "object" &&
    data.text &&
    typeof data.text === "string"
  )
    content = data.text;

  return content ? <p key={index}>{ReactHtmlParser(content)}</p> : "";
};

export default Paragraph;

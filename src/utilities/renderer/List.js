import React from "react";
import ReactHtmlParser from "react-html-parser";

const List = (data, index) => {
  if (!data) return "";

  let content = [],
    type = "unordered";

  if (typeof data === "string") content.push(data);
  else if (typeof data === "object") {
    if (data.items && Array.isArray(data.items))
      content = data.items.map((item, index) => (
        <li key={index} className="cdx-list__item">
          {ReactHtmlParser(item)}
        </li>
      ));
    if (data.style && (data.style === "ordered" || "unordered"))
      type = data.style;
  }

  if (content.length <= 0) return "";
  // eslint-disable-next-line no-unused-expressions
  type === "ordered" ? (
    <ol className="cdx-block cdx-list--ordered" key={index}>
      {content}
    </ol>
  ) : (
    <ul className="cdx-block cdx-list--unordered" key={index}>
      {content}
    </ul>
  );
};

export default List;

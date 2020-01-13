import React from "react";
import ReactHtmlParser from "react-html-parser";

const ImageOutput = data => {
  if (!data || !data.file || !data.file.url) return "";

  const captionStyle = {
    margin: "0 auto",
    fontStyle: "italic"
  };

  return (
    <div className="cdx-block cdx-simple-image">
      <div className="cdx-simple-image__picture">
        <img src={data.file.url} alt={data.caption || ""} />
      </div>
      {data.caption && (
        <figcaption style={captionStyle}>
          {ReactHtmlParser(data.caption)}
        </figcaption>
      )}
    </div>
  );
};

export default ImageOutput;
import React from "react";
import ReactHtmlParser from "react-html-parser";

const ImageOutput = (data, index) => {
  if (!data || !data.file || !data.file.url) return "";

  const captionStyle = {
    margin: "0 auto",
    fontStyle: "italic"
  };

  return (
    <div className="body-image"key={index}>
      <img src={data.file.url} alt={data.caption || ""} />
      {data.caption && (
        <figcaption style={captionStyle}>
          {ReactHtmlParser(data.caption)}
        </figcaption>
      )}
    </div>
  );
};

export default ImageOutput;

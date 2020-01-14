import React from "react";
import ReactHtmlParser from "react-html-parser";

const SimpleImage = (data, index) => {
  if (!data || !data || !data.url) return "";

  console.log(data);

  const captionStyle = {
    margin: "0 auto",
    fontStyle: "italic"
  };

  return (
    <div key={index} className="body-image">
      <img src={data.url} alt={data.caption || ""} />
      {data.caption && (
        <figcaption style={captionStyle}>
          {ReactHtmlParser(data.caption)}
        </figcaption>
      )}
    </div>
  );
};

export default SimpleImage;

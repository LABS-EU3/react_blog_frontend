import Header from "./header";
import Paragraph from "./Paragraph";
import Image from "./image";
import List from "./List";
import Table from "./Table";
import Delimiter from "./Delimiter";
import SimpleImage from './SimpleImage'

const Renderer = data => {
  if (!data || typeof data !== "object") return "";

  return data.map((block, index) => {
    switch (block.type) {
      case "header":
        return Header(block.data, index);
      case "list":
        return List(block.data, index);
      case "paragraph":
        return Paragraph(block.data, index);
      case "image":
        return Image(block.data, index);
      case "simpleImage":
        return SimpleImage(block.data, index);
      case "table":
        return Table(block.data, index);
      case "delimiter":
        return Delimiter;

      default:
        return "";
    }
  });
};

export default Renderer;

import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
import {apiURL} from './urls';

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: {
    class: Image,
    config: {
      endpoints: {
        byFile: `${apiURL}/articles/uploadFile`, // Your backend file uploader endpoint
        byUrl: "http://localhost:8008/api/articlesfetchUrl" // Your endpoint that provides uploading by Url
      },
    }
  },
  raw: Raw,
  header: Header,
  quote: Quote,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage
};

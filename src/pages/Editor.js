/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import "../fonts/HKGrotesk-Regular.woff";
import EditorJs from "react-editor-js";

import { EDITOR_JS_TOOLS } from "../utilities/editor-tools";


class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
    this.handleSave = this.handleSave.bind(this);
  }
  async handleSave() {
    const savedData = await this.editorInstance.save();
    console.log(JSON.stringify(savedData.blocks));
  }

  componentDidMount() {
    this.editorInstance; // access editor-js
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSave}>DIDDDDDD</button>
        <EditorJs
          tools={EDITOR_JS_TOOLS}
          placeholder={"Be Insightful"}
          instanceRef={instance => (this.editorInstance = instance)}
          data={{
            time: 1556098174501,
            blocks: [
              {
                type: "header",
                placeholder: "Blow My Mind",
                data: {
                  text: "Be Insightful",
                  level: 1
                }
              },
              {
                type: "paragraph",
                data: {
                  text:
                    "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
                }
              },
              {
                type: "header",
                data: {
                  text: "Key features",
                  level: 3
                }
              },
              {
                type: "list",
                data: {
                  style: "unordered",
                  items: [
                    "It is a block-styled editor",
                    "It returns clean data output in JSON",
                    "Designed to be extendable and pluggable with a simple API"
                  ]
                }
              },
              {
                type: "header",
                data: {
                  text: "What does it mean «block-styled editor»",
                  level: 3
                }
              },
              {
                type: "paragraph",
                data: {
                  text:
                    'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.'
                }
              },
              {
                type: "paragraph",
                data: {
                  text:
                    'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.'
                }
              },
              {
                type: "header",
                data: {
                  text: "What does it mean clean data output",
                  level: 3
                }
              },
              {
                type: "delimiter",
                data: {}
              },
            ],
            version: "2.12.4"
          }}
        />
      </div>
    );
  }
}

export default Editor

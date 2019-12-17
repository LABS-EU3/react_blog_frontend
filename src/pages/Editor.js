/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import "../fonts/HKGrotesk-Regular.woff";
import EditorJs from "react-editor-js";
import NavBar from "../components/NavBar";
import styled from "styled-components";

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
    this.editorInstance;
  }

  render() {
    return (
      <div>
        <NavBar />
        <button onClick={this.handleSave}>DIDDDDDD</button>
        <StyledEditor>
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
                      'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.'
                  }
                },
                {
                  type: "delimiter",
                  data: {}
                }
              ],
              version: "2.12.4"
            }}
          />
        </StyledEditor>
      </div>
    );
  }
}

export default Editor;

const StyledEditor = styled.div`
  @import url("../fonts/HKGrotesk-Regular.woff");
  font-family: "HKGrotesk-Regular";
  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 2.2rem;
  }

  h4 {
    font-size: 2rem;
  }

  h5 {
    font-size: 1.8rem;
  }
`;

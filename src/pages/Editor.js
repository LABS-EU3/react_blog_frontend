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
    this.document = document.getElementsByClassName("ce-header");
  }
  async handleSave() {
    const savedData = await this.editorInstance.save();
    console.log(JSON.stringify(savedData));
    console.log(this.document);
    this.document[0].addEventListener("keydown", () => {
      console.log("ehoo");
      this.document[0].setAttribute("placeholder", "democlass");
    });
  }

  componentDidMount() {
    this.editorInstance;
  }

  render() {
    return (
      <div id="editor-page">
        <NavBar editorInstance={this.handleSave} />
        {/* <button onClick={this.handleSave}>DIDDDDDD</button> */}
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
                  data: {
                    text: "Untitled",
                    level: 1
                  }
                }
              ]
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

  a {
    color: hotpink;
    text-decoration: none;

    &:hover {
      color: rgb(250, 71, 161);
    }
  }
  caret-color: #3d3e77;
`;

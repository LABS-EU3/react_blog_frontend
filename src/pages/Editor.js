/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import ArticleModal from "../components/ArticleModal";
import "../fonts/HKGrotesk-Regular.woff";
import EditorJs from "react-editor-js";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  savePostAsDraft,
  publishPost,
  handlePublishModal,
  savePost
} from "../redux-store/actions/post-article-actions";

import { EDITOR_JS_TOOLS } from "../utilities/editor-tools";
import uuid from "uuid";

const StyledEditor = styled.div`
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

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.newPost;
    this.handlePublish = this.handlePublish.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.publishPost = this.props.publishPost;
  }
  async handlePublish() {
    const editorData = await this.editorInstance.save();
    const title = editorData.blocks[0].data.text;
    const post = {
      id: uuid(),
      title,
      body: editorData.blocks,
      isPublished: true,
      isEditing: false
    };
    const tags = this.props.newPost.tags.map(tag => {
      return { ...tag, articleId: post.id };
    });
    this.publishPost({ ...post, tags });
  }


  async handleSave () {
    const editorData = await this.editorInstance.save();
    const title = editorData.blocks[0].data.text;
    const post = {
      id: uuid(),
      title,
      body: editorData.blocks,
      isPublished: false,
      isEditing: true
    };
    const tags = this.props.newPost.tags.map(tag => {
      return { ...tag, articleId: post.id };
    });
    this.props.savePost({ ...post, tags })
  }
  


  componentDidMount() {
    this.editorInstance
  }

  render() {
    return (
      <div id="editor-page">
        <NavBar handlePublish={this.handlePublish} handleSave={this.handleSave} />
        <ArticleModal handlePublish={this.handlePublish} />
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
                    text: "Title here...",
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

const mapStateToProps = state => {
  return {
    newPost: state.newPost
  };
};

export default connect(mapStateToProps, {
  handlePublishModal,
  publishPost,
  savePostAsDraft,
  savePost
})(Editor);

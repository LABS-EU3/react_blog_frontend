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

import { decodeToken } from "../utilities/checkToken";

import { EDITOR_JS_TOOLS } from "../utilities/editor-tools";
import uuid from "uuid";

const StyledTitleInput = styled.div`
  margin: 0 auto;
`;

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

  .ce-paragraph {
    font-size: 1.7rem !important;
  }

  a {
    color: hotpink;
    text-decoration: none;

    &:hover {
      color: rgb(250, 71, 161);
    }
  }
  caret-color: #3d3e77;

  input {
    font-family: "HKGrotesk-Regular";
    background-color: transparent;
    border: 0px solid;
    color: black;
    font-size: 4rem;
    margin-left: 30%;
    margin-top: 5rem;
    min-width: 100%;
  }
`;

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.newPost;
    this.handlePublish = this.handlePublish.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.publishPost = this.props.publishPost;
    this.titleRef = React.createRef();
  }
  async handlePublish(files) {
    const editorData = await this.editorInstance.save();
    console.log(editorData)
    const title = this.titleRef.current.value;
    const { subject: userId } = decodeToken();
    const formData = new FormData();
    let body = editorData.blocks
    const coverFile = files ? files[0] : null;
    const custom_id = uuid();
    if (coverFile) {
      coverFile["articleId"] = custom_id;
    }
    let tags = this.props.newPost.tags.map(tag => {
      return { ...tag, articleId: custom_id };
    });

    tags = JSON.stringify(tags)
    body = JSON.stringify(body)

    if (files) {
      formData.append("image", coverFile);
    }

    formData.append("custom_id", custom_id);
    formData.append("title", title);
    formData.append("authorId", userId);
    formData.append("body", body);
    formData.append("isPublished", true);
    formData.append("isEditing", false);
    formData.append("tags", tags);

    this.publishPost(formData);
  }

  async handleSave() {
    const editorData = await this.editorInstance.save();
    console.log(editorData);
    const title = this.titleRef.current.value;
    const { subject: userId } = decodeToken();
    const post = {
      custom_id: uuid(),
      title,
      authorId: userId,
      body: editorData.blocks,
      isPublished: false,
      isEditing: true
    };
    const tags = this.props.newPost.tags.map(tag => {
      return { ...tag, articleId: post.id };
    });
    this.props.savePost({ ...post, tags });
  }

  componentDidMount() {
    this.editorInstance;
  }

  render() {
    return (
      <div id="editor-page">
        <NavBar
          handlePublish={this.handlePublish}
          handleSave={this.handleSave}
        />
        <ArticleModal handlePublish={this.handlePublish} />
        <StyledEditor>
          <StyledTitleInput>
            <input
              type="text"
              id="name"
              name="title"
              placeholder="Insert legendary title here..."
              autoComplete="off"
              ref={this.titleRef}
            />
          </StyledTitleInput>
          <EditorJs
            tools={EDITOR_JS_TOOLS}
            placeholder={"Be Insightful"}
            instanceRef={instance => (this.editorInstance = instance)}
            data={{}}
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

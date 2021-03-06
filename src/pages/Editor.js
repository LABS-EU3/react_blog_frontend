/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import ArticleModal from "../components/ArticleModal";
import EditorJs from "react-editor-js";
import NavBar from "../components/Navigation/Authed";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  savePostAsDraft,
  publishPost,
  handlePublishModal,
  savePost
} from "../redux-store/actions/post-article-actions";
import { getSingleArticleToEdit } from "../redux-store/actions/get-article-actions";
import { isMobile } from "react-device-detect";
import theme from "../styles/theme";
import { decodeToken } from "../utilities/checkToken";
import { Section } from "../styles/shared";
import { EDITOR_JS_TOOLS } from "../utilities/editor-tools";
import uuid from "uuid";

const StyledTitleInput = styled.div`
  font-family: ${theme.fonts.Merriweather};
  width: 100%;
`;

const StyledRedirectContainer = styled(Section)`
  overflow-y: hidden !important;
  display: flex;
  align-content: center;
  div {
    height: 80%;
    align-self: center;
    margin-top: -10rem;
  }
  h3 {
    font-size: 3.5rem;
    color: ${theme.colors.purple};
    margin-bottom: 2.5rem;
  }
  p {
    font-size: ${theme.fontSizes.sm};
    margin-top: 1.5rem;
  }
  a {
    color: ${theme.colors.purple};
    &:hover {
      color: ${theme.colors.purple};
    }
  }
  blockquote {
    position: relative;
    padding-left: 10px;
    font-weight: 800;
    color: ${theme.colors.purple};
    padding: 1em;
    margin: 1em;
    margin-top: 0.7em;
    width: 100%;
    font-size: 22px;
    &:before {
      content: "“";
      font-family: serif;
      position: absolute;
      right: 100%;
      font-size: 70px;
      line-height: 0px;
      top: 50px;
      color: #78e08f;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 90%;
      width: 30px;
      height: 5px;
      background: #e56d39;
      left: 1em;
    }
  }
  span {
    font-weight: bold;
  }
`;

const StyledEditor = styled.div`
  font-family: ${theme.fonts.Muli} 
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
    font-family: ${theme.fonts.Merriweather};
    background-color: transparent;
    border: 0px solid;
    color: black;
    font-size: 3.5rem;
    margin-top: 5rem;
    min-width: 100%;
    margin-left: 29%;
    margin-top: 10rem;
  }
  blockquote, figcaption, .image-tool__caption {
    font-size: ${theme.fontSizes.sm}
}
`;

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { postToEdit: {}, editing: false };
    this.handlePublish = this.handlePublish.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.publishPost = this.props.publishPost;
    this.titleRef = React.createRef();
  }
  async handlePublish(files) {
    const editorData = await this.editorInstance.save();
    console.log(editorData);
    const title = this.titleRef.current.value;
    const { subject: userId } = decodeToken();
    const formData = new FormData();
    let body = editorData.blocks;
    const coverFile = files ? files[0] : null;
    const custom_id = uuid();
    if (coverFile) {
      coverFile["articleId"] = custom_id;
    }
    let tags = this.props.newPost.tags.map(tag => {
      return { ...tag, articleId: custom_id };
    });

    tags = JSON.stringify(tags);
    body = JSON.stringify(body);

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

    this.publishPost(formData).then(res => {
      if (res) {
        this.props.history.push(`/article/${res.custom_id}`);
      }
    });
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
    this.props.savePost({ ...post, tags }).then(res=> {
      if(res) {
      this.props.history.push(`/profile`)};
    });
  }

  componentDidMount() {
    this.editorInstance;
  }

  render() {
    console.log(this.props.articleToEdit);
    if (isMobile)
      return (
        <StyledRedirectContainer>
          <div>
            <h3>
              Hold up, buddy{" "}
              <span role="img" aria-label="img">
                ✋🏽
              </span>
            </h3>
            <p>
              Due to certain constraints imposed by native mobile web browsers,
              publishing on the Victorian beauty that is <span>Insightly</span>{" "}
              is best experienced on desktop and, as I’ve heard from a little
              bird, our native iOS & Android apps (both of which may or may not
              be happening soon).
            </p>
            <p>
              However, you may go back to your <Link to="/feed">feed</Link> and
              connect with other minds through the glorious art of written text.
              As Shakespeare once said:
            </p>
            <blockquote>“I had to swerve on ‘em… skrrrrrr."</blockquote>
          </div>
        </StyledRedirectContainer>
      );
   
    else
      return (
        <div id="editor-page">
          <NavBar
            handlePublish={this.handlePublish}
            handleSave={this.handleSave}
            saveButton={true}
            buttonLabel='Publish'
          />
          <ArticleModal handlePublish={this.handlePublish} />
          <StyledEditor>
            <StyledTitleInput>
              <input
                type="text"
                id="name"
                name="title"
                placeholder="Insert a legendary title here..."
                autoComplete="off"
                ref={this.titleRef}
                maxLength="50"
              />
            </StyledTitleInput>{" "}
            <EditorJs
              tools={EDITOR_JS_TOOLS}
              placeholder={"Be Insightful"}
              instanceRef={instance => (this.editorInstance = instance)}
              data={{blocks: this.props.articleToEdit.body}}
            />
          </StyledEditor>
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    newPost: state.newPost,
    articleToEdit: state.articles.articleToEdit
  };
};

export default connect(mapStateToProps, {
  handlePublishModal,
  publishPost,
  savePostAsDraft,
  savePost,
  getSingleArticleToEdit
})(Editor);

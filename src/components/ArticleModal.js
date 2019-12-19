// Modal.js
import React from "react";
import Tags from "./Tags";
import { createPortal } from "react-dom";
import {
  publishPost,
  savePostAsDraft,
  handlePublishModal
} from "../redux-store/actions/post-article-actions";
import { connect } from "react-redux";
import styled from "styled-components";
import logo from "../assets/logo-gradient.png";

const modalRoot = document.getElementById("article-modal");

export class ArticleModal extends React.Component {
  constructor(props) {
    super(props);
    this.element = document.createElement("div");
  }
  componentDidMount() {
    modalRoot.appendChild(this.element);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }
  render() {
    return createPortal(this.props.children, this.element);
  }
}

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.app = document.getElementById("root");
    this.editor = document.getElementById("editor-page");
    this.handlePublishModal = this.props.handlePublishModal;
  }

  onTagsChanged = newTags => {
    console.log("tags changed to: ", newTags);
  };

  onInputChanged = e => {
    console.log(`input value is now: ${e.target.value}`);
  };

  handleSubmit = e => {
    this.props.handlePublish();
    this.toggleModal();
  };

  toggleModal = () => {
    if (this.props.newPost.showModal) {
      this.app.style.filter = "blur(0px)";
      document.getElementById("editor-page").style.pointerEvents = "auto";
    } else {
      this.app.style.filter = "blur(4px)";
      document.getElementById("editor-page").style.pointerEvents = "none";
    }
    this.props.handlePublishModal();
  };

  render() {
    const { showModal } = this.props.newPost;

    return (
      <React.Fragment>
        {showModal ? (
          <ArticleModal>
            <StyledModal>
              <div className="modal-row-1">
                <div
                  className="modal-row-1-div"
                  onClick={() => this.toggleModal()}
                >
                  X
                </div>
                <div className="modal-row-1-div">
                  <img src={logo} alt="logo" />
                </div>
              </div>
              <div className="modal-quote">
                "Don't tell me the moon is shining; show me the glint of light
                on broken glass."
              </div>
              <div className="modal-top">
                <Tags
                  tags={[]}
                  onTagsChanged={this.onTagsChanged}
                  onInputChanged={this.onInputChanged}
                  placeholder="Add a tag for your Insight..."
                />
              </div>
              <div></div>
              <div className="modal-bottom">
                <button onClick={() => this.handleSubmit()}>Publish Now</button>
              </div>
            </StyledModal>
          </ArticleModal>
        ) : null}
      </React.Fragment>
    );
  }
}

const StyledModal = styled.div`
  background: #fff;
  position: absolute;
  opacity: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 30%;
  height: 300px;
  box-shadow: 0 5px 10px 2px rgba(195, 192, 192, 0.5);
  padding: 20px;
  text-align: center;
  div.modal-row-1 {
    display: flex;
    div {
      width: 50%;
      font-family: "Lato";
      display: flex;
      flex-direction: start;
      cursor: default;
    }
  }

  div.modal-quote {
    font-size: 1.3rem;
    font-family: "Lato";
    color: #808080;
  }

  div.modal-bottom {
    display: flex;
    button {
      background: #5759a9;
      border-color: #5759a9;
      width: 75%;
      color: white;
      border-radius: 4px;
      padding: 0.45rem 0.8rem;
      text-rendering: optimizeLegibility;
      cursor: pointer;
      font-size: 0.8em;
      font-family: "Lato";
      margin: 0 auto;
      &:hover,
      &:focus,
      &:visited {
        outline: none;
        transition: all 0.2s ease-in-out;
        background: #3d3e77;
        &:after {
          background: #5759a9;
          width: calc(100% - 40px);
        }
      }
    }
    img {
      height: 75%;
      width: 50%;
    }
  }

  button {
    background: #5759a9;
    border-color: #5759a9;
    color: white;
    border-radius: 4px;
    padding: 0.45rem 0.8rem;
    text-rendering: optimizeLegibility;
    cursor: pointer;
    font-size: 0.8em;
    font-family: "Lato";
    &:hover,
    &:focus,
    &:visited {
      outline: none;
      transition: all 0.2s ease-in-out;
      background: #3d3e77;
      &:after {
        background: #5759a9;
        width: calc(100% - 40px);
      }
    }
  }
`;

const mapStateToProps = state => {
  return {
    newPost: state.newPost
  };
};

export default connect(mapStateToProps, {
  handlePublishModal,
  publishPost,
  savePostAsDraft
})(ModalContainer);

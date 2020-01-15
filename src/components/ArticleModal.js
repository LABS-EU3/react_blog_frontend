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
import Button from "./Button";

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

function ModalContainer(props) {
  const onTagsChanged = newTags => {
    console.log("tags changed to: ", newTags);
  };

  const onInputChanged = e => {
    console.log(`input value is now: ${e.target.value}`);
  };

  const handleSubmit = e => {
    console.log("hello");
    props.handlePublish();
    toggleModal();
  };

  const toggleModal = () => {
    const app = document.getElementById("root");
    if (props.newPost.showModal) {
      app.style.filter = "blur(0px)";
      document.getElementById("editor-page").style.pointerEvents = "auto";
    } else {
      app.style.filter = "blur(4px)";
      document.getElementById("editor-page").style.pointerEvents = "none";
    }
    props.handlePublishModal();
  };
  const { showModal } = props.newPost;

  return (
    <React.Fragment>
      {showModal ? (
        <ArticleModal>
          <StyledModal>
            <div className="modal-row-1">
              <div className="modal-row-1-div" onClick={() => toggleModal()}>
                X
              </div>
              <div className="modal-row-1-div">
                <img src={logo} alt="logo" />
              </div>
            </div>
            <div className="modal-quote">
              "Don't tell me the moon is shining; show me the glint of light on
              broken glass."
            </div>
            <div className="modal-top">
              <Tags
                tags={[]}
                onTagsChanged={onTagsChanged}
                onInputChanged={onInputChanged}
                placeholder="Add a tag for your Insight..."
              />
            </div>
            <div></div>
            <div className="modal-bottom">
              <Button handleClick={handleSubmit} label="Publish Now" />
            </div>
          </StyledModal>
        </ArticleModal>
      ) : null}
    </React.Fragment>
  );
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
      display: flex;
      flex-direction: start;
      cursor: default;
    }
  }

  div.modal-quote {
    font-family: Lato;
    font-size: 1.3rem;
    font-weight: 500;
    color: #808080;
  }

  div.modal-bottom {
    display: flex;
    button {
      margin: auto;
      width: 200px;
      background: #323c5c;
    }
    img {
      height: 75%;
      width: 50%;
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

// Modal.js
import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
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

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  minHeight: "100px",
  width: "100%",
  border: "3px dashed #eaeaea"
};

const thumbsContainer2 = {
  display: "flex",
  alignContent: "center",
  minHeight: "100px",
  width: "100%",
  border: "3px dashed #eaeaea"
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
  width: "100%",
  justifyContent: "center"
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
  justifyContent: "center"
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
  padding: "1rem"
};

const placeholder = {
  display: "flex",
  margin: "0 auto",
  alignSelf: "center",
  color: "grey",
  fontSize: "1.4rem",
  height: "100%"
};

function ModalContainer(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="cover" />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

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

  const Upload = () => (
    <div {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} placeholde="here" />
      {!files.length ? (
        <div style={thumbsContainer2}>
          <p style={placeholder}>Upload a cover image</p>
        </div>
      ) : (
        <div style={thumbsContainer}>{thumbs}</div>
      )}
    </div>
  );

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
            <div>{Upload()}</div>
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

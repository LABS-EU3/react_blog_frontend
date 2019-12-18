// Modal.js
import React from "react";
import Tags from './Tags'
import { createPortal } from "react-dom";
import styled from "styled-components";
import save from "../assets/save.png";
import send from "../assets/send.png";

const modalRoot = document.getElementById("article-modal");

class ArticleModal extends React.Component {
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

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.app = document.getElementById("root");
    this.editor = document.getElementById("editor-page");
    this.state = {
      showModal: false
    };
  }

  toggleModal = async () => {
    console.log(this.editor);
    if (this.state.showModal) {
      this.app.style.filter = "blur(0px)";
      document.getElementById("editor-page").style.pointerEvents = "auto";
    } else {
      this.app.style.filter = "blur(4px)";
      document.getElementById("editor-page").style.pointerEvents = "none";
    }

    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    const { showModal } = this.state;

    return (
      <React.Fragment>
        <button className="modal-toggle-button" onClick={this.toggleModal}>
          {!showModal ? "Open Modal" : "Close Modal"}
        </button>
        {showModal ? (
          <ArticleModal>
            <StyledModal>
              <div className="modal-top">
              </div>
              <div className="modal-bottom">
                <div className="modal-bottom-left">
                  <img src={save} alt="paper-plane-send" />
                </div>
                <div className="modal-bottom-right">
                  <img src={send} alt="paper-plane-send" />
                </div>
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
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 35%;
  height: 300px;
  box-shadow: 0 5px 10px 2px rgba(195, 192, 192, 0.5);
  padding: 20px;
  text-align: center;
  div.modal-top {
      
  }

  div.modal-bottom {
      display: flex;
      div {align-content: center;
          img {
              height: 75%;
              width: 50%;
          }
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

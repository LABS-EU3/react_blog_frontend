import React from "react";
import { Icon } from "react-icons-kit";
import { bell } from "react-icons-kit/feather/bell";
import {
  publishPost,
  savePostAsDraft,
  handlePublishModal
} from "../redux-store/actions/post-article-actions";
import { connect } from "react-redux";
import logo from "../assets/logo-gradient.png";
import avatar from "../assets/random-avatar.jpeg";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 75%;
  padding-top: 2.0rem;

  div.left {
    display: flex;
    div {
      display: flex;
      div {
        padding-left: 1rem;
        padding-top: 0.5rem;
      }
    }
  }

  div.right {
    display: flex;
    justify-content: flex-end;
    div {
      padding-right: 1rem;
      padding-left: 0.6rem;
    }

    div.avatar-container {
      line-height: 0;
      display: inline-block;
      border: 2px solid rgba(255, 255, 255, 0.4);
      border-radius: 50%;
      transition: linear 0.25s;
      white-space: nowrap;

      img.avatar {
        border-radius: 50%;
        width: 32px;
        height: 32px;
      }
    }
  }

  a,
  button {
    background: #6F85FD;
    border-color: #6F85FD;
    color: white;
    border-radius: 4px;
    // padding: 0.45rem 0.8rem;
    padding: 0.8rem;
    width: 100px;
    font-size: 12px;
    text-rendering: optimizeLegibility;
    cursor: pointer;
    &:hover,
    &:focus,
    &:visited {
      outline: none;
      transition: all 0.2s ease-in-out;
      background: #5567CB;
      &:after {
        background: #5567CB;
        width: calc(100% - 40px);
      }
    }
  }

  button.draft {
    background: white;
    align-self: center;
    border-color: #6F85FD;
    color: #5759a9;
    &:hover,
    &:focus,
    &:visited {
      outline: none;
      transition: all 0.2s ease-in-out;
      color: #3d3e77;
      &:after {
        color: #5759a9;
        width: calc(100% - 40px);
      }
    }
  }
`;

const EditorNavBar = props => {
  const toggleModal = () => {
    if (props.newPost.showModal) {
      document.getElementById("root").style.filter = "blur(0px)";
      document.getElementById("editor-page").style.pointerEvents = "auto";
    } else {
      document.getElementById("root").style.filter = "blur(4px)";
      document.getElementById("editor-page").style.pointerEvents = "none";
    }
    props.handlePublishModal();
  };

  return (
    <Nav>
      <div className="left" style={{ width: "70%", margin: "0" }}>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className="right" style={{ width: "30%" }}>
        <div>
          <button className='draft' onClick={() => props.handleSave()}>Save for Later</button>
        </div>
        <div>
          <button onClick={() => toggleModal()}>Publish</button>
        </div>
        <div style={{ color: "#A9A9A9", paddingTop: "5px" }}>
          <Icon icon={bell} size={24} />
        </div>
        <div className="avatar-container">
          <img className="avatar" src={avatar} alt="avatar" />
        </div>
      </div>
    </Nav>
  );
};

const mapStateToProps = state => {
  return {
    newPost: state.newPost
  };
};

export default connect(mapStateToProps, {
  handlePublishModal,
  publishPost,
  savePostAsDraft
})(EditorNavBar);

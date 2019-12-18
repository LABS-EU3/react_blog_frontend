import React, { useState, useEffect } from "react";
import { Icon } from "react-icons-kit";
import { bell } from "react-icons-kit/feather/bell";
import logo from "../assets/logo-gradient.png";
import avatar from "../assets/random-avatar.jpeg";
import styled from "styled-components";

const Nav = styled.ul`
  @import url("https://fonts.googleapis.com/css?family=Lato");
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 75%;

  div.left {
    display: flex;
    font-family: Lato;
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

  button.draft {
    background: white;
    border-color: #5759a9;
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

const NavBar = props => {
 
  const handle = async e => {
    await props.editorInstance();
  };

  return (
    <Nav>
      <div className="left" style={{ width: "70%", margin: "0" }}>
        <div>
          <img src={logo} alt="logo" onClick={e => handle()} />
        </div>
        {/* <div>
          <div>Draft </div>
          <div style={{ color: "grey" }}>Saving</div>
        </div> */}
      </div>

      <div className="right" style={{ width: "30%" }}>
        <div>
          <button className="draft">Save for Later</button>
        </div>
        <div>
          <button>Publish</button>
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

export default NavBar;

import React from "react";
import { Icon } from "react-icons-kit";
import { bell } from "react-icons-kit/feather/bell";
import logo from "../assets/logo-gradient.png";

import styled from "styled-components";

const Nav = styled.ul`
  @import url("https://fonts.googleapis.com/css?family=Lato");
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 70%;
  div{
    display: flex;
    font-family: Lato;
  }

div.right {
    display: flex;
 div {
    padding-right: 1rem;
    padding-left: 1rem;
}
}


  a,
  button {
    background: #5759a9;
    border-color: #5759a9;
    color: white;
    border-radius: 4px;
    padding: 0.4rem 0.8rem;
    text-rendering: optimizeLegibility;
    cursor: pointer;
    display: flex;
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

const NavBar = () => {
  return (
    <Nav>
      <div style={{ width: "70%", margin: "0" }}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          Draft
        </div>
        <div>
          Saving
        </div>
      </div>

      <div className="right" style={{ width: "30%" }}>
        <div>
          <button>Publish</button>
        </div>
        <div  style={{ color: "#A9A9A9", marginTop: "3px"}}>
          <Icon icon={bell} size={24} />
        </div>
      </div>
    </Nav>
  );
};

export default NavBar;

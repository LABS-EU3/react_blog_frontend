import React, { useState, useEffect } from "react";
import { getToken } from "../utilities/authentication";
import { Section } from "../styles/shared";
import styled from "styled-components";
import theme from "../styles/theme";
import Hero from "../components/Hero";
import Showcase from "../components/Showcase";

const StyledSection = styled(Section)`
  margin-top: 10rem;
 
`;

export default function Home(props) {
  useEffect(() => {
    const token = getToken();
    if (token) {
      window.location.href = "/feed";
    }
  }, []);
  return (
    <div>
      <Hero />
      <Showcase/>
    </div>
  );
}

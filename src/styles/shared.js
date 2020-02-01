import styled from "styled-components";
import media from "./mediaQueries";
import { css } from "styled-components";
import theme from "./theme";
const { colors, fontSizes, fonts } = theme;

export const mixins = {
  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,

  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  bigButton: css`
    background-color: black;
    border-radius: ${theme.borderRadius};
    padding: 0.95rem 1.5rem;
    font-size: calc(${fontSizes.sm} - 0.5px);
    font-family: ${fonts.Muli};
    line-height: 1;
    border: 1px solid black;
    text-decoration: none;
    cursor: pointer;
    &:hover,
    &:focus,
    &:active {
    }
    &:after {
      display: none !important;
    }
  `,

  button: css`
    background-color: black;
    padding: 0.75rem 1rem;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.Muli};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    &:hover,
    &:focus,
    &:active {
    }
    &:after {
      display: none !important;
    }
  `
};

export const spaces = {
  lvl1: "4.5rem",
  lvl2: "4rem",
  lvl3: "3rem",
  lvl4: "2rem",
  lvl5: "1rem",
  lvl6: ".5rem",
  lvl7: ".25rem"
};

const rule = (label, value) => `${label}: ${value};`;

export const generateSpace = padding =>
  css`
    ${rule(padding, spaces.lvl1)}
    ${media.tablet`
      ${rule(padding, spaces.lvl3)}
    `}
    ${media.phablet`
      ${rule(padding, spaces.lvl3)}
    `}
    ${media.mobile`
      ${rule(padding, spaces.lvl4)}
    `}
  `;

export const Section = styled.section`
  margin: 0 auto;
  min-height: 100vh;
  ${generateSpace("padding")};
  max-width: 950px;
  ${media.tablet`padding: 10px 20px;`};
`;

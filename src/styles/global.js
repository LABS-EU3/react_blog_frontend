import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import media from "./media";
import reset from "styled-reset";
import LocalFonts from "./fonts";
const { colors, fontSizes, fonts } = theme;

export default createGlobalStyle`
${props => props.theme.preload.map(url => '@import url("' + url + '");')}
  ${reset}
  ${LocalFonts}
  * {
    box-sizing: border-box;
    line-height: 1.5em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    font-kerning: auto;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    width: 100%;
    height: 100%;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  body {
    background-color: ${colors.darkNavyEnd};
    width: 100%;
    overflow-x: hidden;
    color: #fff;
    font-family: ${fonts.Lato};
    line-height: 1.5em;
    font-size: ${fontSizes.xl} 
    ${media.tablet`font-size: ${fontSizes.lg};`};
    ${media.phablet`font-size: ${fontSizes.md}`};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600 !important;
    line-height: inherit;
    font-family: ${fonts.Lato};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ease-in .2s;
    
    &:hover {
      color: #fff;
    }
  }
`;

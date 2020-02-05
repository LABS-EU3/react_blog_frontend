import styled from "styled-components";
import media from "../../styles/mediaQueries";
import theme from "../../styles/theme";
import { Section } from "../../styles/shared";

export const Nav = styled.div`
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #ffffff;
`;

export const CoverImageContainer = styled.div`
  height: 45vh;
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    padding: 1rem;
    padding-left: 0;
    object-fit: cover;
    height: auto;
    width: 100%;
    max-height: 100%;
    margin: 0 auto;
  }
`;

export const StyledArticleTitle = styled.h2`
  font-family: ${theme.fonts.Merriweather};
  font-size: 30px !important;
  margin-top: 1rem;
  width: 100%;
  padding: 1rem;
  line-height: 4rem;
  ${media.phablet`font-size: 26px !important
  padding: 0.6rem;
  ;`}
`;

export const DetailsContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  p {
    font-size: ${theme.fontSizes.sm};
    display: inline;
  }
  ${media.phablet`
  padding: 0.6rem;
  ;`}
  color: ${theme.colors.purple}
  span {
    font-size: ${theme.fontSizes.sm}
    color: ${theme.colors.purple}
  }
  span.authorName{
    font-weight: bold;
  }

  .speech {
    img {
      width: 35px;
      height: auto;
      margin-top: -1.3rem;
      cursor: pointer;

      ${media.phablet`
    max-width: 25px;
    ;`}
    }

    .speak {
      width: 40px;
      border: 2px solid black;
      border-radius: 50px;
      margin: 0.3rem;
      
    }
  }
`;

export const Wrapper = styled(Section)`
  margin-top: 10rem;
  max-width: 800px;
  padding: 1rem;
  ${media.phablet`
  padding: 0.8rem;
  ;`}
  .like {
    margin-top: 5rem;
    margin-bottom: 3rem;
    margin-left: -2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    img {
      width: 40px;
      margin-right: 1rem;
    }
    p {
      font-size: 15px;
      font-weight: bold;
      color: #3652bf;
    }
  }
`;

export const Body = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 16px;
    font-weight: 400;
    color: #333333;
    padding: 1.5rem;
    ${media.phablet`
    padding: 1rem;
    ;`}
    line-height: 2.4rem;
  }

  .body-image {
    justify-content: center;
    display: flex;
    flex-direction: column;
    figcaption {
      padding-top: 1rem;
      font-size: 1.3rem;
    }
  }
  img {
      padding: 1rem;
      padding-left: 0;
      object-fit: cover;
      height: auto;
      width: 100%;
      max-height: 100%;
      margin: 0 auto;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HighlightsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${theme.colors.cream};
  width: 100%;
  margin: 0 auto;
  min-height: 10rem;
  margin-top: 5rem;
`;

export const HiglightsTitle = styled.h4`
  font-family: ${theme.fonts.Oswald};
  color: rgba(0, 0, 0, 0.65);
  margin: auto;
  ${media.phablet`
  font-size: ${theme.fontSizes.l};
  ;`}
`;

export const Hightlight = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  width: 100%;
  margin-top: 0.75rem;
`;

export const Emoji = styled.span`
  font-size: 1.6rem;
`;

export const HighlightedText = styled.p`
  font-family: ${theme.fonts.Muli};
  color: ${theme.colors.lightGrey};
  font-size: ${theme.fontSizes.sm}
  margin-right: 1rem;
`;

//import {heart} from 'react-icons-kit/fa/heart'

export const BlankHighlightsMessage = styled.p`
  font-family: ${theme.fonts.Muli};
  color: ${theme.colors.lightGrey};
  margin: 0 auto;
  font-size: ${theme.fontSizes.sm};
`;

export const TagsAndLikes = styled.div`
  padding: 0.85rem;

  ${media.midpc`
  position: relative;
  top: 0;
  left: 0
  `}

  .tags {
    position: fixed;
    top: 35rem;
    right: calc(100% - 25rem);
    ${media.midpc`
    position: relative;
    top: 0;
    left: 0
    display: flex;
    `}
    p {
      margin-right: 0.55rem;
    }
  }

  .likes {
    position: fixed;
    top: 35rem;
    left: calc(100% - 25rem);
    p {
      margin-top: -0.25rem;
      font-family: ${theme.fonts.Merriweather};
      font-weight: normal;
      ${media.midpc`
      display: flex;
      margin-top: 1rem;
      margin-left: .75rem;
      `}
    }
    svg {
      transition: all 0.3s ease-in-out;
      padding: 0.15rem;
      pointer-events: ${props => props.hasLiked ? 'none' : 'auto'}
      cursor: ${props => props.hasLiked ? 'none' : 'pointer'}
      &:hover {
        transform: scale(1.2);
      }
    }

    ${media.midpc`
    position: relative;
    top: 0;
    left: 0
    display: flex;
    margin-top: 1rem;
    `}
  }

  p {
    font-family: ${theme.fonts.Merriweather};
    font-size: ${theme.fontSizes.xs};
    max-width: auto;
    color: ${theme.colors.purple};
    font-weight: bold;
    margin-bottom: 0.25rem;
    text-align: center;
    text-transform: lowercase;
  }
`;

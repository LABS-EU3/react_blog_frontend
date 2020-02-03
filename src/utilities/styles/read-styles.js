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
  padding: 1rem;
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
    padding: 2rem;
    figcaption {
      padding-top: 1rem;
      font-size: 1.3rem;
    }
  }
  img {
    margin: 0 auto;
    max-width: 600px;
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
  .tags {
    position: fixed;
    top: 35rem;
    right: calc(100% - 25rem);
  }

  .like {
    position: fixed;
    top: 30rem;
    left: calc(100% - 25rem);

    svg {
      transition: all 0.3s ease-in-out;
      padding: .2rem;
      &:hover {
        transform: scale(1.2);
      }
    }
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

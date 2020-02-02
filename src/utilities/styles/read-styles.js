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

export const StyledDetailsLeft = styled.div`
  width: 45%;
  padding: 0rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .back {
    a {
      img {
        width: 40px;
        margin-left: -50px;
      }
    }
  }

  .title {
    font-size: 34px;
    line-height: 44px;
  }

  .bottom {
    display: flex;
    p {
      padding-right: 5rem;
      color: #3652bf;
      font-style: italic;
      font-size: 13px;
      font-weight: bold;
    }
  }

  .tags {
    display: flex;
    p {
      padding: 0.8rem;
      font-size: 12px;
      font-weight: bold;
      font-style: italic;
      color: #3652bf;
    }
  }
`;

export const StyledDetailsRight = styled.div`
  width: 55%;
  padding-right: 2.3rem;
  img {
    width: 100%;
    max-width: 550px;
    max-height: 270px;
    min-height: 270px;
    border-radius: 3px 0px 0px 3px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

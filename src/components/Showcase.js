import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import media from "../styles/mediaQueries";
import { Section, mixins } from "../styles/shared";
import tools from "../assets/tools.png";
import pattern from "../assets/pattern.png";
import feed from "../assets/feed.png";
import highlight from "../assets/highlight.png";

const StyledContainer = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 0rem;
`;

const StyledBar = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  span {
    display: inline-block;
    height: 6px;
    background: black;
    width: 80px;
  }
`;
const StyledSection = styled(Section)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 2rem;
  max-width: 1200px;
  font-family: ${theme.fonts.Muli};
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${theme.fonts.Muli};
    line-height: 3.5rem;
    color: black;
  }
  p {
    color: black;
  }
`;

const StyledShowCaseIntro = styled.div`
  width: 100%;
  margin-top: 3rem;
  h4 {
    font-family: ${theme.fonts.Muli};
    font-size: 3.2rem;
    max-width: 550px;
    line-height: 3.5rem;
    span {
      color: ${theme.colors.purple};
    }
  }
`;

const StyledShowCase = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  width: 100%;
  div {
    width: 100%;
  }
`;

const StyledShowCaseItem = styled.div`
  display: flex;
  justify-content: space-between;
  &:nth-of-type(2),
  &:nth-of-type(3) {
    margin-top: 11rem;
  }

  &:nth-of-type(3) {
    margin-bottom: 6rem;
  }

  &:nth-of-type(even) {
    flex-direction: row-reverse;
    div.text-container {
      margin-left: 0;
      margin-right: 5rem;
    }
  }

  div.image-container {
    border: 1.5px solid rgba(152, 108, 155, 0.5);
    width: 60%;
    background: url(${tools});
    opacity: 1;
    z-index: 5;
    padding: 0;
  }

  div.text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    margin-left: 5rem;
    min-height: 100%;
    h4 {
      max-width: 500px;
      font-size: 4.8rem;
      line-height: 4.5rem;
      justify-self: center;
      span {
        color: ${theme.colors.purple};
      }
    }
    p {
      font-size: ${theme.fontSizes.md};
      margin-top: 2rem;
      line-height: 2.8rem;
    }
  }
  img.showcase {
    padding: 0;
    padding-left: 0;
    object-fit: cover;
    height: auto;
    width: 100%;
    margin: 0 auto;
    ${media.phablet`width: 100%;`};
    height: 100%;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.15);
    display: hidden;
    opacity: 1;
  }
`;

const StyledPattern = styled.div`
  float: right;
  max-height: 50px;
  max-width: 50px;
  left: 150px;

  img {
    object-fit: cover;
    width: 100%;
    position: absolute;
    max-height: 70px;
    max-width: 80px;
    top: 215rem;
    z-index: -1;
  }

  img.one {
    object-fit: cover;
    width: 100%;
    position: absolute;
    max-height: 70px;
    max-width: 80px;
    top: 113rem;
    z-index: -1;
  }
`;

const StyledPattern2 = styled.div`
  float: left;
  max-height: 50px;
  max-width: 50px;
  margin-left: -3rem;
  img {
    object-fit: cover;
    width: 100%;
    position: absolute;
    max-height: 70px;
    max-width: 80px;
    top: 164rem;
    z-index: -1;
  }
`;

const Showcase = () => {
  return (
    <StyledContainer>
      <StyledSection>
        <StyledBar>
          <span></span>
        </StyledBar>
        <StyledShowCaseIntro>
          <h4>
            Being human is all about <br />
            connections - so should writing.
          </h4>
        </StyledShowCaseIntro>
        <StyledShowCase>
          <StyledShowCaseItem>
            <div className="image-container">
              <StyledPattern>
                <img src={pattern} alt="pattern" className="one" />
              </StyledPattern>
              <img src={tools} alt="writing" className="showcase" />
            </div>
            <div className="text-container">
              <h4>
                The tools <br />
                of a <span>craftsman.</span>
              </h4>
              <p>
                Write easily using our block-based approach to content creation
                and a host of in-line formatting tools at your disposal. After
                all, a craftsman is only as good as the tool he/she possesses.
              </p>
            </div>
          </StyledShowCaseItem>
          <StyledShowCaseItem>
            <div className="image-container">
              <StyledPattern2>
                <img src={pattern} alt="pattern" />
              </StyledPattern2>
              <img src={feed} alt="writing" className="showcase" />
            </div>
            <div className="text-container">
              <h4>
                Find what <br /> <span>matters</span> to you
              </h4>
              <p>
                As a reader, it’s easy to get overwhelmed by the thousands of
                voices around you. Pick and hone in on what you want to hear
                through our curated posts feed.
              </p>
            </div>
          </StyledShowCaseItem>
          <StyledShowCaseItem className="second">
            <div className="image-container">
              <StyledPattern>
                <img src={pattern} alt="pattern" />
              </StyledPattern>
              <img src={highlight} alt="writing" className="showcase" />
            </div>
            <div className="text-container">
              <h4>
                Find a <br />
                line that <span>you like</span>?
              </h4>
              <p>
                React to sentences in an article using a carefully selected set
                of emojis to express how you feel about the writer’s thoughts.
              </p>
            </div>
          </StyledShowCaseItem>
        </StyledShowCase>
      </StyledSection>
    </StyledContainer>
  );
};

export default Showcase;

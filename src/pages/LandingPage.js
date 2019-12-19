import React from "react";
import "../fonts/style.css";
import styled from "styled-components";
import lp from "../assets/images/landing-jumbo.svg";
import demo from "../assets/images/demo.svg";
import logo from "../assets/images/logo.png";
import ps from "../assets/images/ps.png";
import appstr from "../assets/images/appstr.png";
import Button from "../components/Button";
import DefaultNav from "../components/Navigation/Default";
import { Link } from "react-router-dom";

const LandingPage = props => {
  const Main = styled.div`
    height: 100%;
    margin: auto;
    font-family: "Lato", sans-serif;

    .rgstr-link {
      width: 30%;
      height: 6vh;
      button {
        width: 100%;
        height: 100%;
        font-size: 20px;
        &.try-btn {
            width: 50%;
        }
      }
    }
  `;

  const MidContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    width: 100%;
  `;

  const About = styled.div`
    width: 45%;
    color: #205284;
    padding-left: 5%;
    h3 {
      font-size: 40px;
    }

    p {
      margin-top: 40px;
      font-size: 20px;
    }

    form div {
      margin-top: 60px;
      display: flex;
    }

    .email {
      height: 6vh;
      background-color: #c6d0eb;
      width: 60%;
      border: none;
      border-radius: 5px;
      font-size: 20px;
      margin-right: 1rem;
      padding-left: 15px;
    }
  `;

  const LpImage = styled.div`
    max-width: 55%;
    display: flex;
    justify-content: flex-end;
    img {
      min-width: 95%;
      max-height: 60vh;
    }
    padding-right: 5%;
  `;

  const Logo = styled.div`
    p {
      font-family: "HK Grotesk Bold";
      color: #212c4f;
      font-weight: 800;
      font-size: 2rem;
      margin-left: 30px;
    }
  `;

  const Features = styled.div`
    background-color: #f1f6fd;
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
    width: 100%;
    padding: 2.5% 4%;
    h3 {
      color: #205284;
      padding: 20px 0;
      font-size: 36px;
    }
    .feat {
      width: 30%;
      // padding: 2rem;
    }

    p {
      font-size: 22px;
      color: #646f79;
      padding-bottom: 30px;
    }
  `;
  const Demo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 2% 4%;
    p {
      color: #205284;
      font-size: 64px;
      width: 40%;
    }
    img {
      width: 50%;
      padding: 2%;
    }
  `;

  const Space = styled.div`
    background-color: #f1f6fd;
    height: 226px;
  `;

  const Pitch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10vh 4vh;
    text-align: center;
    h3 {
      font-size: 48px;
      color: #205284;
      margin-bottom: 2rem;
    }
    p {
      font-size: 24px;
      color: #646f79;
      margin-bottom: 2rem;
    }
  `;

  const BottomMenu = styled.div`
    background-color: #212c4f;
    font-family: "HK Grotesk Light";
    display: flex;
    padding: 60px 0;
    justify-content: space-around;

    .header {
      color: #686868;
    }

    .content li {
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      text-decoration: none;
      color: #ffffff;
    }
  `;
  const Footer = styled.div`
    background-color: #123d63;
    font-family: "HK Grotesk Light";
    padding: 50px 0;
    display: flex;
    justify-content: space-around;

    li {
      color: #ffffff;
      text-decoration: none;
    }

    img {
      margin: 0 20px;
    }
  `;

  return (
    <Main>
      <DefaultNav {...props} />
      <MidContent>
        <About>
          <h3>Write Good Articles Effortlessy</h3>
          <p>
            Insight is a writing and publishing platform that allows readers to
            highlight text and react to paragraph blocks with emojis and for the
            authors to see emoji stats on their writings.
          </p>
          <form>
            <div>
              <input
                value={null}
                type="email"
                className="email"
                placeholder="Enter your email address"
              />
              <Link to="/register" className="rgstr-link">
                <Button label="Try for free" />
              </Link>
            </div>
          </form>
        </About>

        <LpImage>
          <img src={lp} alt="landing-page" />
        </LpImage>
      </MidContent>

      <Features>
        <div className="feat">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </p>
        </div>
        <div className="feat">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </p>
        </div>
        <div className="feat">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </p>
        </div>
      </Features>

      <Demo>
        <p>Watch Insight in Action</p>
        <img src={demo} alt="app demo" />
      </Demo>

      <Space></Space>

      <Pitch>
        <h3>Get Better Work Done</h3>
        <p>See why millions of people across 100 countries use Insight</p>
        <Link to="/register" className="rgstr-link">
          <Button label="Try for free" className="try-btn" />
        </Link>
      </Pitch>

      <BottomMenu>
        <img src={logo} alt="logo" width="80px" height="80px" />
        <div className="content">
          <p className="header">Insight</p>
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Premium</li>
          </ul>
        </div>
        <div className="content">
          <p className="header">About Us</p>
          <ul>
            <li>Company</li>
            <li>Leadership</li>
            <li>Customers</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="content">
          <p className="header">Solutions</p>
          <ul>
            <li>Open Source Editor</li>
            <li>Emoji React</li>
            <li>Voice to Text</li>
          </ul>
        </div>
        <div className="content">
          <p className="header">Resources</p>
          <ul>
            <li>Insight Guide</li>
            <li>Forum</li>
            <li>Support</li>
            <li>Events</li>
          </ul>
        </div>
      </BottomMenu>

      <Footer>
        <ul>
          <li>Terms & Privacy</li>
        </ul>
        <div>
          <img src={appstr} alt="apple store" />
          <img src={ps} alt="google playstore" />
        </div>
      </Footer>
    </Main>
  );
};

export default LandingPage;

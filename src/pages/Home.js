import React, { useState } from "react";
import Default from "../components/Navigation/Default";
import Modal from "../components/Modal";
import Login from "./Login";

import lp from "../assets/images/landing-jumbo.svg";
import demo from "../assets/images/demo.GIF";
import PrimaryFooter from "../components/Footer/PrimaryFooter";
import SecondaryFooter from "../components/Footer/SecondaryFooter";
import Button from "../components/Button";
import { Link } from "react-router-dom";

import {
  Main,
  MidContent,
  About,
  LpImage,
  Features,
  Demo,
  Space,
  Pitch
} from "../utilities/styles/home-styles";

export default function Home(props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Default handleOpen={setOpen} {...props} />
      {open && (
        <Modal height="450px" width="380px" handleOpen={setOpen}>
          <Login />
        </Modal>
      )}
      <Main>
        <MidContent>
          <About>
            <h3>Write Good Articles Effortlessly</h3>
            <p>
              Insight is a writing and publishing platform that allows readers
              to highlight text and react to paragraph blocks with emojis and
              for the authors to see emoji stats on their writings.
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
                  <Button className="button" label="Try for free" />
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
          </div>
          <div className="feat">
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
          </div>
          <div className="feat">
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
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
      </Main>
      <PrimaryFooter />
      <SecondaryFooter />
    </div>
  );
}

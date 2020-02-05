import React, { useState, useEffect } from "react";
import Default from "../components/Navigation/Default";
import Modal from "../components/Others/Modal";
import Login from "./Login";

import lp from "../assets/images/landing-jumbo.svg";
import demo from "../assets/images/demo.GIF";
import PrimaryFooter from "../components/Footer/PrimaryFooter";
import SecondaryFooter from "../components/Footer/SecondaryFooter";
import Button from "../components/Buttons/Button";
import { Link } from "react-router-dom";
import { getToken } from '../utilities/authentication';


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

  useEffect(() => {
    const token = getToken();
    if (token) {
      window.location.href = '/feed';
    }
  }, [])
  return (
    <div>
    

    </div>
  );
}

import React from "react";
import Editor from "./pages/Editor"
import Home from './components/ArticleModal'
import LandingPage from './pages/LandingPage'
import { createGlobalStyle } from "styled-components";


function App() {
  return <>
  {/* <div className="App">Welcome to our blog publishing platform</div> */}
  <Editor/>
  <Home/>
  </>;
}

export default App;
